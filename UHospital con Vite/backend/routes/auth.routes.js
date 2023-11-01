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
  const {id, nombreUsuario, clave, nombre, apellido, fechaNacimiento, genero, telefono} = req.body;
  for (u of appData.usuarios) {
    if (u.usuario === nombreUsuario) {
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
    departamento: "pacientes"
  });
  for(u of appData.usuarios){
    if(u.usuario === nombreUsuario){
      return res.status(200).json({ usuario: u });
    }
  }
});

// obtener usuarios pertenecientes a un departamento
router.get('/data/:departamento', (req, res) => {
  const departamento = req.params.departamento;
  pacientes = appData.usuarios.filter(usuario => usuario.departamento === departamento);
  if(pacientes.length > 0){
    return res.status(200).json({ pacientes })
  } else {
    return res.status(400).json({ error: "no se encontraron pacientes" })
  }
});  

module.exports = router;