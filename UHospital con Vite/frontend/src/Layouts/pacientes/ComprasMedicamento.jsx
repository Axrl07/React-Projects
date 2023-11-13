import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Medicamento from "../../components/Medicamento.jsx";
import styles from '../../styles/ComprasMedicamento.module.css';

function ComprasMedicamento() {
    const usuario = useContext(UserContext);
    const navigate = useNavigate();
    const [medicamentos, setMedicamentos] = useState([]);
    const [total, setTotal] = useState(0);
    const [compraData, setCompraData] = useState({
        idUsuario: usuario.id,
        medicamentos: [],
    });

    const getMedicamentos = async () => {
        const response = await fetch('http://localhost:5555/auth/stock');
        const data = await response.json();
        setMedicamentos(data.medicamentos);
    }

    useEffect(() => {
        getMedicamentos();
    }, []);

    useEffect(() => {
        let subtotalSum = 0;
        medicamentos.forEach((medicamento) => {
            const cantidad = parseFloat(medicamento.cantidadSeleccionada) || 0;
            const precio = parseFloat(medicamento.precio) || 0;
            subtotalSum += cantidad * precio;
        });
        setTotal(subtotalSum);
    }, [medicamentos]);

    const handleComprar = async (e) => {
        e.preventDefault();
        const medicamentosSeleccionados = medicamentos.filter(medicamento => medicamento.cantidadSeleccionada > 0 && medicamento.cantidadSeleccionada !== NaN).map(medicamento => ({
            idMedicamento: medicamento.idMedicamento,
            cantidad: medicamento.cantidadSeleccionada,
        }));

        const comp = { ...compraData, medicamentos: medicamentosSeleccionados, }
        setCompraData(comp);
        const response = await fetch("http://localhost:5555/paciente/comprar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comp),
        });

        const res = await response.json();
        if (response.status === 200) {
            alert(res.msg);
            navigate("/pacientes/verCompras");
        } else {
            alert(res.error);
        }
    }

    return (
        <div className={styles.containerCompras}>
            <div>
                <div className={styles.itemCompras}>
                    <p>Nombre del medicamento</p>
                    <p>Precio Unitario</p>
                    <p>Cantidad Disponible</p>
                    <p>Cantidad Seleccionada</p>
                    <p>Subtotal por medicamento</p>
                </div>
                {medicamentos.map((medicamento) => (
                    <Medicamento
                        key={medicamento.idMedicamento}
                        medicamento={medicamento}
                        setMedicamentos={setMedicamentos}
                    />
                ))}
            </div>
            <div className={styles.item}>
                <p>Total: {total}</p>
                <button type="buttom" className="btn btn-success" onClick={handleComprar}>
                    Comprar
                </button>
            </div>
        </div>
    );
}

export default ComprasMedicamento;