import datetime
import uuid

import jwt

from config import Config

JWT_OPTIONS = {
    "verify_signature": True,
    "verify_exp": True,
    "verify_nbf": False,
    "verify_iat": True,
    "verify_aud": False,
}

JWT_PAYLOAD_REQUEST_KEY = "jwt_payload"


def get_jwt_payload(request):
    return request.headers.get(JWT_PAYLOAD_REQUEST_KEY)


def create_jwt_token(identity):
    return jwt.encode(
        {
            "jti": str(uuid.uuid4()),
            "iat": datetime.datetime.utcnow(),
            "nbf": datetime.datetime.utcnow(),
            "exp": datetime.datetime.utcnow() + datetime.timedelta(seconds=Config.JWT_ACCESS_TOKEN_EXPIRES),
            "identity": identity,
        },
        Config.JWT_SECRET_KEY,
        algorithm="HS256",
    )


def require_jwt_auth(func):
    def decorated(self, *args, **kwargs):
        auth = self.request.headers.get("Authorization")
        if auth:
            parts = auth.split()

            if parts[0].lower() != "bearer" or len(parts) == 1 or len(parts) > 2:
                self._transforms = []
                self.set_status(401)
                self.write({"message": "Invalid Header Authorization"})
                self.finish()
                return

            token = parts[1]
            try:
                self.request.headers[JWT_PAYLOAD_REQUEST_KEY] = jwt.decode(
                    token,
                    Config.JWT_SECRET_KEY,
                    options=JWT_OPTIONS,
                    algorithms=["HS256"],
                )

            except Exception:
                self._transforms = []
                self.set_status(401)
                self.write({"message": "Invalid Authorization"})
                self.finish()
                return
        else:
            self._transforms = []
            self.set_status(401)
            self.write({"message": "Missing Authorization"})
            self.finish()
            return

        return func(self, *args, **kwargs)

    return decorated
