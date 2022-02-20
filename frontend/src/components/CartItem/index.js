import { useDispatch } from "react-redux";
import { Badge } from "react-bootstrap";
import {
  cartQuantityAdd,
  cartQuantityRemove,
  cartRemove,
} from "../../store/actions/cart";
import { CartItemStyled } from "./styled";

const CartItem = (props) => {
  const { item, index } = props;

  const dispatch = useDispatch();

  return (
    <CartItemStyled className="m-3 p-3">
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <div className="me-3">
            <img
              alt=""
              src={`https://www.dentalclub.it/FotoArticoli/Thumbnails2/${item.product.image}`}
            />
          </div>
          <div className="flex-grow-1">
            <div className="fw-bold">{item.product.description}</div>
            <div className="fst-italic">{item.product.brand}</div>
            <Badge pill bg="warning" text="dark">
              {item.product.code}
            </Badge>
            <div>
              Prezzo unitario: {item.product.discountPrice.toFixed(2)}&euro;
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="input-group flex-nowrap justify-content-end">
              <button
                className="btn btn-sm btn-outline-secondary shadow-none quantity-buttons"
                type="button"
                id="button-quantity-minus"
                onClick={() => dispatch(cartQuantityRemove(index))}
              >
                -
              </button>
              <input
                type="text"
                className="form-control quantity-text"
                placeholder=""
                readOnly
                value={item.quantity}
              />
              <button
                className="btn btn-sm btn-outline-secondary shadow-none quantity-buttons"
                type="button"
                onClick={() => dispatch(cartQuantityAdd(index))}
              >
                +
              </button>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-link shadow-none delete-item-button"
              type="button"
              onClick={() => dispatch(cartRemove(index))}
            >
              <span className="material-icons-round align-middle">delete</span>
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-end fw-bold">
          Parziale: {(item.product.discountPrice * item.quantity).toFixed(2)}
          &euro;
        </div>
      </div>
    </CartItemStyled>
  );
};

export default CartItem;
