const express = require("express");
const appData = require("../appData.js");
const router = express.Router();

router.get('/obtenerCitas', (req, res) => {
    const citas = appData.citas.filter(cita => {
        return cita.estado !== "finalizada";
    });

    if (citas.length > 0) {
        return res.status(200).json({ citas: citas });
    } else {
        return res.status(400).json({ error: "No se encontraron citas." });
    }
});

router.put('/actualizarCita', (req, res) => {
    const { idCita, estado, idMedico } = req.body;

    const cita = appData.citas.find(cita => {
        return cita.idCita === idCita;
    });

    if (cita) {
        cita.estado = estado;
        cita.idMedico = idMedico; 
        return res.status(200).json({ msg: "cita actualizada con exito" });
    } else {
        return res.status(400).json({ error: "Ocurrió un error al actualizar la cita" });
    }
});

module.exports = router;