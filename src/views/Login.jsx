import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginApi } from "../api/loginApi";

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
    <>
      <h4>Ingresa usuario y contraseña</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input type="text" name="name" />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" />
        </label>
        <p>{empty}</p>
        <input type="submit" value="Log in" />
      </form>
    </>
  );
}
