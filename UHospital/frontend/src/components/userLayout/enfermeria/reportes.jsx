import styles from './reportes.module.css';
import { useEffect, useState } from 'react';

function Reportes(){
    const [ventas, setVentas] = useState([]);
    const handleVentas = async () => {
        const response = await fetch('http://localhost:4000/enfermeria/medicamentosVendidos');
        const data = await response.json();
        setVentas(data.ventas);
    };
    
    const [medicos, setMedicos] = useState([]);
    const handleMedicos = async () => {
        const response = await fetch('http://localhost:4000/enfermeria/medicosCitas');
        const data = await response.json();
        setMedicos(data.medicosCitas);
    }

    useEffect(() => {
        handleVentas();
    }, []);
    useEffect(() => {
        handleMedicos();
    }, []);


    return(
        <>
            <h1 className={styles.h1}>Reportes</h1>
            <div className={styles.container}>
                <h1 className={styles.h1}> Reporte de Ventas </h1>
                <h1 className={styles.h1}> Reporte de Medicos </h1>
                <div className={styles.card}>
                    {ventas.map(venta => (
                        <div className={styles.item}>
                            <p>{venta.nombre}</p>
                            <p>{venta.cantidad}</p>
                        </div>
                    ))};
                </div>
                <div className={styles.card}>
                    {medicos.map(medico => (
                        <div className={styles.item}>
                            <p>{medico.nombre}</p>
                            <p>{medico.cantidad}</p>
                        </div>
                    ))};
                </div>
            </div>
        </>
    )
}

export default Reportes;