import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App.jsx";
import styles from "../../styles/AtencionCitas.module.css";
import { obtenerUsuario, nombreCompleto, obtenerCita } from "../../functions/functions.js";

function AtencionCitas() {
    const usuario = useContext(UserContext);
    const [citasDoctor, setcitasDoctor] = useState([]);
    const [pacientes, setpacientes] = useState([]);

    const [cita, setcita] = useState({});
    const [paciente, setpaciente] = useState({});

    const [descripcion, setdescripcion] = useState("");
    const [precioConsulta, setprecioConsulta] = useState(0);


    const obtenerInfo = async () => {
        const resCitasDoctor = await fetch(`http://localhost:5555/medico/citasDoctor/${usuario.id}`);
        const dataCitasDoctor = await resCitasDoctor.json();
        setcitasDoctor(dataCitasDoctor.citas);
        const resPacientes = await fetch(`http://localhost:5555/auth/data/pacientes`);
        const dataPacientes = await resPacientes.json();
        setpacientes(dataPacientes.usuarios);
    }

    useEffect(() => {
        obtenerInfo();
    }, []);

    const handleCitaChange = (e) => {
        const CitaSeleccionada = e.target.value;
        if(CitaSeleccionada !== null){
            const citaObjeto = obtenerCita(CitaSeleccionada, citasDoctor)
            setcita(citaObjeto);
            const pacienteObjeto = obtenerUsuario(citaObjeto.idUsuario,pacientes);
            setpaciente(pacienteObjeto);
            return console.log("Cita seleccionada");
        } else {
            setpaciente({});
            setcita({});
            return console.log("No se ha seleccionado una cita");
        }
    }

    const handleReceta = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5555/medico/crearReceta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario,
                cita,
                paciente,
                descripcion,
                precioConsulta,
            })
        });

        const data = await response.json();
        if(response.status === 200){
            return alert(data.msg);
        }else{
            return alert(data.error);
        }
    }

    return (
            <div className={styles.formContainer}>
                <div>
                    <label htmlFor="cita" className={styles.label}>Seleccione una cita:</label>
                    <select class="form-select" className={styles.input}
                        id="cita"
                        name="idCita"
                        value={cita.idCita}
                        onChange={handleCitaChange}
                    >
                        <option value={null}> -- Seleccione una cita -- </option>
                        {citasDoctor.map(cita => (
                            <option key={cita.idCita} value={cita.idCita}>{cita.idCita}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="paciente" className={styles.label}>Paciente:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="paciente"
                        name="paciente"
                        value={nombreCompleto(cita.idUsuario, pacientes)}
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="padecimiento" className={styles.label}>padecimiento:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="padecimiento"
                        name="padecimiento"
                        value={cita.motivo}
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="fecha" className={styles.label}>fecha:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="fecha"
                        name="fecha"
                        value={cita.fecha}
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="hora" className={styles.label}>hora:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="hora"
                        name="hora"
                        value={cita.hora}
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="descripcion" className={styles.label}>descripcion:</label>
                    <textarea
                        class="form-control"
                        id="descripcion"
                        name="descripcion"
                        value={descripcion}
                        rows="3"
                        onChange={e => setdescripcion(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="precioConsulta" className={styles.label}>precioConsulta:</label>
                    <input
                        className={styles.input}
                        type="number"
                        id="precioConsulta"
                        name="precioConsulta"
                        value={precioConsulta}
                        onChange={(e) => setprecioConsulta(e.target.value)}
                    />
                </div>
                <div>
                    <hr/>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-warning" type="button" onClick={handleReceta}> Enviar Receta</button>
                </div>
            </div>
    );
}

export default AtencionCitas;
