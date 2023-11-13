import { useContext } from "react";
import { UserContext } from "../../App";
import styles from '../../styles/SolicitarCita.module.css';

function SolicitarCita() {
    const usuario = useContext(UserContext);

    const handleSolicitarCita = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const response = await fetch('http://localhost:5555/paciente/solicitarCita', {
            method: 'POST',
            headers: {
                'enctype': 'multipart/form-data'
            },
            body: formData
        })

        const data = await response.json();
        if (response.status === 200){
            alert(data.msg);
            return;
        }else{
            alert(data.error);
            return;
        }
    }


    return (
        <form className={styles.formContainer} encType="multipart/form-data" onSubmit={handleSolicitarCita}>
            <div>
                <h1 className={styles.h1}> Formulario para solicitar una Cita </h1>
            </div>
            <div class="row g-2 mb-3">
                <div class="col-md">
                    <span class="input-group-text" id="inputGroup-sizing-default"> Su ID de usuario es:</span>
                </div>
                <div class="col-md">
                    <input class="form-control" type="text" value={usuario.id} aria-label="readonly input example" name="idUsuario" readOnly />
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
                <button type="submit" class="btn btn-info" > Solicitar Cita </button>
            </div>
        </form>
    );
}

export default SolicitarCita;