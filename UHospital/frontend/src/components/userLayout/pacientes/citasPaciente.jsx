import { useContext } from "react";
import { UserContext } from "../../../App.js";

function CitasPaciente() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Citas Paciente</h1>
      <h2>{user.name}</h2>
    </div>
  );
}
export default CitasPaciente;