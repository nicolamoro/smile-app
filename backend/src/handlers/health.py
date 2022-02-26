import tornado.web


class HealthHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "*")
        self.set_header("Access-Control-Allow-Methods", "GET, OPTIONS")

    def options(self, *args):
        self.set_status(204)
        self.finish()

    def get(self):
        """
        ---
        tags:
        - Health check
        summary: Health check
        description: |
            Return default response to ensure the service is up.
        produces:
        - application/json
        responses:
            200:
                description: Service healthy
                schema:
                    type: object
        """
        response = {"message": "Service healthy"}
        self.write(response)
