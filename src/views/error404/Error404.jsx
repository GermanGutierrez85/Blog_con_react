import React from "react";
import { NavLink } from "react-router-dom";
import style from "./error404.module.css";
export default function Error404() {
  return (
    <div className={style.pageError}>
      <div className={style.error404}>
        <h2>ERROR 404 - Page not found!</h2>
        <img
          src="https://cdn-icons-png.flaticon.com/512/8136/8136771.png"
          alt="img"
          width="100rem"
        />
      </div>
      <NavLink to="/" className={style.volver}>
        Volver
      </NavLink>
    </div>
  );
}
