import { useContext } from "react";
import { UserContext } from "../../../App.js";
import { useNavigate } from 'react-router-dom';

function MedicoNav() {
    const usuario = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate('/login');
    }

    return(
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand"> Medico: {usuario.nombre + " " + usuario.apellido}</a>
                <form class="d-flex" role="search">
                    <button class="btn btn-outline-warning" onClick={handleLogOut}> Cerrar Sesión </button>
                </form>
            </div>
        </nav>
    );
}

export default MedicoNav;