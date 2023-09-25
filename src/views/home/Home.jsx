import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import style from "./Home.module.css";

export default function Home() {
  const { auth, userName } = useContext(AuthContext);
  return (
    <div className={style.home}>
      {auth === true ? (
        <div>
          <h1 className={style.h1}>Bienvenido !! </h1>
          <h3 className={style.username}>{userName}</h3>
        </div>
      ) : (
        <div>
          <h1 className={style.h1}>Bienvenido!</h1>
          <p className={style.texto}>
            Para leer o crear un posteo, debes{" "}
            <NavLink to="/login" className={style.login}>
              loguearte
            </NavLink>
          </p>
        </div>
      )}
    </div>
  );
}
