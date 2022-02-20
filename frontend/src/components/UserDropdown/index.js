import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { UserDropdownStyled } from "./styled";
import { userLogout } from "../../store/actions/user";

const UserDropdown = (props) => {
  const { userData } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    dispatch(userLogout());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <UserDropdownStyled align="end" className="shadow-none">
      <UserDropdownStyled.Toggle
        variant="dark"
        className="p-0 pe-2 shadow-none d-flex align-items-center"
      >
        <span className="material-icons-round pe-1">person</span>
        <div className="d-none d-md-block">{userData.username}</div>
      </UserDropdownStyled.Toggle>

      <UserDropdownStyled.Menu>
        <UserDropdownStyled.Item>
          <LinkContainer to="/customer" className="d-flex align-items-center">
            <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
              <span className="material-icons-round me-2">person</span>
              Info Cliente
            </button>
          </LinkContainer>
        </UserDropdownStyled.Item>
        <UserDropdownStyled.Divider />
        <UserDropdownStyled.Item>
          <LinkContainer to="/history" className="d-flex align-items-center">
            <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
              <span className="material-icons-round me-2">history</span>
              Storico Acquisti
            </button>
          </LinkContainer>
        </UserDropdownStyled.Item>
        <UserDropdownStyled.Item>
          <LinkContainer to="/orders" className="d-flex align-items-center">
            <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
              <span className="material-icons-round me-2">layers</span>
              Ordini
            </button>
          </LinkContainer>
        </UserDropdownStyled.Item>
        <UserDropdownStyled.Item>
          <LinkContainer to="/bookings" className="d-flex align-items-center">
            <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
              <span className="material-icons-round me-2">bookmark</span>
              Prenotazioni
            </button>
          </LinkContainer>
        </UserDropdownStyled.Item>
        <UserDropdownStyled.Item>
          <LinkContainer to="/documents" className="d-flex align-items-center">
            <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
              <span className="material-icons-round me-2">local_shipping</span>
              DDT
            </button>
          </LinkContainer>
        </UserDropdownStyled.Item>
        <UserDropdownStyled.Divider />
        <UserDropdownStyled.Item>
          <LinkContainer to="/invoices" className="d-flex align-items-center">
            <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
              <span className="material-icons-round me-2">receipt</span>
              Visualizza Fatture
            </button>
          </LinkContainer>
        </UserDropdownStyled.Item>
        <UserDropdownStyled.Item>
          <LinkContainer to="/revenune" className="d-flex align-items-center">
            <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
              <span className="material-icons-round me-2">request_quote</span>
              Fatturati
            </button>
          </LinkContainer>
        </UserDropdownStyled.Item>
        <UserDropdownStyled.Item>
          <LinkContainer to="/balance" className="d-flex align-items-center">
            <button className="btn btn-link text-decoration-none shadow-none ms-3 p-1">
              <span className="material-icons-round me-2">account_balance</span>
              Estratto Conto
            </button>
          </LinkContainer>
        </UserDropdownStyled.Item>
        <UserDropdownStyled.Divider />
        <UserDropdownStyled.Item>
          <button
            className="btn btn-link text-decoration-none shadow-none ms-3 p-1 d-flex align-items-center"
            onClick={onLogout}
          >
            <span className="material-icons-round me-2">logout</span>
            Logout
          </button>
        </UserDropdownStyled.Item>
      </UserDropdownStyled.Menu>
    </UserDropdownStyled>
  );
};

export default UserDropdown;
