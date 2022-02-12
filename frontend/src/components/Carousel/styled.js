import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const CarouselStyled = styled(Carousel)`
  .carousel-item {
    height: 200px;
    background-color: #000;
  }
  .carousel-item img {
    height: 200px;
    opacity: 0.5;
  }
`;
