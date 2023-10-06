import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { client } from "../../api/client";
import { postsAPI } from "../../api/postsAPI";
import { AuthContext } from "../../context/AuthContext";
import { postsExt } from "../../api/posteos_extendidos";
import { CssButton } from "../../api/stylesMui";
import style from "./posteos.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Posteos() {
  const { auth, userName } = useContext(AuthContext);
  const [posteos, setPosteos] = useState([]);
  const post = postsAPI;
  const navigate = useNavigate();
  const api = postsExt;

  //Peticion de API para renderizar los posteos existentes
  //escuchando al Usuario y el array de posteos
  useEffect(() => {
    if (!userName) {
      alert("Debes logearte para acceder a los posteos");
      navigate(`/login?next=${location.pathname}`);
    }
    post
      .get(userName)
      .then((response) => {
        setPosteos(response);
        /* console.table(response); */
      })
      .catch((error) => {
        console.log(`${error.response.status}|${error.response.data.detail}`);
        alert(`No se puede solicitar los posteos: ${error.code}`);
        if (error.response.status === 401 || error.response.status === 403) {
          navigate(`/login?next=${location.pathname}`);
        }
      });
  }, [userName, posteos]);

  //Funciones para alertas de botones
  const handleRead = (num) => {
    navigate(`/posteos/leer/${num}`);
  };

  const handleDelete = (num) => {
    console.log(num);
    auth === true
      ? api
          .delete(userName, num)
          .then((response) => console.log(response))
          .catch((error) => {
            console.log(`${error.response.status}|${error.response.code}`);
          })
      : alert("No se pudo borrar el post");
  };
  //Renderizado de posteos
  const card = posteos.map((post) => (
    <div className={style.postCard} key={post.id}>
      <div>
        <h5>Post n° {post.id}</h5>
        <p>{post.titulo}</p>
      </div>

      <div className={style.buttons}>
        <CssButton
          variant="contained"
          sx={{ fontSize: 12, width: 10 }}
          onClick={(e) => {
            e.preventDefault();
            handleRead(post.id);
          }}
        >
          Leer
        </CssButton>

        <CssButton
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            const confirmDelete = confirm(
              `Desea borrar el posteo n° ${post.id}?`
            );
            if (confirmDelete) {
              handleDelete(post.id);
            }
          }}
        >
          <DeleteForeverIcon sx={{ width: 16 }} />
        </CssButton>
      </div>
    </div>
  ));

  return (
    <>
      <div className={style.posteosPage}>
        <h1>Posteos</h1>
        <div className={style.posteosCards}>
          {Array.isArray(posteos) ? card : <></>}
        </div>
      </div>
    </>
  );
}
