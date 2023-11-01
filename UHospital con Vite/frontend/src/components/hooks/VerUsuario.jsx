import { useContext } from "react";
import { UserContext } from "../../Rutas.routes";
import styles from "./VerUsuario.module.css";

function VerUsuario() {
    const usuario = useContext(UserContext);
    return (
        <div className={styles.container} >
            <h1 className={styles.h1}> Datos del Usuario</h1>
            <div class="input-group mb-3">
                <span class="input-group-text">ID del usuario:</span>
                <input type="text" class="form-control" id="userId" value={usuario.id} readOnly disabled />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text"> Nombre </span>
                <input type="text" class="form-control" id="userName" value={usuario.nombre} readOnly disabled />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Nombre de usuario:</span>
                <input type="text" class="form-control" id="user" value={usuario.usuario} readOnly disabled />                
            </div>                
            <div class="input-group mb-3">
                <span class="input-group-text">Apellidos:</span>
                <input type="text" class="form-control" id="userLastName" value={usuario.apellido} readOnly disabled />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">fecha de nacimiento:</span>
                <input type="text" class="form-control" id="userGenre" value={usuario.fechaNacimiento} readOnly disabled />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Género:</span>
                <input type="text" class="form-control" id="userBirthdate" value={usuario.genero} readOnly disabled />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Teléfono:</span>
                <input type="text" class="form-control" id="userType" value={usuario.telefono} readOnly disabled />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Contraseña:</span>
                <input type="text" class="form-control" id="userPwd" value={usuario.clave} readOnly disabled />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">departamento al que pertenece:</span>
                <input type="text" class="form-control" id="userPwd" value={usuario.departamento} readOnly disabled />
            </div>
        </div>
    );
}

export default VerUsuario;