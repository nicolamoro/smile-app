import os


class Config:
    # general settings
    PORT = int(os.environ.get("PORT", 8888))

    # API
    API_BASE_URL = "/api/1"
    API_VERSION = "0.1.0"
    SWAGGERUI_URL = "/docs"
    SWAGGERUI_TITLE = "Smile Backend API"
    SWAGGERUI_DESCRIPTION = "Documentation of API implemented"
    SWAGGERUI_CONTACT = "nikimoro@gmail.com"

    # JWT
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY", "SomeRandomSecretPhrase")
    JWT_ACCESS_TOKEN_EXPIRES = int(os.environ.get("JWT_ACCESS_TOKEN_EXPIRES", 900))
