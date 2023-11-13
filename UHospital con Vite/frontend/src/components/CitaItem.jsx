import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/CitaItem.module.css';

function CitaItem({ cita, setCitas, medicos }) {
    const [selectedEstado, setSelectedEstado] = useState("pendiente");
    const [selectedMedico, setSelectedMedico] = useState("");
    const navigate = useNavigate();

    const handleEstadoChange = (event) => {
        setSelectedEstado(event.target.value);
    };

    const handleMedicoChange = (event) => {
        setSelectedMedico(event.target.value);
    };

    const handleActualizar = async () => {
        const response = await fetch('http://localhost:5555/enfermeria/actualizarCita', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idCita: cita.idCita,
                estado: selectedEstado,
                idMedico: selectedMedico
            })
        });
        const data = await response.json();
        if (response.status === 200) {
            setCitas(data.msg);
            alert(data.msg)
            navigate('/enfermeria');
        }
        if (data.status === 400) {
            alert(data.error);
        }
    };

    useEffect(() => {
        setSelectedEstado(cita.estado);
        setSelectedMedico(cita.idMedico);
    }, [cita]);

    return (
        <div className={styles.item}>
            <p>Fecha: {cita.fecha} Hora: {cita.hora} hrs. Motivo: {cita.motivo}</p>
            <select
                className="form-select"
                value={selectedEstado}
                onChange={handleEstadoChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="aceptada">Aceptada</option>
                <option value="rechazada">Rechazada</option>
                <option value="finalizada">Finalizada</option>
            </select>
            <select
                className="form-select"
                value={selectedMedico}
                onChange={handleMedicoChange}
            >
                <option value={0}>Seleccione el médico</option>
                {medicos.map((medico) => (
                    <option key={medico.id} id={medico.id} value={medico.id}>
                        {medico.nombre} {medico.apellido}
                    </option>
                ))}
            </select>
            <button className="btn btn-primary" onClick={handleActualizar}>Actualizar</button>
        </div>
    );
}

export default CitaItem;