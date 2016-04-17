import json
from apella import db
from datetime import datetime
from base import SerializedModel


class Proposal(db.Model, SerializedModel):
    __tablename__ = "proposal"
    __table_args__ = {'schema': 'apella'}

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    date_created = db.Column(db.DateTime, default=datetime.now, index=True)
    title = db.Column(db.String)
    description = db.Column(db.String)
    snippet = db.Column(db.String)
    supporters = db.Column(db.Integer, index=True)
    detractors = db.Column(db.Integer)
    followers = db.Column(db.Integer)
    status = db.Column(db.String)


class User(db.Model, SerializedModel):
    __tablename__ = "user"
    __table_args__ = {'schema': 'apella'}

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    date_created = db.Column(db.DateTime, default=datetime.now, index=True)
    username = db.Column(db.String, nullable=False, index=True, unique=True)
    password = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, index=True, unique=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    address = db.Column(db.String)
    city = db.Column(db.String)
    state = db.Column(db.String, index=True)
    avatar = db.Column(db.String)


class ProposalAction(db.Model, SerializedModel):
    __tablename__ = "proposal_action"
    __table_args__ = {'schema': 'apella'}

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    action = db.Column(db.String, nullable=False, index=True)
    date_created = db.Column(db.DateTime, default=datetime.now, index=True)
    proposal_id = db.Column(db.Integer, db.ForeignKey('apella.proposal.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('apella.user.id'))

    proposal = db.relationship('Proposal', backref=db.backref('proposal_action'))
    user = db.relationship('User', backref=db.backref('proposal_action'))

conclusion_premise = db.Table('conclusion_premise',
                              db.Column('conclusion_id', db.Integer, db.ForeignKey('apella.conclusion.id')),
                              db.Column('premise_id', db.Integer, db.ForeignKey('apella.premise.id')),
                              )

source_premise = db.Table('source_premise',
                          db.Column('source_id', db.Integer, db.ForeignKey('apella.source.id')),
                          db.Column('premise_id', db.Integer, db.ForeignKey('apella.premise.id')),
                          )

class Conclusion(db.Model, SerializedModel):
    __tablename__ = "conclusion"
    __table_args__ = {'schema': 'apella'}

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    date_created = db.Column(db.DateTime, default=datetime.now, index=True)
    title = db.Column(db.String)
    description = db.Column(db.String)
    supporters = db.Column(db.Integer, index=True)
    detractors = db.Column(db.Integer)
    followers = db.Column(db.Integer)
    status = db.Column(db.String, index=True)

    premises = db.relationship('Premise',
                               secondary=conclusion_premise,
                               backref=db.backref('conclusions', lazy='dynamic'))


class Premise(db.Model, SerializedModel):
    __tablename__ = "premise"
    __table_args__ = {'schema': 'apella'}

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    date_created = db.Column(db.DateTime, default=datetime.now, index=True)
    title = db.Column(db.String)
    description = db.Column(db.String)
    supporters = db.Column(db.Integer, index=True)
    detractors = db.Column(db.Integer)
    followers = db.Column(db.Integer)
    status = db.Column(db.String)



class Source(db.Model, SerializedModel):
    __tablename__ = "source"
    __table_args__ = {'schema': 'apella'}

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    date_created = db.Column(db.DateTime, default=datetime.now, index=True)
    title = db.Column(db.String)
    description = db.Column(db.String)
    type = db.Column(db.String, index=True)
    attribution = db.Column(db.String)
    score = db.Column(db.Integer)
    supporters = db.Column(db.Integer, index=True)
    detractors = db.Column(db.Integer)
    followers = db.Column(db.Integer)
    status = db.Column(db.String, index=True)

    premises = db.relationship('Premise', secondary=source_premise, backref=db.backref('sources', lazy='dynamic'))


class Objection(db.Model, SerializedModel):
    __tablename__ = "objection"
    __table_args__ = {'schema': 'apella'}

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    date_created = db.Column(db.DateTime, default=datetime.now, index=True)
    title = db.Column(db.String)
    description = db.Column(db.String)
    type = db.Column(db.String, index=True)
    source_id = db.Column(db.Integer, default=None, index=True)
    premise_id = db.Column(db.Integer, default=None, index=True)
    conclusion_id = db.Column(db.Integer, default=None, index=True)
    supporters = db.Column(db.Integer, index=True)
    detractors = db.Column(db.Integer)
    followers = db.Column(db.Integer)
    status = db.Column(db.String, index=True)


db.create_all()
