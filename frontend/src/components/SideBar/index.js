import React from "react";
import { useUserSelector } from "../../store/selectors/user";
import { useLocation } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";
import { SideBarStyled } from "./styled";
import { LinkContainer } from "react-router-bootstrap";

const SideBar = () => {
  const userData = useUserSelector();
  const location = useLocation();

  return (
    <SideBarStyled>
      <Nav
        activeKey={location.pathname}
        id="sidebarMenu"
        className="col-12 col-sm-3 col-lg-2 bg-light offcanvas offcanvas-start"
      >
        <div className="offcanvas-header d-flex flex-row-reverse pb-0">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="position-sticky pt-0">
          <NavItem>
            <LinkContainer to="/" className="d-flex align-items-center">
              <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                <span className="material-icons-round me-2">discount</span>
                Offerte
              </button>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/search" className="d-flex align-items-center">
              <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                <span className="material-icons-round me-2">search</span>
                Ricerca Prodotti
              </button>
            </LinkContainer>
          </NavItem>
          {userData.username !== undefined && (
            <NavItem>
              <LinkContainer to="/cart" className="d-flex align-items-center">
                <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                  <span className="material-icons-round me-2">
                    shopping_cart
                  </span>
                  Carrello
                </button>
              </LinkContainer>
            </NavItem>
          )}
        </div>
      </Nav>
    </SideBarStyled>
  );
};

export default SideBar;
