import { useContext } from "react";
import { UserContext } from "../../../App.js";

function VerRecetas() {
    const usuario = useContext(UserContext);

    return(
        <div>
            <h1>Ver Recetas de {usuario.nombre}</h1>
        </div>
    );
}

export default VerRecetas;