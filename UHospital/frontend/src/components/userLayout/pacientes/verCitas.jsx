import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App.js";
import styles from "./verCitas.module.css";

function VerCitas() {
    const usuario = useContext(UserContext);

    const [citas, setCitas] = useState([]);
    
    const getCitas = async () => {
        const response = await fetch(`http://localhost:4000/paciente/verCitas/${usuario.id}`);
        const data = await response.json();
        setCitas(data.citas);
    }

    useEffect(() => {
        getCitas();
    }, []);

    return (
        <div className={styles.container}>
            {   
                citas.map(cita => (
                    <div className={styles.item} key={cita.idCita}>
                        <h1 className={styles.h1}> Estado de la Cita: {cita.estado} </h1>
                        <h2 className={styles.h2}> Por {cita.motivo} </h2>
                        <p> Solución de la cita en la fecha {cita.fecha} y hora {cita.hora}</p>
                        <p>id: {cita.idCita}</p>
                        <p>Costo de la consulta: Q{cita.precioConsulta}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default VerCitas;