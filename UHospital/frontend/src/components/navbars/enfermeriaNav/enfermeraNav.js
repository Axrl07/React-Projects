import { useContext } from "react";
import { UserContext } from "../../../App.js";


function EnfermeriaNav() {
    const usuario = useContext(UserContext);
    return (
        <div> eres parte del departamento de: {usuario.tipoUsuario} , bienvenido {usuario.nombre} </div>
    );
}

export default EnfermeriaNav;