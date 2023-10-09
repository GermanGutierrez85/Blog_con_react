import { useContext, useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { postsExt } from "../../api/posteos_extendidos";
import { CssButton } from "../../api/stylesMui";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "./leerPost.module.css";

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
    <div className={style.leerPost}>
      {/* <div>
      
      <div>
        <div>
          <p></p>
        </div>
        <div>
          <CssButton
            variant="contained"
            sx={{ fontSize: 10, width: 10 }}
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
          </CssButton>
        </div>
      </div>
      <NavLink to="/posteos">
        <CssButton variant="contained" sx={{ fontSize: 10, width: 10 }}>
          posteos
        </CssButton>
      </NavLink>
    </div> */}

      <Card
        className={style.postCard}
        style={{
          backgroundColor: "rgb(3, 22, 52, 0.7)",
          boxShadow: "3px 3px 25px #031634",
        }}
      >
        <CardContent className={style.texts}>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            className={style.postNumber}
          >
            Post N° {id}
          </Typography>
          <Typography variant="body2" color="white">
            {text}
          </Typography>
        </CardContent>
        <CardActions className={style.buttons}>
          <CssButton
            size="small"
            variant="contained"
            sx={{ fontSize: 10, width: 10 }}
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
          </CssButton>
          <NavLink to="/posteos">
            <CssButton
              size="small"
              variant="contained"
              sx={{ fontSize: 10, width: 10 }}
            >
              volver
            </CssButton>
          </NavLink>
        </CardActions>
      </Card>
    </div>
  );
}
