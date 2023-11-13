import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import { citasMedicos } from "../../functions/functions";
import styles from '../../styles/VerCitas.module.css'

function VerCitas() {
    const usuario = useContext(UserContext);

    const [citas, setcitas] = useState([]);
    const [medicos, setmedicos] = useState([]);

    const getInfo = async () => {
        const resCitas = await fetch(`http://localhost:5555/paciente/verCitas/${usuario.id}`);
        const dataCitas = await resCitas.json();
        setcitas(dataCitas.citas);
        const resMedicos = await fetch(`http://localhost:5555/auth/data/medicos`);
        const dataMedicos = await resMedicos.json();
        setmedicos(dataMedicos.usuarios);
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div className={styles.container}>
            {citas === undefined ? (
                <>
                <p>...</p>
                <h2 className={styles.h2} align="center"> Aún no se han realizado citas </h2>
                <p>...</p>
                </>
                ) : (   
                citas.map(cita => (
                    <div className={styles.item} key={cita.idCita}>
                        <h1 className={styles.h1}>Estado de la Cita: {cita.estado}</h1>
                        <h2 className={styles.h2}>Motivo: {cita.motivo}</h2>
                        <p>La cita fue creada en {cita.fecha} a las {cita.hora}</p>
                        <p>{citasMedicos(cita.estado,cita.idMedico, medicos)}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default VerCitas;