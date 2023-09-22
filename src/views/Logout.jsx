import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Logout() {
  const { setAuth, setUserName } = useContext(AuthContext);
  const navegate = useNavigate();
  const handler = () => {
    sessionStorage.removeItem("isAutenticated");
    sessionStorage.removeItem("username");
    setAuth(false);
    setUserName("");
    navegate("/");
  };
  useEffect(() => {
    handler();
  }, []);

  return <></>;
}
