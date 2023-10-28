import { useContext } from "react";
import { UserContext } from "../../../App.js";

function SolicitarCitas() {
  const usuario = useContext(UserContext);
  return (
    <div>
      <h1>Solicitar cita</h1>
      <h2>{usuario.nombre}</h2>
    </div>
  );
}
export default SolicitarCitas;