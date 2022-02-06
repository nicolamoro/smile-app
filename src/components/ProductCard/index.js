import React from "react";
import { Badge } from "react-bootstrap";
import { CardStyled } from "./styled";

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

  return (
    <CardStyled>
      <CardStyled.Header>
        <div className="description">{description}</div>
        <div className="brand">{brand}</div>
      </CardStyled.Header>
      <div className="position-relative">
        <CardStyled.Img
          variant="top"
          src={`https://www.dentalclub.it/FotoArticoli/Thumbnails2/${image}`}
        />
        <div className="position-absolute translate-middle-y me-2 end-0 top-50 discount-panel">
          <div className="discount-text">SCONTO</div>
          <div className="discount-value">{discountPercent}%</div>
        </div>
      </div>
      <CardStyled.Body>
        <CardStyled.Text className="d-flex align-items-center">
          <span className="original-price">{originalPrice} €</span>
          <span className="discount-price">{discountPrice} €</span>
          <Badge pill bg="warning" text="dark" className="float-end ms-auto">
            {code}
          </Badge>
        </CardStyled.Text>
      </CardStyled.Body>
    </CardStyled>
  );
};

export default ProductCardStyled;
