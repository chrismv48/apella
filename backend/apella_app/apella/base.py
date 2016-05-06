"""Docstring goes here"""
from datetime import datetime
import json

from flask_restful import Resource, abort
from sqlalchemy.exc import IntegrityError
from flask import request

from apella import db


class BaseResource(Resource):
    model_name = None
    model_class = None
    associated_objects = []

    def get(self, id=None):
        if id:
            results = self.model_class.query.get(id)
            if not results:
                abort(404, message="{} {} not found".format(self.model_name, id))
            return self.model_class.query.get(id).as_dict()
        else:
            return {self.model_name:
                        [result.as_dict(self.associated_objects) for result in self.model_class.query.all()]}

    def put(self, id):
        current_model = self.model_class.query.get(id)
        if not current_model:
            abort(404, message="Object {} not found".format(id))
        updated_model = current_model.from_dict(request.json)
        db.session.add(updated_model)
        db.session.commit()
        return updated_model.as_dict()

    def post(self):
        current_model = self.model_class(**request.json)
        db.session.add(current_model)
        try:
            db.session.commit()
            return current_model.as_dict()
        except IntegrityError as e:
            return abort(404, message="{} already exists: {}".format(self.model_name, e.message))
        finally:
            db.session.rollback()


class SerializedModel(object):
    """A SQLAlchemy model mixin class that can serialize itself as JSON."""

    @property
    def table_fields(self):
        return [key for key in self.__table__.columns.keys() if not key.startswith('_')]

    def as_dict(self, associated_columns=None):
        """Return dict representation of class by iterating over database
        columns."""
        value = {}
        for column in self.__table__.columns:
            attribute = getattr(self, column.name)
            if isinstance(attribute, datetime):
                attribute = attribute.strftime("%m/%d/%Y %H:%M:%S")
            value[column.name] = attribute
        if associated_columns:
            for column in associated_columns:
                attributes = getattr(self, column)
                value[column] = [attribute.as_dict() for attribute in attributes]
        return value

    def from_dict(self, attributes):
        """Update the current instance based on attribute->value items in
        *attributes*."""
        for attribute in attributes:
            if attribute in self.table_fields:
                setattr(self, attribute, attributes[attribute])
        return self

    def as_json(self):
        """Return JSON representation taken from dict representation."""
        return json.dumps(self.as_dict())
