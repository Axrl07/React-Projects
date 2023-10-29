import styles from "./solicitarCita.module.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";

function SolicitarCita() {
    const usuario = useContext(UserContext);
    const navigate = useNavigate();

    const handleInicio = () => {
        navigate('/paciente');
    }

    const handleSolicitarCita = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const response = await fetch('http://localhost:4000/paciente/solicitarCitas', {
            method: 'POST',
            headers: {
                'enctype': 'multipart/form-data'
            },
            body: formData
        })

        const data = await response.json();
        if (response.status === 200) {
            alert(data.msg);
            handleInicio();
            return;
        }else{
            alert(data.error);
            return;
        }
    }

    return (
        <form onSubmit={handleSolicitarCita} className={styles.formContainer}>
            <div>
                <h1 className={styles.h1}> Formulario para solicitar una Cita </h1>
            </div>
            <div class="row g-2 mb-3">
                <div class="col-md">
                    <span class="input-group-text" id="inputGroup-sizing-default"> Su ID de usuario es:</span>
                </div>
                <div class="col-md">
                    <input class="form-control" type="text" value={usuario.id} aria-label="readonly input example" name="idUsuario" readonly />
                </div>
            </div>
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-imput-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"> Fecha de la cita </span>
                    </div>
                </div>
                <div class="col-md">
                    <div class="row g-2">
                        <input type="date" id="inputDate" class="form-control" aria-describedby="date" name="fecha" required />
                    </div>
                </div>
            </div>
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-imput-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"> hora </span>
                    </div>
                </div>
                <div class="col-md">
                    <div class="row g-2">
                        <input type="time" id="inputDate" class="form-control" aria-describedby="date" name="hora" required />
                    </div>
                </div>
            </div>
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-imput-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"> Motivo de la Cita </span>
                    </div>
                </div>
                <div class="col-md">
                    <div class="row g-2">
                        <input type="text" id="inputDate" class="form-control" aria-describedby="date" name="motivo" required />
                    </div>
                </div>
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success"> Registrarse </button>
                <Link to="/paciente" className="btn btn-danger"> Regresar </Link>
            </div>
        </form>
    );
}

export default SolicitarCita;