import json

import tornado.web

from schemas import login_schema
from utils.auth import create_jwt_token


class LoginHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "*")
        self.set_header("Access-Control-Allow-Methods", "POST, OPTIONS")

    def options(self, *args):
        self.set_status(204)
        self.finish()

    def post(self):
        """
        ---
        tags:
        - Authentication
        summary: Authenticate user
        description: |
            If given credentials are correct, this endpoint will return
            a JWT token to be used in all protected routes.
        parameters:
        -   name: customer
            in: body
            description: Authentication data
            schema:
                $ref: '#/definitions/LoginSchema'
        produces:
        - application/json
        responses:
            201:
                description: Successfully authenticated
                schema:
                    $ref: '#/definitions/TokenSchema'
            400:
                description: Invalid data
            401:
                description: Unauthenticated
        """
        try:
            login_data = login_schema.load(json.loads(self.request.body))
        except Exception as e:
            self.set_status(400)
            self.write({"message": "Invalid data", "description": e.messages})
            self.finish()
            return

        if login_data["username"] != login_data["password"]:
            self.set_status(401)
            self.write({"message": "Invalid password"})
            self.finish()
            return

        response = {"access_token": create_jwt_token(login_data["username"])}
        self.write(response)
