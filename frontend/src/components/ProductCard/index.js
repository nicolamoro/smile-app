import React, { useState, useCallback } from "react";
import { useUserSelector } from "../../store/selectors/user";
import { Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CardStyled } from "./styled";
import { cartAdd } from "../../store/actions/cart";

const ProductCardStyled = (props) => {
  const {
    description,
    brand,
    image,
    discountPercent,
    originalPrice,
    discountPrice,
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
          discountPercent,
          originalPrice,
          discountPrice,
          code,
        },
        quantity
      )
    );
  }, [
    brand,
    code,
    description,
    discountPercent,
    discountPrice,
    dispatch,
    image,
    originalPrice,
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
          <div className="discount-value">{discountPercent}%</div>
        </div>
      </div>
      <CardStyled.Body className="d-flex flex-column p-0">
        <CardStyled.Title className="d-flex flex-grow-1 p-2">
          <div className="flex-grow-1 align-self-center">
            <Badge pill bg="warning" text="dark">
              {code}
            </Badge>
          </div>
          <span className="flex-grow-1 text-end original-price align-self-center">
            {originalPrice.toFixed(2)} €
          </span>
          <span className="flex-grow-1 discount-price align-self-center">
            {discountPrice.toFixed(2)} €
          </span>
        </CardStyled.Title>
        {userData.username !== undefined && (
          <CardStyled.Footer className="d-flex align-items-center">
            <div className="flex-grow-1 me-2 align-self-center">
              <div className="input-group flex-nowrap justify-content-end">
                <button
                  className="btn btn-sm btn-outline-secondary shadow-none quantity-buttons"
                  type="button"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control quantity-text"
                  placeholder=""
                  readOnly
                  value={quantity}
                />
                <button
                  className="btn btn-sm btn-outline-secondary shadow-none quantity-buttons"
                  type="button"
                  onClick={() => quantity < 10 && setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-end">
              <button
                className="btn btn-sm btn-success add-to-cart"
                onClick={onAddToCart}
              >
                <div className="d-flex align-items-center">
                  <span className="material-icons-round">
                    add_shopping_cart
                  </span>
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
