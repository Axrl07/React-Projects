import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserLayout from './components/userLayout/userLayout';

// pacientes
import Modificar from './components/userLayout/pacientes/modificar';
import VerUsuario from './components/userLayout/pacientes/verUsuario';
import VerRecetas from './components/userLayout/pacientes/verRecetas';
import VerCitas from './components/userLayout/pacientes/verCitas';
import SolicitarCita from './components/userLayout/pacientes/solicitarCita';
import ComprasMedicamento from './components/userLayout/pacientes/comprasMedicamento';
import VerCompras from './components/userLayout/pacientes/verCompras';

//enfermeria
import GestionCitas from './components/userLayout/enfermeria/gestionCitas';
import Reportes from './components/userLayout/enfermeria/reportes';

// medico
import AtencionCitas from './components/userLayout/medico/atencionCitas';

// exportando contexto para usar en los componentes
export const UserContext = React.createContext();

// componente principal
function App() {
    const [usuario, setUsuario] = useState(null);

    return (
        <UserContext.Provider value={usuario} >
            <Routes>
                // ruta login
                <Route path="/" element={<Login setUsuario={setUsuario} />} />
                <Route path="/login" element={<Login setUsuario={setUsuario} />} />
                <Route path="/registro" element={<Register />} />

                // rutas paciente
                <Route path="/paciente" element={<UserLayout />}>
                    <Route index element={<VerUsuario />} />
                    <Route path="modificarUsuario" element={<Modificar setUsuario={setUsuario} />} />
                    <Route path="verRecetas" element={<VerRecetas />} />
                    <Route path="VerCitas" element={<VerCitas />} />
                    <Route path="SolicitarCita" element={<SolicitarCita />} />
                    <Route path="comprasMedicamento" element={<ComprasMedicamento />} />
                    <Route path="verCompras" element={<VerCompras />} />
                </Route>

                // rutas enfermeria
                <Route path="/enfermeria" element={<UserLayout />}>
                    <Route index element={<GestionCitas />} />
                    <Route path="Reportes" element={<Reportes />} />
                </Route>

                // rutas medico
                <Route path="/medico" element={<UserLayout />}>
                    <Route index element={<AtencionCitas />} />
                </Route>
            </Routes>
        </UserContext.Provider>
    );
}

export default App;
