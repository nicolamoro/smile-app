import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { productsGet } from "../../store/actions/products";
import { useProductsSelector } from "../../store/selectors/products";
import PromoCarousel from "../../components/Carousel";
import ProductCardStyled from "../../components/ProductCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsData = useProductsSelector();

  useEffect(() => {
    dispatch(productsGet(navigate));
  }, [dispatch, navigate]);

  return (
    <div>
      <PromoCarousel />
      <Row xs={1} md={2} lg={4} xl={6} className="g-3 m-0">
        {productsData.map((product, idx) => (
          <Col key={`home_col_${idx}`}>
            <ProductCardStyled {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
