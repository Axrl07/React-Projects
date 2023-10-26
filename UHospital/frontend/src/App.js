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
import CitasPaciente from './components/userLayout/pacientes/citasPaciente';
import ComprasMedicamento from './components/userLayout/pacientes/comprasMedicamento';

// enfermeria
// import GestionCitas from './components/userLayout/enfermeria/gestionCitas';

// medico
// import AtencionCitas from './components/userLayout/medico/atencionCitas';
// import TrabajandoCita from './components/userLayout/medico/trabajandoCita';

// exportando contexto para usar en los componentes
export const UserContext = React.createContext();

// componente principal
function App() {
    const [usuario, setUsuario] = useState(null);
    const [productos, setProductos] = useState([])
    const [total, setTotal] = useState(0)
    const [contador, setContador] = useState(0)

    return (
        <UserContext.Provider value={usuario} >
            <Routes>
                // ruta login
                <Route path="/" element={<Login setUsuario={setUsuario} />} />
                <Route path="/login" element={<Login setUsuario={setUsuario} />} />
                <Route path="/registro" element={<Register />} />

                // ruta paciente
                <Route path="/paciente" element={<UserLayout />}>
                    <Route index element={<VerUsuario />} />
                    <Route path="modificarUsuario" element={<Modificar />} />
                    <Route path="verRecetas" element={<VerRecetas />} />
                    <Route path="citasPaciente" element={<CitasPaciente />} />
                    <Route path="comprasMedicamento" element={<ComprasMedicamento />} />
                </Route>

                // ruta enfermeria
                <Route path="/enfermeria" element={<UserLayout />}>
                    {/* 
                    <Route path="gestionCitas" element={<GestionCitas />} /> */}
                </Route>

                // ruta medico
                <Route path="/medico" element={<UserLayout />}>
                    {/* <Route path="atencionCitas" element={<AtencionCitas />} /> */}
                    {/* <Route path="trabajandoCita" element={<TrabajandoCita />} */}
                </Route>
            </Routes>
        </UserContext.Provider>
    );
}

export default App;
