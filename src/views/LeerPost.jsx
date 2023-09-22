import { useContext, useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { postsExt } from "../api/posteos_extendidos";

export default function LeerPost() {
  const [text, setText] = useState("");
  const { auth, userName } = useContext(AuthContext);
  const navigate = useNavigate();

  const { id } = useParams();
  /* console.log(`esta leyendo el posteo ID: ${id}`); */

  const idEntero = parseInt(id);

  const api = postsExt;
  useEffect(() => {
    auth === true
      ? api
          .get(userName, idEntero)
          .then((response) => {
            /* console.log(response.texto); */
            setText(response.texto);
          })
          .catch((error) => {
            console.log(error.response.status);
          })
      : setText("");
  }, []);

  const handleSet = () => {
    navigate(`modificar`);
  };

  return (
    <>
      <h3>Post N° {id}</h3>
      <div>
        <div>
          <p>{text}</p>
        </div>
        <div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              const confirmDelete = confirm(
                `Desea modificar el post n° ${idEntero}?`
              );
              if (confirmDelete) {
                handleSet();
              }
            }}
          >
            Modificar
          </button>
        </div>
      </div>
      <NavLink to="/posteos">
        <button>Volver a Posteos</button>
      </NavLink>
    </>
  );
}
