import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { nombreCompleto } from "../../functions/functions";
import styles from '../../styles/VerRecetas.module.css'

function VerRecetas() {
    const usuario = useContext(UserContext);

    const [recetas, setRecetas] = useState([]);
    const [medicos, setMedicos] = useState([]);
    
    const getInfo = async () => {
        const responesRecetas = await fetch(`http://localhost:5555/paciente/recetas/${usuario.id}`);
        const dataRecetas = await responesRecetas.json();
        setRecetas(dataRecetas.recetas);
        const responseMedicos = await fetch(`http://localhost:5555/auth/data/medicos`);
        const dataMedicos = await responseMedicos.json();
        setMedicos(dataMedicos.usuarios);
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div className={styles.container}>
            {recetas === undefined ? (
                <>
                <p>...</p>
                <h2 className={styles.h2} align="center"> Aún no se han realizado recetas </h2>
                <p>...</p>
                </>
                ) : (
                recetas.map(receta => (
                    <div className={styles.item} key={receta.idReceta}>
                        <h1 className={styles.h1}>Expendida por: {nombreCompleto(receta.idMedico, medicos)}</h1>
                        <h2 className={styles.h2}>Motivo de consulta: {receta.padecimiento}</h2>
                        <p> Descripción: {receta.descripcion}</p>
                        <p> Fecha y hora de atención: {receta.fecha} a las {receta.hora}</p>
                        <p className={styles.footer}>Costo de la consulta: Q{receta.precioConsulta}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default VerRecetas;