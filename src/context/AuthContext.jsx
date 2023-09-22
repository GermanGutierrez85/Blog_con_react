import { createContext } from "react";

const defaultAuth = {
  auth: false,
  userName: "",
};
export const AuthContext = createContext(defaultAuth);
export function Autentication() {
  const isAutenticated = sessionStorage.getItem("isAutenticated");
  return Boolean(isAutenticated);
}
export function initUser() {
  const userName = sessionStorage.getItem("userName");
  return String(userName);
}
