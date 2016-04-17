from sqlalchemy import desc
from apella import app, db
from flask_restful import Resource, Api
from flask import request
from models import User, Proposal, ProposalAction, Conclusion, Premise, Objection, Source
from base import BaseResource

api = Api(app)


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')

    return response


"""
Sorting/filtering:

Filtering:
Status
Created bucket
Locality

Sorting:
Consensus
Supporters


"""

ACCEPTED_PARAMS = {"sort": lambda sort_value: sort_value in ["consensus.asc",
                                                             "supporters.asc",
                                                             "consensus.desc",
                                                             "supporters.desc"],
                   "num_per_page": lambda num_per_page: int(num_per_page) <= 20,
                   "status": "tbd"}


def parse_args(args):
    pass

class ProposalResource(Resource):
    def get(self, proposal_id=None):
        if proposal_id:
            proposal = Proposal.query.get(proposal_id)
            return proposal.as_dict()
        else:
            sort_option = request.args.get('sort')
            status_filter = request.args.get('status')

            page_num = int(request.args.get('page_num', 1))
            num_per_page = int(request.args.get('num_per_page', 100))
            offset_start = (page_num - 1) * num_per_page
            offset_end = offset_start + num_per_page
            proposal_query = Proposal.query.slice(offset_start, offset_end)
            if status_filter:
                status_filter = status_filter.split(',')
                proposal_query = proposal_query.filter(getattr(Proposal, 'status').in_(status_filter))
            if sort_option:
                proposal_query = proposal_query.order_by(desc(sort_option))

            proposal_results = proposal_query.all()
            return [proposal.as_dict() for proposal in proposal_results]

    def put(self, proposal_id):
        proposal = Proposal.query.get(proposal_id)
        updated = proposal.from_dict(request.json)
        db.session.add(updated)
        db.session.commit()
        return updated.as_dict()

    def post(self):
        proposal = Proposal(**request.json)
        db.session.add(proposal)
        db.session.flush()
        return proposal.as_dict()

class ConclusionResource(BaseResource):
    model_class = Conclusion
    model_name = "conclusion"
    associated_objects = ["premises"]

class PremiseResource(BaseResource):
    model_class = Premise
    model_name = "premise"
    associated_objects = ["conclusions, sources"]

class SourceResource(BaseResource):
    model_class = Source
    model_name = "source"
    associated_objects = ["premises"]

class ObjectionResource(BaseResource):
    model_class = Objection
    model_name = "objection"

api.add_resource(ProposalResource, '/proposal/<string:proposal_id>', '/proposal')
api.add_resource(ConclusionResource, '/conclusion/<string:conclusion_id>', '/conclusion')
api.add_resource(PremiseResource, '/premise/<string:premise_id>', '/premise')
api.add_resource(SourceResource, '/source/<string:source_id>', '/source')
api.add_resource(ObjectionResource, '/objection/<string:objection_id>', '/objection')

if __name__ == '__main__':
    app.run(debug=True)
