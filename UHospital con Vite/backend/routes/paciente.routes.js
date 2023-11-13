const express = require("express");
const appData = require("../appData.js");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


//  COMPRAS

// realizar compras
router.post('/comprar', (req, res) => {
  const { idUsuario, medicamentos } = req.body;

  const compras = [];
  let total = 0;

  medicamentos.forEach((medicamentoCompra) => {
    const { idMedicamento, cantidad } = medicamentoCompra;
    const medicamento = appData.medicamentos.find(medicamento => medicamento.idMedicamento === idMedicamento);

    if (!medicamento) {
      return res.status(400).json({ error: "Medicamento no encontrado" });
    }

    if (medicamento.cantidadDisponible < cantidad) {
      return res.status(400).json({ error: "No hay suficiente stock" });
    }

    medicamento.cantidadDisponible -= cantidad;
    medicamento.cantidadVendida += cantidad;

    // Agregar nombre del medicamento y cantidad comprados a la lista
    total = total + (medicamento.precio * cantidad);
    compras.push({
      nombreMedicamento: medicamento.nombre,
      precioUnitario: medicamento.precio,
      cantidadComprada: cantidad,
      subtotal: medicamento.precio * cantidad,
    });
  });

  // Registrar la compra
  const pedido = {
    idPedido: uuidv4(),
    fecha: new Date().toISOString().slice(0, 10),
    idUsuario: idUsuario,
    totalCompras: total,
    compras: compras
  };

  appData.pedidos.push(pedido);

  return res.status(200).json({ msg: "Compra realizada con éxito" });
});

// ver compras hechas por el usuario
router.get('/pedidos/:idUsuario', (req, res) => {
  const { idUsuario } = req.params;

  const pedidos = appData.pedidos.filter((pedido) => {
    return pedido.idUsuario === idUsuario && pedido.compras.length > 0;
  });

  if (pedidos.length > 0) {
    return res.status(200).json({ pedidos: pedidos });
  } else {
    return res.status(404).json({ error: 'No se encontraron pedidos con compras para este usuario.' });
  }
});

// ver recetas
router.get('/recetas/:idUsuario', (req, res) => {
  const { idUsuario } = req.params;

  const citasUser = appData.citas.filter((cita) => {
    return cita.idUsuario === idUsuario;
  });

  const citasIds = citasUser.map((cita) => cita.idCita);

  const recetasUser = appData.recetas.filter((receta) => {
    return citasIds.includes(receta.idCita);
  });

  if (recetasUser.length > 0) {
    return res.status(200).json({ recetas: recetasUser });
  } else {
    return res.status(400).json({ error: 'No se encontraron recetas para este usuario.' });
  }
});
// ver estado citas
router.get('/verCitas/:idUsuario', (req, res) => {
  const { idUsuario } = req.params;

  const citasUser = appData.citas.filter((cita) => {
    return cita.idUsuario === idUsuario;
  });

  if (citasUser.length > 0) {
    return res.status(200).json({ citas: citasUser });
  } else {
    return res.status(400).json({ error: 'No se encontraron citas para este usuario.' });
  }
});
// solicitar citas
router.post('/solicitarCita', (req, res) => {
  const { idUsuario, fecha, hora, motivo } = req.body;

  const cita = {
    idCita: uuidv4(),
    fecha: fecha,
    hora: hora,
    motivo: motivo,
    estado: 'pendiente',
    idUsuario: idUsuario
  };

  appData.citas.push(cita);
  
  for(c of appData.citas){
    if(c.idCita === cita.idCita){
      return res.status(200).json({ msg: "Cita solicitada con éxito" });
    }
  }
  return res.status(400).json({ error: "No se pudo solicitar la cita" });
});


module.exports = router;