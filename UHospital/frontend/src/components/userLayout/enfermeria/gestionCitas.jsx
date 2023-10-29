import { useContext, useEffect, useState } from 'react';
import styles from './gestionCitas.module.css';
import CitaItem from './citaItem.jsx';

function GestionCitas() {
    const [citas, setCitas] = useState([]);
    const [medicos, setMedicos] = useState([]);

    const getMedicos = async () => {
        const response = await fetch('http://localhost:4000/medico/medicosActivos');
        const data = await response.json();
        setMedicos(data.medicos);
    }
    const getCitas = async () => {
        const response = await fetch('http://localhost:4000/enfermeria/obtenerCitas');
        const data = await response.json();
        setCitas(data.citas);
    }

    useEffect(() => {
        getMedicos();
    }, []);
    useEffect(() => {
        getCitas();
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

export default GestionCitas;