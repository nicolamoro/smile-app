import { CarouselStyled } from "./styled";

const PromoCarousel = () => {
  return (
    <CarouselStyled fade>
      <CarouselStyled.Item>
        <img
          className="d-block w-100"
          src="https://www.dentalclub.it/eCommercePreview/images/A1.jpg"
          alt="A1"
        />
      </CarouselStyled.Item>
      <CarouselStyled.Item>
        <img
          className="d-block w-100"
          src="https://www.dentalclub.it/eCommercePreview/images/B1.jpg"
          alt="B1"
        />
      </CarouselStyled.Item>
      <CarouselStyled.Item>
        <img
          className="d-block w-100"
          src="https://www.dentalclub.it/eCommercePreview/images/C1.jpg"
          alt="C1"
        />
      </CarouselStyled.Item>
      <CarouselStyled.Item>
        <img
          className="d-block w-100"
          src="https://www.dentalclub.it/eCommercePreview/images/D1.jpg"
          alt="D1"
        />
      </CarouselStyled.Item>
      <CarouselStyled.Item>
        <img
          className="d-block w-100"
          src="https://www.dentalclub.it/eCommercePreview/images/E1.jpg"
          alt="E1"
        />
      </CarouselStyled.Item>
    </CarouselStyled>
  );
};

export default PromoCarousel;
