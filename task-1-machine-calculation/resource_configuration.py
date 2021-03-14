from flask import Flask
from flask_cors import CORS
from flask_restx import Api

from resources.calculator_resource import calculator_api


def create_app(debug=False):
    app = Flask(__name__)
    app.config["ERROR_404_HELP"] = False
    CORS(app)
    api = Api(app)
    app.debug = debug

    api.add_namespace(calculator_api)
    return app
