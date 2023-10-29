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

router.post('/cargarMedicina', (req, res) => {
    const { nombre } = req.body;
    for (let medicina of AppData.medicinas) {
        if (medicina.nombre === nombre) {
            return res.status(400).json({ error: `El nombre \'${nombre}\' ya esta registrado.` });
        }
    }

    const idMedicina = uuidv4();
    AppData.medicinas.push({
        idMedicina,
        ...req.body
    })
    return res.status(200).json({ medicinas: AppData.medicinas });
})


module.exports = router;