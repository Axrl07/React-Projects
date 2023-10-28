import { useContext } from "react";
import { UserContext } from "../../../App.js";

function VerCitas() {
  const usuario = useContext(UserContext);
  return (
    <div>
      <h1>ver citas</h1>
      <h2>{usuario.nombre}</h2>
    </div>
  );
}
export default VerCitas;