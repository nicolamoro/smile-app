import styled from "styled-components";
import { Card } from "react-bootstrap";

export const CardStyled = styled(Card)`
  .card-header {
    text-align: center;

    .description {
      font-weight: 500;
    }

    .brand {
      font-style: italic;
    }
  }

  img {
    height: 100px;
    object-fit: contain;
  }

  .discount-panel {
    padding: 10px;
    background-color: #ddd;
    opacity: 0.5;
    border-radius: 0.25rem;
    text-align: center;

    .discount-text {
      color: green;
      font-weight: 500;
    }

    .discount-value {
      color: green;
      font-weight: 500;
      font-size: 2rem;
    }
  }

  .card-text {
    text-align: center;
    font-size: 1.4rem;

    .original-price {
      margin-left: 5px;
      margin-right: 5px;
      text-decoration: line-through;
      font-weight: 300;
      white-space: nowrap;
      font-size: 1rem;
    }

    .discount-price {
      margin-left: 5px;
      margin-right: 5px;
      color: green;
      font-weight: 500;
      white-space: nowrap;
    }

    .badge {
      font-size: 0.8rem;
    }
  }
`;
