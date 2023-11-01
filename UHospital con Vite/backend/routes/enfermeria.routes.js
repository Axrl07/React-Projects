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

router.get('/medicamentosVendidos', (req, res) => {
    const medicamentos = appData.medicamentos
    const ventas = [];
    medicamentos.forEach(med => {
        if (med.cantidadVendida > 0) {
            const venta = { nombre: med.nombre, cantidad: med.cantidadVendida };
            ventas.push(venta);
        }
    });
    ventas.sort((a, b) => b.cantidad - a.cantidad);

    if (ventas.length > 0) {
        return res.status(200).json({ ventas: ventas });
    } else {
        return res.status(400).json({ error: "No se encontraron medicamentos." });
    }
});

router.get('/medicosCitas', (req, res) => {
    const medicos = appData.usuarios.filter(usuario => {
        return usuario.tipoUsuario === "medico";
    });
    const citas = appData.citas;
    const medicosCitas = [];
    medicos.forEach(med => {
        let contador = 0;
        citas.forEach(cita => {
            if (cita.idMedico === med.id && cita.estado === "finalizada") {
                contador++;
            }
        });
        const medicoCita = { nombre: med.nombre, cantidad: contador };
        medicosCitas.push(medicoCita);
    });
    medicosCitas.sort((a, b) => b.cantidad - a.cantidad);

    if (medicosCitas.length > 0) {
        return res.status(200).json({ medicosCitas: medicosCitas });
    } else {
        return res.status(400).json({ error: "No se encontraron medicos." });
    }
});

module.exports = router;