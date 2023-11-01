const express = require("express");
const appData = require("../appData.js");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// MODIFICAR

router.put("/actualizarDatos", (req, res) => {
  const { id, userName, userPwd, name, lastName, birthDate, genre, cellphone,} = req.body;

  let usuario = appData.usuarios.find(usuario => usuario.id === id);
  if (!usuario) {
    return res.status(400).json({ message: "Usuario no encontrado" });
  }

  usuario.usuario = userName;
  usuario.clave = userPwd;
  usuario.nombre = name;
  usuario.apellido = lastName;
  usuario.fechaNacimiento = birthDate;
  usuario.genero = genre;
  usuario.telefono = cellphone;
  
  return res.status(200).json({ usuario: usuario });
});



//  COMPRAS

// realizar compras
router.put('/comprar:id', (req, res) => {
  const { medicamentos } = req.body;
  const { idUsuario } = req.params;

  const compras = [];
  let total = 0;

  medicamentos.forEach((medicamentoCompra) => {
    const { idMedicamento, cantidad } = medicamentoCompra;
    const medicina = appData.medicamentos.find(medicamento => medicamento.idMedicamento === idMedicamento);

    if (!medicina) {
      return res.status(400).json({ error: "Medicamento no encontrado" });
    }

    if (medicina.cantidadDisponible < cantidad) {
      return res.status(400).json({ error: "No hay suficiente stock" });
    }

    medicina.cantidadDisponible -= cantidad;
    medicina.cantidadVendida += cantidad;

    // Agregar nombre del medicamento y cantidad comprados a la lista
    total = total + (medicina.precio * cantidad);
    compras.push({
      nombreMedicamento: medicina.nombre,
      precioUnitario: medicina.precio,
      cantidadComprada: cantidad,
      subtotal: medicina.precio * cantidad,
    });

    return res.status(200).json({ msg: "Compra realizada con éxito" });
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
// ver stock de medicamentos
router.get('/stockMedicamentos', (req, res) => {
  const medicamentos = appData.medicamentos.filter(medicamento => {
    return medicamento.cantidadDisponible > 0;
  });
  return res.status(200).json({ medicamentos: medicamentos });
})
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


// RECETAS Y CITAS

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
router.post('/solicitarCitas', (req, res) => {
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

  return res.status(200).json({ msg: 'Cita solicitada con éxito' });
});


module.exports = router;