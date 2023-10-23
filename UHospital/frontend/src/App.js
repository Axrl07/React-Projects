import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserLayout from './components/userLayout/userLayout';

export const UserContext = React.createContext();

function App() {
    const [usuario, setUsuario] = useState(null);

    return (
        <UserContext.Provider value={usuario} >
            <Routes>
                // ruta login
                <Route path="/" element={<Login setUsuario={setUsuario} />} />
                <Route path="/login" element={<Login setUsuario={setUsuario} />} />
                <Route path="/registro" element={<Register />} /> 

                // ruta paciente
                <Route path="/paciente" element={<UserLayout />} />

                // ruta enfermeria
                <Route path="/enfermeria" element={<UserLayout />} />

                // ruta medico
                <Route path="/medico" element={<UserLayout />} />
            </Routes>
        </UserContext.Provider>
    );
}

export default App;