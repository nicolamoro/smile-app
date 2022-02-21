import { useDispatch } from "react-redux";
import { Badge, Col, Row } from "react-bootstrap";
import {
  cartQuantityAdd,
  cartQuantityRemove,
  cartRemove,
} from "../../store/actions/cart";
import { CartItemStyled } from "./styled";
import QuantityToggler from "../QuantityToggler";

const CartItem = (props) => {
  const { item, index } = props;

  const dispatch = useDispatch();

  return (
    <CartItemStyled className="m-3 p-3">
      <div className="d-flex flex-column">
        <Row xs={1} md={6} lg={6} xl={6} className="d-flex flex-row g-3 m-0">
          <Col className="flex-fill me-3">
            <img
              alt=""
              src={`https://www.dentalclub.it/FotoArticoli/Thumbnails2/${item.product.image}`}
            />
          </Col>
          <Col className="flex-grow-1">
            <div className="fw-bold">{item.product.description}</div>
            <div className="fst-italic">{item.product.brand}</div>
            <Badge pill bg="warning" text="dark">
              {item.product.code}
            </Badge>
            <div>
              Prezzo unitario: {item.product.discountPrice.toFixed(2)}&euro;
            </div>
          </Col>
          <Col className="d-flex align-items-center">
            <QuantityToggler
              quantity={item.quantity}
              onMinus={() => dispatch(cartQuantityRemove(index))}
              onPlus={() => dispatch(cartQuantityAdd(index))}
            />
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <button
              className="btn btn-link shadow-none delete-item-button"
              type="button"
              onClick={() => dispatch(cartRemove(index))}
            >
              <span className="material-icons-round align-middle">delete</span>
            </button>
          </Col>
        </Row>
        <div className="d-flex justify-content-end fw-bold">
          Parziale: {(item.product.discountPrice * item.quantity).toFixed(2)}
          &euro;
        </div>
      </div>
    </CartItemStyled>
  );
};

export default CartItem;
