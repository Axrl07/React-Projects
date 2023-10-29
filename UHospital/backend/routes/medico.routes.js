const express = require("express");
const appData = require("../appData.js");

const router = express.Router();

router.get('/medicosActivos', (req, res) => {
    const medicos = appData.usuarios.filter(usuario => {
        return usuario.tipoUsuario === "medico";
    });

    if (medicos.length > 0) {
        return res.status(200).json({ medicos: medicos });
    } else {
        return res.status(400).json({ error: "No se encontraron médicos." });
    }
});



module.exports = router;