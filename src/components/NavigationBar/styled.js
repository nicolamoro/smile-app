import { Button, Navbar, NavbarBrand, Badge } from "react-bootstrap";
import styled from "styled-components";

export const NavbarStyled = styled(Navbar)``;

export const NavbarBrandStyled = styled(NavbarBrand)`
  margin-left: 1rem;

  img {
    height: 20px;
  }
`;

export const BadgeStyled = styled(Badge)`
  padding: 0.2em 0.4em;
  font-weight: 500;
`;

export const SearchBarStyled = styled.div`
  .input-group-text {
    color: #606c6c;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0);
  }
`;

export const SearchBarInputStyled = styled.input`
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
  border-right-color: transparent;
`;

export const NavbarButtonStyled = styled(Button)`
  border-width: 0;
  border-radius: 0;

  .material-icons-round {
    font-size: 25px;
  }

  span {
    vertical-align: middle;
  }
`;

export const NavigationBarStyled = styled.div`
  .navbar-brand {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
  }

  .navbar .navbar-toggler {
    top: 0.25rem;
    right: 1rem;
  }

  .navbar .form-control {
    padding: 0.75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }

  .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
  }
`;
