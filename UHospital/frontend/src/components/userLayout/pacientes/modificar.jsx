import { useContext } from "react";
import { UserContext } from "../../../App.js";
import { useNavigate } from "react-router-dom";
import styles from './modificar.module.css';

function Modificar(props) {
    const navigate = useNavigate();
    const usuario = useContext(UserContext);
    const handleInicio = () => {
        navigate('/paciente');
    }

    const handleActualizarDatos = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const response = await fetch('http://localhost:4000/paciente/actualizarDatos', {
            method: 'POST',
            headers: {
                'enctype': 'multipart/form-data'
            },
            body: formData
        })

        const data = await response.json();

        props.setUsuario(data.usuario)
        if (response.status === 200) {
            alert(data.usuario);
            return;
        }else{
            alert(data.error);
            return;
        }
    }
    return (
        <form onSubmit={handleActualizarDatos} className={styles.formContainer}>
            <div>
                <h1 className={styles.h1}> Actualización de datos de usuario </h1>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> ID del paciente </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="id" value={usuario.id} />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Nombres </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="name" placeholder={usuario.nombre} required />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Apellidos </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="lastName" placeholder={usuario.apellido} required />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Nombre de Usuario </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="userName" placeholder={usuario.usuario} required />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Contraseña </span>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="userPwd" placeholder={usuario.clave} required />
            </div>
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-imput-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"> Genero </span>
                    </div>
                </div>
                <div class="col-md">
                    <div class="row g-2">
                        <select class="form-select" aria-label="Default select example" name="genre" required>
                            <option value="m" > Masculino </option>
                            <option value="f" > Femenino </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-imput-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"> Fecha de nacimiento </span>
                    </div>
                </div>
                <div class="col-md">
                    <div class="row g-2">
                        <input type="date" id="inputDate" class="form-control" aria-describedby="date" name="birthDate" required />
                    </div>
                </div>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Telefono Celular </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="cellphone" placeholder={usuario.telefono} required />
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success"> Registrarse </button>
                <button onClick={handleInicio} class="btn btn-success"> Regresar al Login </button>
            </div>
        </form>
    );
}

export default Modificar;