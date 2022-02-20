import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/actions/user";
import { LoginStyled } from "./styled";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      dispatch(userLogin(e.target.username.value, e.target.password.value));
      navigate("/");
    },
    [dispatch, navigate]
  );

  return (
    <LoginStyled>
      <div className="form-signin">
        <Form onSubmit={onSubmit}>
          <h1 className="h4 mb-3 fw-normal text-nowrap">
            Accedi con le tue credenziali
          </h1>

          <div className="form-floating">
            <Form.Control
              name="username"
              type="text"
              className="form-control shadow-none"
              id="floatingInput"
              placeholder="name"
            />
            <Form.Label htmlFor="floatingInput">Username</Form.Label>
          </div>
          <div className="form-floating">
            <Form.Control
              name="password"
              type="password"
              className="form-control shadow-none"
              id="floatingPassword"
              placeholder="Password"
            />
            <Form.Label htmlFor="floatingPassword">Password</Form.Label>
          </div>

          <div className="checkbox mb-3">
            <Form.Label>
              <input type="checkbox" value="remember-me" /> Ricordami
            </Form.Label>
          </div>
          <button className="w-100 btn btn-primary" type="submit">
            Accedi
          </button>
        </Form>
      </div>
    </LoginStyled>
  );
};

export default Login;
