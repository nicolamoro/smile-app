import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/actions/user";
import { LoginStyled } from "./styled";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = useCallback(
    (usr, pwd) => {
      dispatch(userLogin(usr, pwd, navigate));
    },
    [dispatch, navigate]
  );

  return (
    <LoginStyled>
      <div className="form-signin">
        <h1 className="h4 mb-3 fw-normal text-nowrap">
          Accedi con le tue credenziali
        </h1>

        <div className="form-floating">
          <input
            name="username"
            type="text"
            className="form-control shadow-none"
            id="floatingInput"
            placeholder="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            name="password"
            type="password"
            className="form-control shadow-none"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          className="w-100 btn btn-primary"
          onClick={() => onLogin(username, password)}
        >
          Accedi
        </button>
      </div>
    </LoginStyled>
  );
};

export default Login;
