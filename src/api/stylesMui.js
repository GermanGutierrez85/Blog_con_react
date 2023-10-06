
import { Button } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const theme= createTheme({
    palette:{
        blue:{
            main:"#033649",
            light:"#036564",
            dark:"#031634"
        }
    },
    
    
})
//Estilado de inputs
export const CssTextField = styled(TextField)({
   "& Input":{color:"#e8ddcb"},

    "& label": {
        color: "#cdb380",
      },
  "& label.Mui-focused": {
    color: "#FCBC03",
  },
  "& .MuiInputBase-input": {
    width:"15rem",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FCBC03",
    
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e8ddcb",
      
    },
    "&:hover fieldset": {
      borderColor: "#FCBC03",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FCBC03",
    },
    /* "& .MuiInput:after fieldset":{
        backgroundColor:rgb(3, 101, 100, 0.5)
    } */
  },
});
export const CssButton = styled(Button)({
    /* backgroundColor:'#036564', */
    backgroundColor: 'transparent',
    fontSize:'0.8rem',
    fontFamily:'inherit',
    fontWeight:600,
    borderRadius: 10,
    boxShadow:'none',
    "&:hover":{
        backgroundColor:"#033649",
       
    }
});

