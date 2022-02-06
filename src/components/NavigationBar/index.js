import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  NavbarStyled,
  NavbarBrandStyled,
  NavbarButtonStyled,
  BadgeStyled,
  SearchBarInputStyled,
  SearchBarStyled,
} from "./styled";

const NavigationBar = () => {
  return (
    <NavbarStyled variant="dark" bg="dark" className="sticky-top p-0">
      <NavbarButtonStyled
        variant="dark"
        className="shadow-none"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
      >
        <span className="material-icons-round">menu</span>
      </NavbarButtonStyled>
      <NavbarBrandStyled className="flex-grow-1 d-flex align-items-center">
        <LinkContainer to="/">
          <NavbarButtonStyled variant="transparent" className="shadow-none">
            <img
              src="/img/logo_full.svg"
              alt="Dental Club"
              className="d-none d-md-block"
            />
            <img
              src="/img/logo_pict.svg"
              alt="Dental Club"
              className="d-md-none"
            />
          </NavbarButtonStyled>
        </LinkContainer>
      </NavbarBrandStyled>
      <SearchBarStyled className="input-group w-100">
        <SearchBarInputStyled
          className="form-control form-control-dark shadow-none"
          type="text"
          placeholder="Cerca"
          aria-label="Cerca"
        />
        <span className="material-icons-round input-group-text search-icon">
          search
        </span>
      </SearchBarStyled>
      <LinkContainer to="/cart">
        <NavbarButtonStyled
          variant="dark"
          className="shadow-none position-relative m-1"
        >
          <span className="material-icons-round">shopping_cart</span>
          <BadgeStyled
            pill
            bg="danger"
            className="position-absolute top-0 end-0"
          >
            2
          </BadgeStyled>
        </NavbarButtonStyled>
      </LinkContainer>
      <LinkContainer to="/customer">
        <NavbarButtonStyled variant="dark" className="shadow-none">
          <span className="material-icons-round">person</span>
        </NavbarButtonStyled>
      </LinkContainer>
    </NavbarStyled>
  );
};

export default NavigationBar;
