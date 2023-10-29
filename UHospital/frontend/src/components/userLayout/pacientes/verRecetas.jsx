import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App.js";
import styles from "./verRecetas.module.css";

function VerRecetas() {
    const usuario = useContext(UserContext);

    const [recetas, setRecetas] = useState([]);
    const [med, setMed] = useState([]);
    
    const getRecetas = async () => {
        const response = await fetch(`http://localhost:4000/paciente/recetas/${usuario.id}`);
        const data = await response.json();
        setRecetas(data.recetas);
    }

    const getMedico = async () => {
        const response = await fetch(`http://localhost:4000/medico/medicosActivos`);
        const data = await response.json();
        setMed(data.medicos);
    }

    useEffect(() => {
        getRecetas();
    }, []);

    useEffect(() => {
        getMedico();
    }, []);

    // const medicoName = async (idMedico){
    //     const response = await fetch(`http://localhost:4000/medico/medicosActivos/${idMedico}`);
    //     const data = await response.json();
    //     setMed(data.medicos);
    // }

    function medicoName(idMedico){
        let nombre = "";
        med.forEach(medico => {
            if(medico.id === idMedico){
                nombre = `${medico.nombre} ${medico.apellido}`;
            }
        });
        return nombre;
    }

    return (
        <div className={styles.container}>
            {   
                recetas.map(receta => (
                    <div className={styles.item} key={receta.idReceta}>
                        <h1 className={styles.h1}>Medico encargado: {medicoName(receta.idMedico)} </h1>
                        <p> identificador de cita: {receta.idReceta}</p>
                        <p> receta creada en la fecha {receta.fecha} y hora {receta.hora}</p>
                        <h2 className={styles.h2}>{receta.padecimiento}</h2>
                        <p>{receta.descripcion}</p>
                        <p>Costo de la consulta: Q{receta.precioConsulta}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default VerRecetas;