import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { postsAPI } from "../../api/postsAPI";
import { useLocation, useNavigate } from "react-router-dom";
import { CssTextField, CssButton } from "../../api/stylesMui";
import style from "./crear.module.css";

export default function Crear() {
  const { auth, userName } = useContext(AuthContext);
  const [guardado, setGuardado] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();

    const titulo = e.target.titulo.value;
    const texto = e.target.texto.value;

    if (titulo == "" || texto == "") {
      setGuardado("Debes completar ambos campos");
    }

    const api = postsAPI;
    if (auth === true) {
      api
        .post(userName, titulo, texto)
        .then((response) => {
          console.log(response.data);
          setGuardado("Post creado con exito!");
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
      <div className={style.newPostPage}>
        <div className={style.newPostCard}>
          <h3>Completa para crear tu post</h3>
          <form onSubmit={handleSubmit} className={style.form}>
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
        </div>
      </div>
    </>
  );
}
