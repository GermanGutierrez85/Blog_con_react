import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <nav>
        <ul>
          <div>
            <NavLink key={1} to="/">
              Home
            </NavLink>
          </div>
          <div>
            {auth === true ? (
              <>
                <li>
                  <NavLink key={3} to="/posteos">
                    Posteos
                  </NavLink>
                </li>
                <li>
                  <NavLink key={4} to="/crear">
                    Crear
                  </NavLink>
                </li>
                <li>
                  <NavLink key={5} to="/logout">
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <NavLink key={2} to="/login">
                  Login
                </NavLink>
              </>
            )}
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
