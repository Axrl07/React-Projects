import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserLayout from './components/userLayout/userLayout';
import Modificar from './components/modificar/modificar';

export const UserContext = React.createContext();

function App() {
    const [usuario, setUsuario] = useState({
        id: "e393b1cc-6a9d-4359-958b-dc46029c5912",
        nombre: "Melisa Mishel",
        apellido: "Melgar Rivera",
        usuario: "p.melisa",
        genero: 'f',
        fechaNacimiento: "10-04-1980",
        clave: "123",
        telefono: "1234 1234",
        tipoUsuario: "paciente"
    });

    return (
        <UserContext.Provider value={usuario} >
            <Routes>
                // ruta login
                <Route path="/" element={<Login setUsuario={setUsuario} />} />
                <Route path="/login" element={<Login setUsuario={setUsuario} />} />
                <Route path="/registro" element={<Register />} />

                // ruta paciente
                <Route path="/paciente" element={<UserLayout />}>
                    <Route path="modificarUsuario" element={<Modificar />} />
                </Route>

                // ruta enfermeria
                <Route path="/enfermeria" element={<UserLayout />} />

                // ruta medico
                <Route path="/medico" element={<UserLayout />} />
            </Routes>
        </UserContext.Provider>
    );
}

export default App;