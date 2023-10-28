import React, { useState, useEffect } from 'react';
import styles from './medicamentoItem.module.css';

function MedicamentoItem({ medicamento, setMedicamentos }) {
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);

  const handleCantidadSeleccionadaChange = (event) => {
    const nuevaCantidad = Number(event.target.value);
    setCantidadSeleccionada(nuevaCantidad);

    setMedicamentos((prevMedicamentos) => {
      const nuevosMedicamentos = [...prevMedicamentos];
      const medicamentoActualizado = {
        ...medicamento,
        cantidadSeleccionada: nuevaCantidad,
      };

      const index = nuevosMedicamentos.findIndex(
        (m) => m.idMedicamento === medicamento.idMedicamento
      );
      nuevosMedicamentos[index] = medicamentoActualizado;

      return nuevosMedicamentos;
    });
  };

  useEffect(() => {
    setCantidadSeleccionada(medicamento.cantidadSeleccionada);
  }, [medicamento]);

  const subtotal = cantidadSeleccionada * medicamento.precio;

  return (
    <div className={styles.itemCompras} id={medicamento.idMedicamento}>
      <p className={styles.item}>{medicamento.nombre}</p>
      <p className={styles.item}>{medicamento.precio}</p>
      <p className={styles.item}>{medicamento.cantidadDisponible}</p>
      <input
        type="number"
        min="0"
        max={medicamento.cantidadDisponible}
        className={styles.input}
        name={medicamento.nombre}
        aria-describedby="basic-addon3 basic-addon4"
        value={cantidadSeleccionada}
        onChange={handleCantidadSeleccionadaChange}
      />
      <p className={styles.item}>{subtotal}</p>
    </div>
  );
}

export default MedicamentoItem;
