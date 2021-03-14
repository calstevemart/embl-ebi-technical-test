from flask import request
from flask_restx import Namespace, Resource, reqparse, abort

from services.calculator_service import CalculatorService

calculator_api = Namespace("calculator", description="Calculator Resource")


@calculator_api.route("/")
class CalculatorResource(Resource):
    parser = reqparse.RequestParser()

    @calculator_api.param(
        _in="body",
        name="body",
        description="Tuples representing timespans",
        required=True
    )
    def post(self):
        try:
            thing = request
            necessary_resources = CalculatorService.calculate_machines(request.json)
            pass
        except Exception as e:
            msg = "An unexpected error occurred: {0}".format(e)
            abort(500, message=msg)
        return necessary_resources
