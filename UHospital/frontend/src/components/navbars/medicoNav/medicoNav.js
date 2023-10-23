import { useContext } from "react";
import { UserContext } from "../../../App.js";

function MedicoNav() {
    const usuario = useContext(UserContext);
    return (
        <div> eres parte del departamento: {usuario.tipoUsuario} , bienvenido {usuario.nombre} </div>
    );
}

export default MedicoNav;