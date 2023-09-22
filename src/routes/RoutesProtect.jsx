import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export const RoutesProtect = () => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={`/login?next=${location.pathname}`} replace />;
  }
  return <Outlet />;
};
