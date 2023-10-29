import { useContext } from "react";
import { UserContext } from "../../../App.js";
import { useNavigate } from 'react-router-dom';

function MedicoNav() {
    const usuario = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/');
    }
    const handleInicio = () => {
        navigate('/paciente');
    }
    const handleRecetas = () => {
        navigate('/paciente');
    }
    const handleCitas = () => {
        navigate('/paciente');
    }
    const handlePerfil = () => {
        navigate('/paciente');
    }
    const handleModificar = () => {
        navigate('/paciente/modificarUsuario');
    }

    return (
        <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="">{usuario.nombre} {usuario.apellido}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> Usuario tipo {usuario.tipoUsuario}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="" onClick={handleInicio}>Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="" onClick={handleRecetas}>Ver Recetas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="" onClick={handleCitas}>Solicitar una Cita</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Opciones del Perfil
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="" onClick={handlePerfil}>Ver perfil</a></li>
                                    <li><a class="dropdown-item" onClick={handleModificar}>Modificar perfil</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" onClick={handleLogOut}>Cerrar Sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MedicoNav;