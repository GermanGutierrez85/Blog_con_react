import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
export default function Home() {
  const { auth, userName } = useContext(AuthContext);
  return (
    <div>
      {auth === true ? (
        <h1> Bienvenido {userName}!!</h1>
      ) : (
        <div>
          <h3>Bienvenido!</h3>
          <p>
            Para leer o crear un posteo, debes{" "}
            <NavLink to="/login">loguearte</NavLink>
          </p>
        </div>
      )}
    </div>
  );
}
