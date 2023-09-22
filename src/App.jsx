import { useState } from "react";

import "./App.css";
import RoutesBlog from "./routes/RoutesBlog";
import { initUser, Autentication, AuthContext } from "./context/AuthContext";

function App() {
  const [auth, setAuth] = useState(Autentication);
  const [userName, setUserName] = useState(initUser);
  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth, userName, setUserName }}>
        <RoutesBlog />
      </AuthContext.Provider>
    </>
  );
}

export default App;
