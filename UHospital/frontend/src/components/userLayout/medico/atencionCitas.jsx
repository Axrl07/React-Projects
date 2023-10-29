import { useConxtext, useEffect, useState } from "react";
import { UserContext } from "../../../App.js";
import styles from "./atencionCitas.module.css";

function AtencionCitas(){
    const usuario = useConxtext(UserContext);
    const [citasDoctor, setcitasDoctor] = useState([]);

    // Campos para crear una receta
    const [cita, setcita] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [padecimiento, setpadecimiento] = useState("");
    const [descripcion, setdescripcion] = useState("");
    const [precioConsulta, setprecioConsulta] = useState(0);

    const handleObtenerCitas = async () => {
        const response = await fetch(`http://localhost:4000/medico/citasDoctor/${usuario.id}`)
        const data = await response.json();
        setcitasDoctor(data.citas);
    }

    useEffect(() => {
        handleObtenerCitas();
    }, [])

    const handleCrearReceta = async e => {
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
        })
        const data = await response.json();

        if (response.status === 400) {
            return alert(data.error);
        }

        if (response.status === 200) {
            return alert(data.msg);
        }
    }
    

    return(
        <div className={styles.container}>
            <h1>Atencion de Citas</h1>
        </div>
    )
}

export default AtencionCitas;