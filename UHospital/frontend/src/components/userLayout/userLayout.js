import { useContext } from "react";
import { UserContext } from "../../App.js";
import PacienteNav from '../navbars/pacienteNav/pacienteNav';
import MedicoNav from '../navbars/medicoNav/medicoNav';
import EnfermeriaNav from '../navbars/enfermeriaNav/enfermeraNav';
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
