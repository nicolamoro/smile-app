import React, { useState, useCallback } from "react";
import { useUserSelector } from "../../store/selectors/user";
import { Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CardStyled } from "./styled";
import { cartAdd } from "../../store/actions/cart";
import QuantityToggler from "../QuantityToggler";

const ProductCardStyled = (props) => {
  const {
    description,
    brand,
    image,
    discount_percent,
    original_price,
    discount_price,
    code,
  } = props;

  const userData = useUserSelector();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const onAddToCart = useCallback(() => {
    dispatch(
      cartAdd(
        {
          description,
          brand,
          image,
          discount_percent,
          original_price,
          discount_price,
          code,
        },
        quantity
      )
    );
  }, [
    brand,
    code,
    description,
    discount_percent,
    discount_price,
    dispatch,
    image,
    original_price,
    quantity,
  ]);

  return (
    <CardStyled>
      <CardStyled.Header>
        <div className="description">{description}</div>
        <div className="brand">{brand}</div>
      </CardStyled.Header>
      <div className="position-relative p-2">
        <CardStyled.Img
          variant="top"
          src={`https://www.dentalclub.it/FotoArticoli/Thumbnails2/${image}`}
        />
        <div className="position-absolute translate-middle-y me-2 end-0 top-50 discount-panel">
          <div className="discount-text">SCONTO</div>
          <div className="discount-value">{discount_percent}%</div>
        </div>
      </div>
      <CardStyled.Body className="d-flex flex-column p-0">
        <CardStyled.Title className="d-flex flex-wrap flex-grow-1 p-2">
          <div className="flex-grow-1 align-self-center">
            <Badge pill bg="warning" text="dark">
              {code}
            </Badge>
          </div>
          <div className="flex-grow-2 align-self-center">
            <span className="text-end original-price">
              {original_price.toFixed(2)} €
            </span>
            <span className="text-end discount-price">
              {discount_price.toFixed(2)} €
            </span>
          </div>
        </CardStyled.Title>
        {userData.username !== undefined && (
          <CardStyled.Footer className="d-flex align-items-center">
            <div className="flex-grow-1 me-2 align-self-center">
              <QuantityToggler
                quantity={quantity}
                onMinus={() => quantity > 1 && setQuantity(quantity - 1)}
                onPlus={() => quantity < 10 && setQuantity(quantity + 1)}
              />
            </div>
            <div className="text-end">
              <button
                className="btn btn-sm btn-success add-to-cart"
                onClick={onAddToCart}
              >
                <div className="d-flex align-items-center">
                  <span className="material-icons-round">add</span>
                </div>
              </button>
            </div>
          </CardStyled.Footer>
        )}
      </CardStyled.Body>
    </CardStyled>
  );
};

export default ProductCardStyled;
