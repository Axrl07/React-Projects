import { useContext } from "react";
import { UserContext } from "../../../App.js";

function CitasPaciente() {
  const usuario = useContext(UserContext);
  return (
    <div>
      <h1>Citas Paciente</h1>
      <h2>{usuario.nombre}</h2>
    </div>
  );
}
export default CitasPaciente;