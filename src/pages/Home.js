import React from "react";
import { Col, Row } from "react-bootstrap";
import PromoCarousel from "../components/Carousel";
import ProductCardStyled from "../components/ProductCard";
import { products } from "../providers/products";

const Home = () => {
  return (
    <div>
      <PromoCarousel />
      <Row xs={1} md={2} lg={4} className="g-4 p-4 m-0">
        {products.map((product, idx) => (
          <Col key={`home_col_${idx}`}>
            <ProductCardStyled {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
