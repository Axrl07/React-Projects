import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App.js";
import styles from "./atencionCitas.module.css";

function AtencionCitas() {
    const usuario = useContext(UserContext);
    
    const [citasDoctor, setcitasDoctor] = useState([]);
    const [pacientes, setpacientes] = useState([]);
    const [cita, setcita] = useState("");
    const [fecha, setfecha] = useState("");
    const [hora, sethora] = useState("");
    const [descripcion, setdescripcion] = useState("");
    const [precioConsulta, setprecioConsulta] = useState(0);

    const handleObtenerCitas = async () => {
        const response = await fetch(`http://localhost:4000/medico/citasDoctor/${usuario.id}`);
        const data = await response.json();
        setcitasDoctor(data.citas);
    }

    useEffect(() => {
        handleObtenerCitas();
    }, []);

    const handleCitaChange = (e) => {
        const selectedCita = e.target.value;
        setcita(selectedCita);

        // Obtener el nombre del paciente basado en el ID de la cita
        const paciente = pacientes.find(p => p.idCita === selectedCita);
        if (paciente) {
            const nombreCompleto = `${paciente.nombre} ${paciente.apellido}`;
            setpacientes(nombreCompleto);
        }
    }

    const handleReceta = async (e) => {
        e.preventDefault();

        const URL = 'http://localhost:4000/medico/crearReceta';
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cita,
                fecha,
                hora,
                descripcion,
                precioConsulta,
                usuario,
            })
        });
        const data = await response.json();

        if (response.status === 400) {
            return alert(data.error);
        }

        if (response.status === 200) {
            return alert(data.msg);
        }
    }

    return (
        <>
            <form onSubmit={handleReceta} className={styles.formContainer}>
                <div>
                    <label htmlFor="cita" className={styles.label}>
                        Seleccione una cita:
                    </label>
                    <select class="form-select" className={styles.input}
                        id="cita"
                        name="cita"
                        value={cita}
                        onChange={handleCitaChange}
                    >
                        <option value="" disabled>
                            -- Seleccione una cita --
                        </option>
                        {citasDoctor.map(cita => (
                            <option key={cita.id} value={cita.id}>
                                {cita.id}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="fecha" className={styles.label}>
                        Fecha:
                    </label>
                    <input
                        className={styles.input}
                        type="date"
                        id="fecha"
                        name="fecha"
                        value={fecha}
                        onChange={(e) => setfecha(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="hora" className={styles.label}>
                        Hora:
                    </label>
                    <input
                        className={styles.input}
                        type="time"
                        id="hora"
                        name="hora"
                        value={hora}
                        onChange={(e) => sethora(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="padecimiento" className={styles.label}>
                        padecimiento:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        id="padecimiento"
                        name="padecimiento"
                        value={cita.motivo}
                        readonly
                    />
                </div>
                <div>
                    <label htmlFor="descripcion" className={styles.label}>
                        descripcion:
                    </label>
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
                    <label htmlFor="precioConsulta" className={styles.label}>
                        precioConsulta:
                    </label>
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
                    <button class="btn btn-warning" type="submit"> Enviar Receta</button>
                </div>
            </form>
        </>
    );
}

export default AtencionCitas;
