const express = require("express");
const appData = require("../appData.js");
const router = express.Router();

router.post("/actualizarDatos", (req, res) => {
  const usuarioUpdate = {
    id: req.body.id,
    userName: req.body.userName,
    userPwd: req.body.userPwd,
    name: req.body.name,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    genre: req.body.genre,
    cellphone: req.body.cellphone,
    tipoUsuario: "paciente"
  };

  for (let i = 0; i < appData.usuarios.length; i++) {
    if (appData.usuarios[i].id === usuarioUpdate.id) {
      appData.usuarios[i] = usuarioUpdate;
      return res.status(200).json({ usuario: usuarioUpdate });
    }
  }
  return res.status(400).json({ error: "Ha ocurrido un error actualizando los datos, por favor vuelva a intentarlo" });
});

router.get('/stockMedicamentos', (req, res) => {
  const medicamentos = appData.medicamentos.filter(medicamento => {
    return medicamento.cantidadDisponible > 0;
  });
  return res.status(200).json({ medicamentos: medicamentos });
})

module.exports = router;