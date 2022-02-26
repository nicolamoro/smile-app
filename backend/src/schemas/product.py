from marshmallow import Schema, fields
from tornado_swagger.model import register_swagger_model


@register_swagger_model
class ProductSchema(Schema):
    """
    ---
    type: object
    description: Product object
    properties:
        code:
            description: Product code
            type: string
        description:
            description: Product description
            type: string
        brand:
            description: Product brand
            type: string
        image:
            description: Product image
            type: string
        discount_percent:
            description: Product discount_percent
            type: integer
        original_price:
            description: Product original_price
            type: number
        discount_price:
            description: Product discount_price
            type: number
    required:
        - code
        - description
        - brand
        - image
        - discount_percent
        - original_price
        - discount_price
    """

    code = fields.Str(required=True)
    description = fields.Str(required=True)
    brand = fields.Str(required=True)
    image = fields.Str(required=True)
    discount_percent = fields.Integer(required=True)
    original_price = fields.Decimal(required=True, places=2)
    discount_price = fields.Decimal(required=True, places=2)
