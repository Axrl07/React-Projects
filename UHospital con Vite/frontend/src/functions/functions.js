
export const citasMedicos = (estado,id, listado) =>{
    let nombre = "";
    if(estado === "finalizada"){
        listado.forEach(medico => {
            if(medico.id === id){
                nombre = `${medico.nombre} ${medico.apellido}`;
            }
        });
        return `la cita fue atendida por: ${nombre}`;
    }else if(estado === "pendiente"){
        return "pendiente de asignación al departamento de medicos";
    }else if(estado === "aceptada"){
        listado.forEach(medico => {
            if(medico.id === id){
                nombre = `${medico.nombre} ${medico.apellido}`;
            }
        });
        return `la cita fue aceptada y asignada a: ${nombre}`;
    }else{
        return "la cita fue rechazada";
    }
}

export const nombreCompleto = (id, listado) => {
    let nombre = "";
    listado.forEach(usuario => {
        if(usuario.id === id){
            nombre = `${usuario.nombre} ${usuario.apellido}`;
        }
    });
    return nombre;
}

export const obtenerUsuario = (id, listado) => {
    let usuario = {};
    listado.forEach(u => {
        if(u.id === id){
            usuario = u;
        }
    });
    return usuario;
}

export const obtenerCita = (id, listado) => {
    let cita = {};
    listado.forEach(c => {
        if(c.idCita === id){
            cita = c;
        }
    });
    return cita;
}