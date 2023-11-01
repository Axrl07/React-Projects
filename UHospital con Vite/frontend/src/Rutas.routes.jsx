import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/principales/login';
import Registro from './components/principales/registro';

function Rutas() {

    const [usuario, setusuario] = useState(null);

    return (
        <Routes>
            <Route path="/" element={<Login setusuario={setusuario} />} />
            <Route path="/login" element={<Login setusuario={setusuario} />} />
            <Route path="/registro" element={<Registro setusuario={setusuario} />} />
            
        </Routes>
    )
}

export default Rutas;