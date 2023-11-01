import { useContext } from "react";
import { UserContext } from "../../Rutas.routes";
import { Outlet } from "react-router-dom";
import { PacientesNavbar, EnfermeriaNavbar, MedicosNavbar } from "../hooks/Navbars";

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