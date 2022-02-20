import styled from "styled-components";
import { Card } from "react-bootstrap";

export const CartItemStyled = styled(Card)`
  .quantity-text {
    font-size: 0.8rem;
    width: 1.6rem;
    padding: 0px 0px 0px 6px;
    flex: unset;
  }

  .quantity-buttons {
    font-size: 0.7rem;
  }

  .delete-item-button {
    color: #888;
  }
`;
