import CitaItem from '../../components/CitaItem.jsx';
import { useState, useEffect } from 'react';
import styles from '../../styles/GestionarCitas.module.css';

function GestionarCitas() {
    const [citas, setCitas] = useState([]);
    const [medicos, setMedicos] = useState([]);

    const getInfo = async () => {
        const resMedicos = await fetch('http://localhost:5555/auth/data/medicos');
        const dataMedicos = await resMedicos.json();
        setMedicos(dataMedicos.usuarios);
        const resCitas = await fetch('http://localhost:5555/enfermeria/obtenerCitas');
        const dataCita = await resCitas.json();
        setCitas(dataCita.citas);
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <>
            <h1 className={styles.h1}>Gestion de citas</h1>
            <div className={styles.container}>
                {citas.map((cita) => (
                    <CitaItem
                        key={cita.idCita}
                        cita={cita}
                        setCitas={setCitas}
                        medicos={medicos} // Pasa la lista de médicos como prop
                    />
                ))}
            </div>
        </>
    );
}

export default GestionarCitas;