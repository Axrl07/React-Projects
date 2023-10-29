import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useNavigate, Link } from "react-router-dom";

function EnfermeriaNav() {
    const usuario = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate('/login');
    }

    return (
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand"> Enfermería: {usuario.nombre + " " + usuario.apellido}</a>
                <Link class="btn btn-outline-light" to="/enfermeria/Reportes"> Reportes </Link>
                <Link class="btn btn-outline-info" to="/enfermeria"> Gestión de Citas </Link>
                <form class="d-flex" role="search">
                    <button class="btn btn-outline-warning" onClick={handleLogOut}> Cerrar Sesión </button>
                </form>
            </div>
        </nav>
    );
}

export default EnfermeriaNav;