import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { postsExt } from "../../api/posteos_extendidos";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { CssTextField, CssButton } from "../../api/stylesMui";
import style from "./modificarPost.module.css";

export default function ModificarPost() {
  const { auth, userName } = useContext(AuthContext);
  const [postModificado, setPostModificado] = useState("");
  const [guardado, setGuardado] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const idEntero = parseInt(id);
  const api = postsExt;

  function handleSet(e) {
    e.preventDefault();

    const titulo = e.target.titulo.value;
    const texto = e.target.texto.value;

    if (titulo == "" || texto == "") {
      setGuardado("Debes completar ambos campos");
    }

    if (auth === true) {
      api
        .put(userName, idEntero, titulo, texto)
        .then((response) => {
          console.log(response.data);
          setGuardado("Post creado con exito!");
          setPostModificado(
            <Link to="/posteos" style={{ color: "darkgoldenrod" }}>
              Leer post modificado
            </Link>
          );
        })
        .catch((error) => {
          console.log(`${error.response.status}|${error.response.data.detail}`);
          alert(`No se pudo crear el post: ${error.code}`);
          setGuardado("No se pudo crear el post");
          navigate(`/login?next=${location.pathname}`);
        });
    }
  }

  return (
    <>
      <div className={style.setPostPage}>
        <div className={style.setPostCard}>
          <h3>Modificar Post N° {idEntero}</h3>
          <form onSubmit={handleSet} className={style.form}>
            <CssTextField label="Titulo" name="titulo" />
            <CssTextField
              name="texto"
              label="Escribe tu post"
              multiline
              minRows={3}
              maxRows={15}
            />
            <CssButton variant="contained" type="submit">
              Guardar
            </CssButton>
          </form>
          <p>{guardado}</p>
          <p /* className={style.newSetPost} */>{postModificado}</p>
        </div>
      </div>
      {/* <h3></h3>
      <form onSubmit={handleSet}>
        <label>
          Titulo
          <input type="text" name="titulo" placeholder="titulo del post" />
        </label>
        <br />
        <label>
          Texto
          <textarea
            type="text"
            name="texto"
            rows="5"
            placeholder="esribe tu post"
          />
        </label>
        <br />
        <input type="submit" value="Guardar" />
      </form>
      <p>{guardado}</p>
      <span>{postModificado}</span> */}
    </>
  );
}
