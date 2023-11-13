const express = require("express");
const appData = require("../appData.js");

const router = express.Router();

router.get('/citasDoctor/:id', (req, res) => {
    id = req.params.id;
    const citas = appData.citas.filter(cita => {
        if(cita.idMedico === id & cita.estado === "aceptada"){
            return cita;
        }
    });

    if (citas.length > 0) {
        return res.status(200).json({ citas: citas });
    } else {
        return res.status(400).json({ error: "No se encontraron pacientes." });
    }
});

router.post('/crearReceta', (req, res) => {
    const { usuario, cita, paciente, descripcion, precioConsulta } = req.body;
    let cambio = false;

    for (let c of appData.citas) {
        if (c.idCita === cita.idCita & paciente.id === c.idUsuario) {
            c.estado = "finalizada";
            cambio = true;
            break;
        }
    }

    if (cambio === true) {
        const receta = {
            idCita: cita.idCita,
            fecha: cita.fecha,
            hora: cita.hora,
            padecimiento: cita.motivo,
            descripcion: descripcion,
            precioConsulta: precioConsulta,
            idMedico: usuario.id,
        };
        
        appData.recetas.push(receta);
        return res.status(200).json({ msg: "La receta fue creada con exito y los datos de la cita fueron actualizados." });
    }else{
        return res.status(400).json({ error: "ha ocurrido un error al crear la receta y durante la modificación de datos." });
    }
})


module.exports = router;