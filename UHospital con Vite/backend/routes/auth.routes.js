const express = require("express");
const appData = require("../appData.js");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// inicio de sesión
router.post("/login", (req, res) => {
  const {nombreUsuario, clave} = req.body;
  for (u of appData.usuarios) {
    if (u.usuario === nombreUsuario && u.clave === clave) {
      return res.status(200).json({ usuario: u });
    }
  }
  return res.status(400).json({ error: "verifique las credenciales" });
});

// registro de usuario tipo paciente
router.post("/registro", (req, res) => {
  const {id, nombreUsuario, clave, nombre, apellido, fechaNacimiento, genero, telefono, departamento} = req.body;
  for (u of appData.usuarios) {
    if (u.usuario === nombreUsuario || u.id === id) {
      return res.status(400).json({ error: "el usuario ya existe" });
    }
  }
  appData.usuarios.push({
    id: id,
    nombre: nombre,
    apellido: apellido,
    usuario: nombreUsuario,
    genero: genero,
    fechaNacimiento: fechaNacimiento,
    clave: clave,
    telefono: telefono,
    departamento: departamento
  });
  for(u of appData.usuarios){
    if(u.id === id){
      return res.status(200).json({ usuario: u });
    }
  }
});

// modificar usuario
router.put("/actualizarDatos", (req, res) => {
  const {id, nombreUsuario, clave, nombre, apellido, fechaNacimiento, genero, telefono, departamento} = req.body;

  let usuario = appData.usuarios.find(u => u.id === id);
  if (!usuario) {
    return res.status(400).json({ message: "el usuario no fue encontrado" });
  }

  usuario.usuario = nombreUsuario;
  usuario.clave = clave;
  usuario.nombre = nombre;
  usuario.apellido = apellido;
  usuario.fechaNacimiento = fechaNacimiento;
  usuario.genero = genero;
  usuario.telefono = telefono;
  usuario.departamento = departamento;
  
  return res.status(200).json({ usuario });
});

// obtener usuarios pertenecientes a un departamento
router.get('/data/:departamento', (req, res) => {
  const departamento = req.params.departamento;
  usuarios = appData.usuarios.filter(usuario => usuario.departamento === departamento);
  if(usuarios.length > 0){
    return res.status(200).json({ usuarios })
  } else {
    return res.status(400).json({ error: "no se encontraron usuarios" })
  }
});

// obtener medicamentos disponibles
router.get('/stock', (req, res) => {
  const medicamentos = appData.medicamentos.filter(medicamento => {
    return medicamento.cantidadDisponible > 0;
  });
  return res.status(200).json({ medicamentos: medicamentos });
})


module.exports = router;