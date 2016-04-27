from sqlalchemy import desc
from sqlalchemy.exc import IntegrityError
from apella import app, db
from flask_restful import Resource, Api, abort
from flask import request
from apella.utils import create_tree, merge_two_dicts
from models import User, Proposal, ProposalAction, Conclusion, Premise, Objection, Source, PremiseNode
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

class PremiseResource(BaseResource):
    model_class = Premise
    model_name = "premise"
    associated_objects = ["conclusions", "sources"]

    def post(self):
        parent_premise_id = request.json.pop("parent_premise_id", None)
        conclusion_id = request.json.pop("conclusion_id", None)
        current_model = self.model_class(**request.json)
        db.session.add(current_model)

        try:
            db.session.commit()
        except IntegrityError as e:
            db.session.rollback()
            return abort(404, message="{} already exists: {}".format(self.model_name, e.message))

        if parent_premise_id or conclusion_id:
            db.session.add(PremiseNode(premise_id=current_model.id,
                                       parent_premise_id=parent_premise_id,
                                       conclusion_id=conclusion_id))
            db.session.commit()

        return current_model.as_dict()

class PremiseNodeResource(BaseResource):
    model_class = PremiseNode
    model_name = "premise_node"

    def get(self, conclusion_id):
        results = self.model_class.query.filter_by(conclusion_id=conclusion_id).all()
        if not results:
            abort(404, message="Object {} not found".format(id))
        # merged_results = [merge_two_dicts(result.as_dict(), result.premise.as_dict()) for result in results]
        # tree_results = create_tree(merged_results)
        return [result.as_dict() for result in results]

class ConclusionResource(BaseResource):
    model_class = Conclusion
    model_name = "conclusion"
    associated_objects = ["premises"]

class SourceResource(BaseResource):
    model_class = Source
    model_name = "source"
    associated_objects = ["premises"]

class ObjectionResource(BaseResource):
    model_class = Objection
    model_name = "objection"

api.add_resource(ProposalResource, '/proposal/<int:proposal_id>', '/proposal')
api.add_resource(ConclusionResource, '/conclusion/<int:conclusion_id>', '/conclusion')
api.add_resource(PremiseResource, '/premise/<int:premise_id>', '/premise')
api.add_resource(PremiseNodeResource, '/premise_node/<int:conclusion_id>')
api.add_resource(SourceResource, '/source/<int:source_id>', '/source')
api.add_resource(ObjectionResource, '/objection/<int:objection_id>', '/objection')

if __name__ == '__main__':
    app.run(debug=True)
