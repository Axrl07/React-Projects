import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../App.js";
import styles from "./comprasMedicamento.module.css";


function ComprasMedicamento() {
  const { user } = useContext(UserContext);
  const [medicamentos, setMedicamentos] = useState([])

  //obtiene los medicamentos del stock
  const getMedicamentos = async () => {
    const response = await fetch('http://localhost:4000/paciente/stockMedicamentos');
    const data = await response.json();
    setMedicamentos(data.medicamentos);
  }

  // primer acción al crearse el componente
  useEffect (() => {
    getMedicamentos();
  }, [])

  return (
      <div className={styles.container}>
        <h1>Listado de Medicamento</h1>
        {
          medicamentos.map(medicamento => {
            return (
              <div className={styles.section} id={medicamento.idMedicamento}>
                <div className={styles.header}>
                  <h2 align="center" > {medicamento.nombre} </h2>  
                  <p> descripción: {medicamento.descripcion} </p>
                </div>
                <div className={styles.item}>
                  <div>
                    <p> cantidad disponible: {medicamento.cantidadDisponible} </p>
                    <p> costo: Q{medicamento.precio} </p>
                  </div>
                  <button type="button" class="btn btn-dark"> Solicitar Medicamento</button>
                </div>
              </div>
            )
          })
        }
      </div>
  );
}

export default ComprasMedicamento;