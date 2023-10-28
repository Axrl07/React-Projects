import { UserContext } from "../../../App.js";
import { useContext, useEffect, useState } from "react";
import styles from './verCompras.module.css';



function verCompras() { 
    const [medicamentos, setMedicamentos] = useState([]) 
    const usuario = useContext(UserContext);
    //obtiene los medicamentos del stock 
    const getMedicamentos = async () => { 
      const ruta = `http://localhost:4000/paciente/medicamentos${usuario.id}`;
      const response = await fetch(ruta); 
      const data = await response.json(); 
      setMedicamentos(data.medicamentos); 
    } 
   
    // primer acción al crearse el componente 
    useEffect (() => { 
      getMedicamentos(); 
    }, []) 
   
    return ( 
        <div className={styles.containerMedicamentos}> 
          <h1>Listado de Medicamento {usuario.id}</h1> 
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
   
  export default verCompras;