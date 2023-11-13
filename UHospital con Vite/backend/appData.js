usuarios = [
    // medicos
    {
        id: "09a70d0a-4f72-4538-90ff-3bf1bd4191a2",
        nombre: "Angel Enrique",
        apellido: "Alvarado Ruiz",
        usuario: "angel",
        genero: "masculino",
        clave: "123",
        fechaNacimiento: "01-05-2000",
        telefono: "1010 0001",
        departamento: "medicos"
    },
    {
        id: "b57dbdf2-1834-4758-ac5b-46ff278978fd",
        nombre: "Samantha Abigail",
        apellido: "Gonzales Milla",
        usuario: "samantha",
        genero: "femenino",
        fechaNacimiento: "20-06-1999",
        clave: "123",
        telefono: "1010 0002",
        departamento: "medicos"
    },
    // enfermeria
    {
        id: "dd8cc520-58fc-45b9-a198-9e18c4f4cb9f",
        nombre: "Maria Fernanda",
        apellido: "Choc Choc",
        usuario: "maria",
        genero: "femenino",
        fechaNacimiento: "05-01-2000",
        clave: "123",
        telefono: "9898 0001",
        departamento: "enfermeria"
    },
    {
        id: "c66b8a2c-fdb3-492d-a1b6-210f7c1b8459",
        nombre: "Jose Daniel",
        apellido: "Alvarado Fajardo",
        usuario: "jose",
        genero: "masculino",
        fechaNacimiento: "31-12-1999",
        clave: "123",
        telefono: "9898 0002",
        departamento: "enfermeria"
    },
    // pacientes
    {
        id: "e393b1cc-6a9d-4359-958b-dc46029c5912",
        nombre: "Melisa Mishel",
        apellido: "Melgar Rivera",
        usuario: "melisa",
        genero: "femenino",
        fechaNacimiento: "10-04-1980",
        clave: "123",
        telefono: "1234 1234",
        departamento: "pacientes"
    },
    {
        id: "09aaad00-4f72-4538-90ff-3bf1bd4191a2",
        nombre: "Juan Luis",
        apellido: "Guerra",
        usuario: "juan",
        genero: "masculino",
        clave: "luis",
        fechaNacimiento: "01-05-2000",
        telefono: "2222 0000",
        departamento: "pacientes"
    }
]

citas = [
    {
        idCita: "19af3107-d6db-492a-9c2e-bf105e7764c9",
        fecha: "2021-05-01",
        hora: "10:00",
        motivo: "Dolor de cabeza",
        estado: "finalizada",
        idUsuario: "e393b1cc-6a9d-4359-958b-dc46029c5912",
        idMedico: "09a70d0a-4f72-4538-90ff-3bf1bd4191a2"
    },
    {
        idCita: "19af3107-d6db-492a-9c2e-bf105e7884c9",
        fecha: "2021-07-03",
        hora: "12:00",
        motivo: "acidez estomacal",
        estado: "finalizada",
        idUsuario: "e393b1cc-6a9d-4359-958b-dc46029c5912",
        idMedico: "b57dbdf2-1834-4758-ac5b-46ff278978fd"
    },
    {
        idCita: "19af3107-d6db-jklñ-9c2e-bf105e7764c9",
        fecha: "2021-05-01",
        hora: "10:00",
        motivo: "diarrea",
        estado: "aceptada",
        idUsuario: "e393b1cc-6a9d-4359-958b-dc46029c5912",
        idMedico: "b57dbdf2-1834-4758-ac5b-46ff278978fd"
    },
    {
        idCita: "19af3107-fdaa-492a-9c2e-bf105e7884c9",
        fecha: "2021-07-03",
        hora: "12:00",
        motivo: "gripe",
        estado: "aceptada",
        idUsuario: "e393b1cc-6a9d-4359-958b-dc46029c5912",
        idMedico: "b57dbdf2-1834-4758-ac5b-46ff278978fd"
    }
]

pedidos = [
    {
        "idPedido": "768df68a-f5fa-4f84-9ba6-2d9f82f022d9",
        "fecha": "2023-10-28",
        "idUsuario": "e393b1cc-6a9d-4359-958b-dc46029c5912",
        "totalCompras": 753.75,
        "compras": [
            {
                "nombreMedicamento": "Ivermectina",
                "precioUnitario": 12.5,
                "cantidadComprada": 50,
                "subtotal": 625
            },
            {
                "nombreMedicamento": "Aspirina",
                "precioUnitario": 25.75,
                "cantidadComprada": 5,
                "subtotal": 128.75
            }
        ]
    },
    {
        "idPedido": "eff085d6-34c2-4a14-bbe9-09bba29cafed",
        "fecha": "2023-10-28",
        "idUsuario": "e393b1cc-6a9d-4359-958b-dc46029c5912",
        "totalCompras": 1248.75,
        "compras": [
            {
                "nombreMedicamento": "Oseltamivir",
                "precioUnitario": 25.75,
                "cantidadComprada": 45,
                "subtotal": 1158.75
            },
            {
                "nombreMedicamento": "Dexametasona",
                "precioUnitario": 15,
                "cantidadComprada": 6,
                "subtotal": 90
            }
        ]
    }
]

medicamentos = [
    {
        idMedicamento: "6d58fdc6-959e-4e21-bc27-68c3878622fd",
        nombre: "Ivermectina",
        descripcion: "Es un compuesto medicinal que su utiliza en forma de comprimido o gotas que se ingieren por la vía oral.",
        precio: 12.50,
        cantidadDisponible: 50,
        cantidadVendida: 20
    },
    {
        idMedicamento: "191b1059-876a-4a68-a83e-3624cb568e09",
        nombre: "Oseltamivir",
        descripcion: "Es un antiviral muy utilizado para tratar la gripe común.",
        precio: 25.75,
        cantidadDisponible: 45,
        cantidadVendida: 0
    },
    {
        idMedicamento: "c762244a-8d1e-4e6b-949a-3a0f90dbd40a",
        nombre: "Dexametasona",
        descripcion: "Es un medicamento potente similar a las hormonas de asteroides, se utiliza como antiinflamatorio para el tratamiento de inflamaciones o enfermedades autoinmunes.",
        precio: 15.00,
        cantidadDisponible: 40,
        cantidadVendida: 15
    },
    {
        idMedicamento: "e454052a-2387-444c-9f91-25f2071c9b2e",
        nombre: "Simvastatina",
        descripcion: "Fue desarrollada por Merck y reduce el colesterol y los triglicéridos que hay en la sangre.",
        precio: 12.50,
        cantidadDisponible: 35,
        cantidadVendida: 0
    },
    {
        idMedicamento: "90eac427-5285-4c51-91d6-62e5c84ce9a0",
        nombre: "Aspirina",
        descripcion: "Es un ácido acetil-salicílico que reduce la mayoría de los malestares y los más comunes son: dolor, fiebre e inflamación.",
        precio: 25.75,
        cantidadDisponible: 5,
        cantidadVendida: 0
    },
    {
        idMedicamento: "f853a598-e971-42a8-8908-533905cdbf02",
        nombre: "Omeprazol",
        descripcion: "Cura la acidez del estómago reduciendo  las úlceras existentes en el esófago, estómago y duodeno.",
        precio: 15.00,
        cantidadDisponible: 10,
        cantidadVendida: 8
    },
    {
        idMedicamento: "dc1d06f7-0cb9-44d2-95c7-193652bafe8d",
        nombre: "Ramipril",
        descripcion: "Trata la presión arterial alta y debe ser consumida con receta médica.",
        precio: 12.50,
        cantidadDisponible: 15,
        cantidadVendida: 0
    },
    {
        idMedicamento: "0f07a448-2167-4752-b507-6cb805ae526c",
        nombre: "Lexotiroxina sódica",
        descripcion: "Funge como una versión artificial de la hormono tiroxina que aumenta la tasa metabólica de las células de todos los tejidos del organismo y mantiene la función cerebral.",
        precio: 25.75,
        cantidadDisponible: 20,
        cantidadVendida: 0
    },
    {
        idMedicamento: "c85d141e-ee22-4f7e-a8e1-6cf1c908bbe7",
        nombre: "Paracetamol",
        descripcion: "Se ocupa para reducir los malestares de: fiebres, dolor de cabeza, dolores musculares, artritis, dolor de espalda o resfriados.",
        precio: 12.50,
        cantidadDisponible: 30,
        cantidadVendida: 100
    }
]

recetas = [
    {
        idReceta: "03e07033-fb5f-49fc-a2ca-768bf9c8759a",
        fecha: "2021-05-01",
        hora: "10:00",
        padecimiento: "Dolor de cabeza",
        descripcion: "Tomar 2 pastillas de Paracetamol",
        precioConsulta: 25.00,
        idCita: "19af3107-d6db-492a-9c2e-bf105e7764c9",
        idMedico: "09a70d0a-4f72-4538-90ff-3bf1bd4191a2"
    },
    {
        idReceta: "03e07033-fb5f-49fc-a2ca-768bf9c8pp8a",
        fecha: "2021-07-02",
        hora: "11:00",
        padecimiento: "acidez estomacal",
        descripcion: "Tomar 3 Omeprazol",
        precioConsulta: 30.00,
        idCita: "19af3107-d6db-492a-9c2e-bf105e7884c9",
        idMedico: "b57dbdf2-1834-4758-ac5b-46ff278978fd"
    }
]

module.exports = {
    usuarios,
    pedidos,
    medicamentos,
    citas,
    recetas
}