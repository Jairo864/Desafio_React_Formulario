import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Registro from "./componentes/Registro";
import Alerta from "./componentes/Alerta";
import "./App.css";

function App() {
  const [alert, setAlert] = useState({
    message: "",
    color: "",
    show: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);
  };

  return (
    <>
      <Registro setAlertMessage={addAlert} />
      {alert.show && <Alerta message={alert.message} color={alert.color} />}
    </>
  );
}

export default App;
