import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Posteos from "../views/posteos/Posteos";
import Navbar from "../components/Navbar";
import Crear from "../views/crear/Crear";
import LeerPost from "../views/leerPosts/LeerPost";
import Login from "../views/login/Login";
import Logout from "../views/Logout";
import { RoutesProtect } from "./RoutesProtect";
import ModificarPost from "../views/modificarPost/ModificarPost";
import Error404 from "../views/error404/Error404";

export default function RoutesBlog() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/" element={<RoutesProtect />}>
            <Route path="/crear" element={<Crear />} />
            <Route path="/posteos" element={<Posteos />} />
            <Route path="posteos/leer/:id" element={<LeerPost />} />
            <Route
              path="posteos/leer/:id/modificar"
              element={<ModificarPost />}
            />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
