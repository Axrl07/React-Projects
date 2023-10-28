const express = require("express");
const appData = require("../appData.js");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

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

router.get('/stockMedicamentos', (req, res) => {
  const medicamentos = appData.medicamentos.filter(medicamento => {
    return medicamento.cantidadDisponible > 0;
  });
  return res.status(200).json({ medicamentos: medicamentos });
})

router.put('/comprar', (req, res) => {
  const { idUsuario, medicamentos } = req.body;

  const compras = [];

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
    compras.push({
      nombreMedicamento: medicamento.nombre,
      cantidadComprada: cantidad,
    });
  });

  // Registrar la compra
  const pedido = {
    idPedido: uuidv4(),
    fecha: new Date().toISOString().slice(0, 10),
    idUsuario: idUsuario,
    compras: compras
  };

  appData.pedidos.push(pedido);

  return res.status(200).json({ msg: "Compra realizada con éxito" });
});

router.get('/pedidos/:idUsuario', (req, res) => {
  const { idUsuario } = req.params;

  const pedidos = appData.pedidos.filter(pedido => pedido.idUsuario === idUsuario);
  return res.status(200).json({ pedidos: pedidos });
})

router.get('/compras:id', (req, res) => {
  const compras = appData.pedidos.filter(compra => {
    return compra.idUsuario === req.params;
  });
  return res.status(200).json({ compras: compras });
})  



module.exports = router;