import { UserContext } from "../../../App.js";
import { useContext, useEffect, useState} from 'react';
import styles from './verCompras.module.css';

function VerCompras() {
  const usuario = useContext(UserContext);

  const [pedidos, setPedidos] = useState([]);

  const getPedidos = async () => {
    const res = await fetch(`http://localhost:4000/paciente/pedidos/${usuario.id}`);
    const data = await res.json();
    setPedidos(data.pedidos);
  }

  useEffect(() => {
    getPedidos();
  }, []);
   
    return (
      <>
        <h1 className={styles.h1}>Listado de Medicamentos de {usuario.nombre}</h1>
        <div className={styles.containerMedicamentos}>
          {pedidos === undefined ? (
            <>
              <p>...</p>
              <h2 className={styles.h2} align="center"> Aún no se han realizado pedidos </h2>
              <p>...</p>
            </>
          ) : (
            pedidos.map((pedido) => (
              <div className={styles.section} id={pedido.idPedido} key={pedido.idPedido}>
                <div className={styles.header}>
                  <p align="center">Factura del pedido: {pedido.idPedido}</p>
                  <p align="center">Fecha en que se realizó el pedido: {pedido.fecha}</p>
                  <div className={styles.item}>
                    <div className={styles.itemSecond}>
                      <p>nombre</p>
                      <p>cantidad</p>
                      <p>c/u</p>
                      <p>subtotal</p>
                    </div>
                    {pedido.compras.map((medicamento) => (
                      <div className={styles.itemSecond} id={medicamento.idMedicamento} key={medicamento.idMedicamento}>
                        <p>{medicamento.nombreMedicamento}</p>
                        <p>{medicamento.cantidadComprada}</p>
                        <p>{medicamento.precioUnitario}</p>
                        <p>{medicamento.subtotal}</p>
                      </div>
                    ))}
                    <div className={styles.itemSecond}>
                      <p>  </p>
                      <p>  </p>
                      <p>Total: </p>
                      <p>{pedido.totalCompras}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </>
    );
  } 
   
  export default VerCompras;