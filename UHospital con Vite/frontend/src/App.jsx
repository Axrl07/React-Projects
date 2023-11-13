import './styles/App.css';
import { Routes, Route, Router } from 'react-router-dom';
import React, { useState } from 'react';

// componentes principales
import Login from './Layouts/principales/Login';
import Registro from './Layouts/principales/Registro';
import PlantillaUsuarios from './Layouts/principales/PlantillaUsuarios';
import VerUsuario from './Layouts/principales/VerUsuario';
import Modificar from './Layouts/principales/Modificar';

export const UserContext = React.createContext();

// componentes de pacientes
import VerRecetas from './Layouts/pacientes/VerRecetas';
import VerCitas from './Layouts/pacientes/VerCitas';
import SolicitarCita from './Layouts/pacientes/SolicitarCita';
import ComprasMedicamento from './Layouts/pacientes/ComprasMedicamento';
import VerCompras from './Layouts/pacientes/VerCompras';

// componentes de enfermeria
import GestionCitas from './Layouts/enfermeria/GestionarCitas';
import Reportes from './Layouts/enfermeria/Reportes';

// componentes de medicos
import AtencionCitas from './Layouts/medicos/AtencionCitas';

function App() {
  const [usuario, setusuario] = useState(
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
    }
  );

  return (
    <UserContext.Provider value={usuario}>
      <Routes>
        <Route path="/" element={<Login setusuario={setusuario} />} />
        <Route path="/login" element={<Login setusuario={setusuario} />} />
        <Route path="/registro" element={<Registro />} />

        <Route path='/pacientes' element={<PlantillaUsuarios />}>
          <Route index element={<VerUsuario />} />
          <Route path="actualizarDatos" element={<Modificar setusuario={setusuario} />} />
          <Route path="verRecetas" element={<VerRecetas />} />
          <Route path="verCitas" element={<VerCitas />} />
          <Route path="solicitarCita" element={<SolicitarCita />} />
          <Route path="comprasMedicamento" element={<ComprasMedicamento />} />
          <Route path="verCompras" element={<VerCompras />} />
        </Route>

        <Route path='/enfermeria' element={<PlantillaUsuarios />}>
          <Route index element={<VerUsuario />} />
          <Route path="actualizarDatos" element={<Modificar setusuario={setusuario} />} />
          <Route path="gestionarCitas" element={<GestionCitas />} />
          <Route path="reportes" element={<Reportes />} />
        </Route>

        <Route path='/medicos' element={<PlantillaUsuarios />}>
          <Route index element={<VerUsuario />} />
          <Route path="actualizarDatos" element={<Modificar setusuario={setusuario} />} />
          <Route path="atencionCitas" element={<AtencionCitas />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  )
}

export default App;
