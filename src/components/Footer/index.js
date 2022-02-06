import React from "react";
import { FooterStyled } from "./styled";

const Footer = () => {
  return (
    <FooterStyled className="footer mt-auto py-1 bg-light fixed-bottom border-top">
      <div className="container">
        <span className="text-muted">Dental Club Spa</span>
      </div>
    </FooterStyled>
  );
};

export default Footer;
