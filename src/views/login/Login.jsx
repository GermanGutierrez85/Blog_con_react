import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { loginApi } from "../../api/loginApi";
import style from "./login.module.css";
import { CssTextField, CssButton } from "../../api/stylesMui";

export default function Login() {
  const [empty, setEmpty] = useState("");
  const { setAuth, setUserName } = useContext(AuthContext);
  const navegate = useNavigate();
  const location = useLocation();
  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.name.value;
    const password = e.target.password.value;
    if (username == "" || password == "") {
      setEmpty("Debes completar los campos para ingresar");
      return;
    }
    if (password !== "inoveblog") {
      setEmpty("La contraseña es incorrecta");
      return;
    }
    const api = loginApi;
    api
      .post(username, password)
      .then((response) => {
        sessionStorage.setItem("isAutenticated", "true");
        sessionStorage.setItem("username", username);

        setUserName(username);
        setAuth(true);
        setEmpty("");

        const next = new URLSearchParams(location.search).get("next");
        const redirectTo = next ? next : "/";
        navegate(redirectTo);
      })
      .catch((error) => {
        alert(`No se pudo realizar el login: ${error.code}`);
        alert(`${error.response.status}|${error.response.data.detail}`);
      });
  }

  return (
    <div className={style.loginPage}>
      <div className={style.loginCard}>
        <h3 className={style.ingresar}>Ingresa usuario y contraseña</h3>
        <form onSubmit={handleSubmit} className={style.form}>
          <CssTextField
            label="Usuario"
            /* className="custom-css-outlined-input" */
            name="name"
          />
          <CssTextField
            label="Password"
            /* className="custom-css-outlined-input" */
            type="password"
            name="password"
          />

          <p>{empty}</p>
          <CssButton variant="contained" type="submit">
            Log in
          </CssButton>
        </form>
      </div>
    </div>
  );
}
