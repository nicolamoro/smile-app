import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import UserDropdown from "../UserDropdown";
import {
  NavbarStyled,
  NavbarBrandStyled,
  NavbarButtonStyled,
  BadgeStyled,
  SearchBarInputStyled,
  SearchBarStyled,
} from "./styled";

const NavigationBar = (props) => {
  const { userData } = props;

  return (
    <NavbarStyled variant="dark" bg="dark" className="sticky-top p-0">
      {userData.username !== undefined && (
        <NavbarButtonStyled
          variant="dark"
          className="shadow-none"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarMenu"
        >
          <span className="material-icons-round">menu</span>
        </NavbarButtonStyled>
      )}
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
      {userData.username !== undefined ? (
        <>
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
          <UserDropdown userData={userData} />
        </>
      ) : (
        <LinkContainer to="/login">
          <NavbarButtonStyled
            variant="dark"
            className="shadow-none position-relative text-nowrap m-1"
          >
            Accedi
          </NavbarButtonStyled>
        </LinkContainer>
      )}
    </NavbarStyled>
  );
};

export default NavigationBar;
