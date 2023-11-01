import { Routes, Route, Router } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './components/principales/Login';
import Registro from './components/principales/Registro';

export const UserContext = React.createContext();

// paciente
import PlantillaUsuarios from './components/principales/PlantillaUsuarios';
import VerUsuario from './components/hooks/VerUsuario';
import Modificar from './components/hooks/Modificar';

function Rutas() {

    const [usuario, setusuario] = useState({
        id: "dd8cc520-58fc-45b9-a198-9e18c4f4cb9f",
        nombre: "Maria Fernanda",
        apellido: "Choc Choc",
        usuario: "f.maria",
        genero: "femenino",
        fechaNacimiento: "05-01-2000",
        clave: "123",
        telefono: "9898 0001",
        departamento: "enfermeria"
    });

    return (
        <UserContext.Provider value={usuario}>
            <Routes>
                <Route path="/" element={<Login setusuario={setusuario} />} />
                <Route path="/login" element={<Login setusuario={setusuario} />} />
                <Route path="/registro" element={<Registro />} />

                <Route path='/pacientes' element={<PlantillaUsuarios />}>
                    <Route index element={<VerUsuario />} />
                    <Route path="ActualizarDatos" element={<Modificar setUsuario={setusuario} />} />
                    {/* <Route path="verRecetas" element={<VerRecetas />} />
                    <Route path="VerCitas" element={<VerCitas />} />
                    <Route path="SolicitarCita" element={<SolicitarCita />} />
                    <Route path="comprasMedicamento" element={<ComprasMedicamento />} />
                    <Route path="verCompras" element={<VerCompras />} /> */}
                </Route>
                <Route path='/enfermeria' element={<PlantillaUsuarios />}>
                    <Route index element={<VerUsuario />} />
                    <Route path="ActualizarDatos" element={<Modificar setUsuario={setusuario} />} />
                    {/* <Route index element={<GestionCitas />} />
                    <Route path="Reportes" element={<Reportes />} /> */}
                </Route>
                <Route path='/medicos' element={<PlantillaUsuarios />}>
                    <Route index element={<VerUsuario />} />
                    <Route path="ActualizarDatos" element={<Modificar setUsuario={setusuario} />} />
                    {/* <Route index element={<AtencionCitas />} /> */}
                </Route>
                
            </Routes>
        </UserContext.Provider>
    )
}

export default Rutas;