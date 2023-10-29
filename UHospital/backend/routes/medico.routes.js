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

router.get('/citasDoctor/:id', (req, res) => {
    const citas = appData.citas.filter(cita => {
        return cita.idMedico === req.params.id;
    });

    if (citas.length > 0) {
        return res.status(200).json({ citas: citas });
    } else {
        return res.status(400).json({ error: "No se encontraron pacientes." });
    }
});

router.post('/crearReceta', (req, res) => {
    const { idCita, fecha, hora, descripcion, precioConsulta, idMedico } = req.body;
    let cambio = -1;
    const citaMotivo = "";
    for (let cita of appData.citas) {
        if (cita.idCita === idCita) {
            cita.idMedico = "";
            cita.estado = "finalizada";
            citaMotivo = cita.motivo;
            cambio = 1;
            break;
        }
    }
    if (cambio === -1) {
        return res.status(400).json({ error: "ha ocurrido un error" });
    }
    const receta = {
        idCita: idCita,
        fecha: fecha,
        hora: hora,
        padecimiento: citaMotivo,
        descripcion: descripcion,
        precioConsulta: precioConsulta,
        idMedico: idMedico,
    };
    
    appData.recetas.push(receta);
    return res.status(200).json({ msg: "Receta creada con exito" });
})

router.get('/paciente/:idCita', (req, res) => {
    const id = req.params.idCita;
    const idPacientes = [];
    const pacientesEncontrados = [];

    for (let cita of appData.citas) {
        if (cita.idCita === id) {
            idPacientes.push(cita.idUsuario);
        }
    }

    const pacientes = appData.usuarios.filter(usuario => {
        return usuario.tipoUsuario === "paciente";
    });

    for (let idPaciente of idPacientes) {
        const paciente = pacientes.find(p => p.id === idPaciente);
        if (paciente) {
            pacientesEncontrados.push(paciente);
        }
    }

    if (pacientesEncontrados.length === 0) {
        return res.status(400).json({ error: "Paciente no encontrado" });
    }

    return res.status(200).json({ pacientesEncontrados: pacientesEncontrados });
});

router.get('/citaPaciente/:cita/:medico', (req, res) => {
    const citas = appData.citas.filter(cita => {
        return cita.idUsuario === req.params.id && cita.idMedico === req.params.medico;
    });

    if (citas.length > 0) {
        return res.status(200).json({ citas: citas });
    } else {
        return res.status(400).json({ error: "No se encontraron citas." });
    }
});

module.exports = router;