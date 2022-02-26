import React from "react";
import { FooterStyled } from "./styled";

const Footer = () => {
  return (
    <FooterStyled className="footer mt-auto py-1 bg-light fixed-bottom border-top">
      <div className="container">
        <span className="text-muted">
          © 2022 - Made with{" "}
          <span className="material-icons-round text-danger fs-6 align-middle">
            favorite
          </span>{" "}
          for Dental Club
        </span>
      </div>
    </FooterStyled>
  );
};

export default Footer;
