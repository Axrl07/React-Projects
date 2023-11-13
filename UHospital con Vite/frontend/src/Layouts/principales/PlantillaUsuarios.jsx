import { useContext } from "react";
import { UserContext } from "../../App";
import { Outlet } from "react-router-dom";
import { PacientesNavbar, EnfermeriaNavbar, MedicosNavbar } from "../../components/Navbars";

function PlantillaUsuarios() {
    const usuario = useContext(UserContext);
    let navbar = <PacientesNavbar />;
    switch (usuario.departamento) {
        case "enfermeria":
            navbar = <EnfermeriaNavbar />;
            break;
        case "medicos":
            navbar = <MedicosNavbar />;
            break;
    }
    return ( 
        <>
            {navbar}
            <Outlet />
        </>
    );
}

export default PlantillaUsuarios;