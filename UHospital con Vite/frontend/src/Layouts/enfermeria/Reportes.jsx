import styles from "../../styles/Reportes.module.css";
import { useState, useEffect } from "react";

function Reportes(){
    const [ventas, setVentas] = useState([]);
    const handleVentas = async () => {
        const response = await fetch('http://localhost:5555/enfermeria/medicamentosVendidos');
        const data = await response.json();
        setVentas(data.ventas);
    };
    
    const [medicos, setMedicos] = useState([]);
    const handleMedicos = async () => {
        const response = await fetch('http://localhost:5555/enfermeria/NumCitasFinalizadas');
        const data = await response.json();
        setMedicos(data.numCitas);
    }

    useEffect(() => {
        handleVentas();
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