import React from "react";
import { useLocation } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";
import { SideBarStyled } from "./styled";
import { LinkContainer } from "react-router-bootstrap";

const SideBar = () => {
  const location = useLocation();

  return (
    <SideBarStyled>
      <Nav
        activeKey={location.pathname}
        id="sidebarMenu"
        className="col-12 col-sm-3 col-lg-2 bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
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
          <NavItem>
            <LinkContainer to="/cart" className="d-flex align-items-center">
              <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                <span className="material-icons-round me-2">shopping_cart</span>
                Carrello
              </button>
            </LinkContainer>
          </NavItem>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Cliente</span>
          </h6>
          <NavItem>
            <LinkContainer to="/customer" className="d-flex align-items-center">
              <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                <span className="material-icons-round me-2">person</span>
                Info Cliente
              </button>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/history" className="d-flex align-items-center">
              <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                <span className="material-icons-round me-2">history</span>
                Storico Acquisti
              </button>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/orders" className="d-flex align-items-center">
              <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                <span className="material-icons-round me-2">layers</span>
                Ordini
              </button>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/bookings" className="d-flex align-items-center">
              <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                <span className="material-icons-round me-2">bookmark</span>
                Prenotazioni
              </button>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer
              to="/documents"
              className="d-flex align-items-center"
            >
              <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                <span className="material-icons-round me-2">
                  local_shipping
                </span>
                DDT
              </button>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/invoices" className="d-flex align-items-center">
              <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                <span className="material-icons-round me-2">receipt</span>
                Visualizza Fatture
              </button>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/revenune" className="d-flex align-items-center">
              <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                <span className="material-icons-round me-2">request_quote</span>
                Fatturati
              </button>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/balance" className="d-flex align-items-center">
              <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
                <span className="material-icons-round me-2">
                  account_balance
                </span>
                Estratto Conto
              </button>
            </LinkContainer>
          </NavItem>
        </div>
      </Nav>
    </SideBarStyled>
  );
};

export default SideBar;
