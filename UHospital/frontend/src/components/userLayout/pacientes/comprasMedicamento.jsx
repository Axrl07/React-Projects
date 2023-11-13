import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App.js";
import styles from "./comprasMedicamento.module.css";
import MedicamentoItem from "./MedicamentoItem.jsx";

function ComprasMedicamento() {
  const usuario = useContext(UserContext);
  const navigate = useNavigate();
  const [medicamentos, setMedicamentos] = useState([]);
  const [total, setTotal] = useState(0);
  const [compraData, setCompraData] = useState({
    idUsuario: usuario.id,
    medicamentos: [],
  });

  // Obtiene los medicamentos del stock
  const getMedicamentos = async () => {
    const response = await fetch('http://localhost:4000/paciente/stock');
    const data = await response.json();
    setMedicamentos(data.medicamentos);
  }
  
  useEffect(() => {
    getMedicamentos();
  }, []);
  
  const handleComprar = async (e) => {
    e.preventDefault();
    const medicamentosSeleccionados = medicamentos.filter(medicamento => medicamento.cantidadSeleccionada > 0 && medicamento.cantidadSeleccionada !== NaN).map(medicamento => ({
      idMedicamento: medicamento.idMedicamento,
      cantidad: medicamento.cantidadSeleccionada,
    }));

    const comp = { ...compraData, medicamentos: medicamentosSeleccionados, }
    setCompraData(comp);
    const response = await fetch("http://localhost:4000/paciente/comprar", {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(comp),
    });

    const res = await response.json();
    if (response.status === 200) {
      alert(res.msg);
      navigate("/paciente/verCompras");
    } else {
      alert(res.error);
    }
  }


  // Calcula el total cada vez que cambian las cantidades seleccionadas
  useEffect(() => {
    let subtotalSum = 0;
    medicamentos.forEach((medicamento) => {
      const cantidad = parseFloat(medicamento.cantidadSeleccionada) || 0;
      const precio = parseFloat(medicamento.precio) || 0;
      subtotalSum += cantidad * precio;
    });
    setTotal(subtotalSum);
  }, [medicamentos]);


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
          <MedicamentoItem
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