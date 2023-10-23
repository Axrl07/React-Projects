const express = require("express");
const appData = require("../appData.js");
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

//realizando login
router.post("/login", (req, res) => {
  const user = req.body.userName;
  const pwd = req.body.userPwd;
  for (u of appData.usuarios) {
    if (u.usuario === user && u.clave === pwd) {
      return res.status(200).json({ u });
    }
  }
  return res.status(400).json({ error: "datos incorrectos" });
});

router.post("/register", (req, res) => {
  const user = req.body.userName;
  const pwd = req.body.userPwd;
  const name = req.body.name;
  const lastName = req.body.lastName;
  const birthDate = req.body.birthDate;
  const genre = req.body.genre;
  const cellphone = req.body.cellphone;
  const id = uuidv4();
  for (u of appData.usuarios) {
    if (u.usuario === user) {
      return res.status(400).json({ error: "usuario ya existe" });
    }
  }
  appData.usuarios.push({
    id: id,
    nombre: name,
    apellido: lastName,
    usuario: user,
    genero: genre,
    fechaNacimiento: birthDate,
    clave: pwd,
    telefono: cellphone,
    tipo: "paciente"
  });
  return res.status(200).json({ msg: "usuario creado" });
});

module.exports = router;
