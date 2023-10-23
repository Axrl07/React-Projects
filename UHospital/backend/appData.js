usuarios = [
    // medicos
    {
        id: "09a70d0a-4f72-4538-90ff-3bf1bd4191a2",
        nombre: "Angel Enrique",
        apellido: "Alvarado Ruiz",
        usuario: "angel",
        genero: 'm',
        clave: "123",
        fechaNacimiento: "01-05-2000",
        telefono: "1010 0001",
        tipoUsuario: "medico"
    },
    {
        id: "b57dbdf2-1834-4758-ac5b-46ff278978fd",
        nombre: "Samantha Abigail",
        apellido: "Gonzales Milla",
        usuario: "m.samantha",
        genero: 'f',
        fechaNacimiento: "20-06-1999",
        clave: "medicoSamantha",
        telefono: "1010 0002",
        tipoUsuario: "medico"
    },
    // enfermeria
    {
        id: "dd8cc520-58fc-45b9-a198-9e18c4f4cb9f",
        nombre: "Maria Fernanda",
        apellido: "Choc Choc",
        usuario: "f.maria",
        genero: 'f',
        fechaNacimiento: "05-01-2000",
        clave: "enfermeriaMaria",
        telefono: "9898 0001",
        tipoUsuario: "enfermeria"
    },
    {
        id: "c66b8a2c-fdb3-492d-a1b6-210f7c1b8459",
        nombre: "Jose Daniel",
        apellido: "Alvarado Fajardo",
        usuario: "f.jose",
        genero: 'm',
        fechaNacimiento: "31-12-1999",
        clave: "123",
        telefono: "9898 0002",
        tipoUsuario: "enfermeria"
    },
    // pacientes
    {
        id: "e393b1cc-6a9d-4359-958b-dc46029c5912",
        nombre: "Melisa Mishel",
        apellido: "Melgar Rivera",
        usuario: "p.melisa",
        genero: 'f',
        fechaNacimiento: "10-04-1980",
        clave: "123",
        telefono: "1234 1234",
        tipoUsuario: "paciente"
    }
]

cita = [
    {
        idCita: "19af3107-d6db-492a-9c2e-bf105e7764c9",
        fecha: "2021-05-01",
        hora: "10:00",
        motivo: "Dolor de cabeza",
        estado: "pendiente",
        idUsuario: "e393b1cc-6a9d-4359-958b-dc46029c5912"
    }
]

pedidos = [
    {
        idPedido: "7f33e315-7e6e-4d11-9380-60119e11fc4b",
        fecha: "2021-05-01",
        registrado: false,
        idUsuario: "e393b1cc-6a9d-4359-958b-dc46029c5912"
    }
]

medicamentos = [
    {
        idMedicamento: "6d58fdc6-959e-4e21-bc27-68c3878622fd",
        nombre: "Ivermectina",
        descripcion: "Es un compuesto medicinal que su utiliza en forma de comprimido o gotas que se ingieren por la vía oral.",
        precio: 12.50,
        cantidadDisponible: 20
    },
    {
        idMedicamento: "191b1059-876a-4a68-a83e-3624cb568e09",
        nombre: "Oseltamivir",
        descripcion: "Es un antiviral muy utilizado para tratar la gripe común.",
        precio: 25.75,
        cantidadDisponible: 10
    },
    {
        idMedicamento: "c762244a-8d1e-4e6b-949a-3a0f90dbd40a",
        nombre: "Dexametasona",
        descripcion: "Es un medicamento potente similar a las hormonas de asteroides, se utiliza como antiinflamatorio para el tratamiento de inflamaciones o enfermedades autoinmunes.",
        precio: 15.00,
        cantidadDisponible: 15
    },
    {
        idMedicamento: "e454052a-2387-444c-9f91-25f2071c9b2e",
        nombre: "Simvastatina",
        descripcion: "Fue desarrollada por Merck y reduce el colesterol y los triglicéridos que hay en la sangre.",
        precio: 12.50,
        cantidadDisponible: 20
    },
    {
        idMedicamento: "90eac427-5285-4c51-91d6-62e5c84ce9a0",
        nombre: "Aspirina",
        descripcion: "Es un ácido acetil-salicílico que reduce la mayoría de los malestares y los más comunes son: dolor, fiebre e inflamación.",
        precio: 25.75,
        cantidadDisponible: 10
    },
    {
        idMedicamento: "f853a598-e971-42a8-8908-533905cdbf02",
        nombre: "Omeprazol",
        descripcion: "Cura la acidez del estómago reduciendo  las úlceras existentes en el esófago, estómago y duodeno.",
        precio: 15.00,
        cantidadDisponible: 15
    },
    {
        idMedicamento: "dc1d06f7-0cb9-44d2-95c7-193652bafe8d",
        nombre: "Ramipril",
        descripcion: "Trata la presión arterial alta y debe ser consumida con receta médica.",
        precio: 12.50,
        cantidadDisponible: 20
    },
    {
        idMedicamento: "0f07a448-2167-4752-b507-6cb805ae526c",
        nombre: "Lexotiroxina sódica",
        descripcion: "Funge como una versión artificial de la hormono tiroxina que aumenta la tasa metabólica de las células de todos los tejidos del organismo y mantiene la función cerebral.",
        precio: 25.75,
        cantidadDisponible: 10
    },
    {
        idMedicamento: "c7608f44-07fd-4d7a-9f45-132d829588b3",
        nombre: "Amlodipina",
        descripcion: "Mejora el flujo de la sangre, mejora la presión arterial, además trata la hipertensión y debe utilizarse con receta médica.",
        precio: 15.00,
        cantidadDisponible: 15
    },
    {
        idMedicamento: "c85d141e-ee22-4f7e-a8e1-6cf1c908bbe7",
        nombre: "Paracetamol",
        descripcion: "Se ocupa para reducir los malestares de: fiebres, dolor de cabeza, dolores musculares, artritis, dolor de espalda o resfriados.",
        precio: 12.50,
        cantidadDisponible: 20
    }
]

medicamentoPedido = [
    {
        idMedicamentoPedido: "68410f29-e8b9-4046-a2f5-77b6d482bd6a",
        cantidad: 2,
        idMedicamento: "c85d141e-ee22-4f7e-a8e1-6cf1c908bbe7",
        idPedido: "7f33e315-7e6e-4d11-9380-60119e11fc4b"
    }
]

receta = [
    {
        idReceta: "03e07033-fb5f-49fc-a2ca-768bf9c8759a",
        fecha: "2021-05-01",
        hora: "10:00",
        padecimiento: "Dolor de cabeza",
        descripcion: "Tomar 2 pastillas de Paracetamol",
        precioConsulta: 25.00,
        idCita: "19af3107-d6db-492a-9c2e-bf105e7764c9",
        idMedico: "09a70d0a-4f72-4538-90ff-3bf1bd4191a2"
    }
]

module.exports = {
    usuarios,
    pedidos,
    medicamentos,
    medicamentoPedido,
    cita,
    receta
}