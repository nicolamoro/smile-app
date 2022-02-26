from schemas.login import LoginSchema
from schemas.product import ProductSchema
from schemas.token import TokenSchema

login_schema = LoginSchema()
token_schema = TokenSchema()
products_schema = ProductSchema(many=True)
