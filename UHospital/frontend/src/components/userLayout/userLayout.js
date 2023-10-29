import { useContext } from "react";
import { UserContext } from "../../App.js";
import PacienteNav from './Navbars/pacienteNav.jsx';
import MedicoNav from './Navbars/medicoNav.jsx';
import EnfermeriaNav from './Navbars/enfermeraNav.jsx';
import { Outlet } from "react-router-dom";

function UserLayout() {

    const usuario = useContext(UserContext);
    let navbar = <PacienteNav />;
    switch(usuario.tipoUsuario){
        case "medico":
            navbar = <MedicoNav />;
            break;
        case "enfermeria":
            navbar = <EnfermeriaNav />;
            break;
    };


    return (
        <>
            {navbar}
            < Outlet />
        </>
    );
}

export default UserLayout;
