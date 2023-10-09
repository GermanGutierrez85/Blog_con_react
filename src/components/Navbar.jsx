import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import style from "./Navbar.module.css";
import DehazeIcon from "@mui/icons-material/Dehaze";

export default function Navbar() {
  const { auth } = useContext(AuthContext);
  const [sideBar, setSideBar] = useState("none");
  const handleSideBar = () => setSideBar("");

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.burgerIcon} onClick={() => handleSideBar()}>
          <DehazeIcon />
        </div>
        <ul className={style.links}>
          <div>
            <NavLink key={1} to="/" className={style.navlink}>
              Home
            </NavLink>
          </div>
          <div className={style.menulinks}>
            {auth === true ? (
              <>
                <li>
                  <NavLink key={3} to="/posteos" className={style.navlink}>
                    Posteos
                  </NavLink>
                </li>
                <li>
                  <NavLink key={4} to="/crear" className={style.navlink}>
                    Crear
                  </NavLink>
                </li>
                <li>
                  <NavLink key={5} to="/logout" className={style.navlink}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <NavLink key={2} to="/login" className={style.navlink}>
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
