import { useContext } from "react";
import { UserContext } from "../../../App.js";
import style from "./verUsuario.module.css";

function VerUsuario() {
    const usuario = useContext(UserContext);
    const generoFuncion = (genero) => {
        if (genero === "m") {
            return "Masculino";
        } else {
            return "Femenino";
        }
    }
    return (
        <div className={style.card} >
            <div className={style.itemCard}>
                <label for="userId" className={style.itemLabel}>ID del paciente:</label>
                <input type="text" class="form-control" id="userId" value={usuario.id} disabled readonly />
                <label for="user" className={style.itemLabel}>Nombre de usuario:</label>
                <input type="text" class="form-control" id="user" value={usuario.usuario} disabled />
                <label for="userName" className={style.itemLabel}>Nombres:</label>
                <input type="text" class="form-control" id="userName" value={usuario.nombre} disabled />
                <label for="userLastName" className={style.itemLabel}>Apellidos:</label>
                <input type="text" class="form-control" id="userLastName" value={usuario.apellido} disabled />
                <label for="userGenre" className={style.itemLabel}>fecha de nacimiento:</label>
                <input type="text" class="form-control" id="userGenre" value={usuario.fechaNacimiento} disabled />
                <label for="userBirthdate" className={style.itemLabel}>Género:</label>
                <input type="text" class="form-control" id="userBirthdate" value={generoFuncion(usuario.genero)} disabled />
                <label for="userType" className={style.itemLabel}>Teléfono del paciente:</label>
                <input type="text" class="form-control" id="userType" value={usuario.telefono} disabled />
                <label for="userPwd" className={style.itemLabel}>Clave del paciente:</label>
                <input type="text" class="form-control" id="userPwd" value={usuario.clave} disabled />    
            </div>
        </div>
    );
}
export default VerUsuario;
