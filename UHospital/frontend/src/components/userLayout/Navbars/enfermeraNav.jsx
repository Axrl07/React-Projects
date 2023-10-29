import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useNavigate } from "react-router-dom";

function EnfermeriaNav() {
    const usuario = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate('/login');
    }

    return (
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand">{usuario.nombre + " " + usuario.apellido}</a>
                <form class="d-flex" role="search">
                    <button class="btn btn-outline-warning" onClick={handleLogOut}> Cerrar Sesión </button>
                </form>
            </div>
        </nav>
    );
}

export default EnfermeriaNav;