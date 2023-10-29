import { useContext } from "react";
import { UserContext } from "../../../App.js";
import { Link } from 'react-router-dom';

function PacienteNav() {
    const usuario = useContext(UserContext);
    return (
        <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="">{usuario.nombre + " " + usuario.apellido}</a>
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
                                <Link to="/paciente">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/paciente/modificarUsuario" >Modificar perfil</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li class="nav-item">
                                <Link to="/paciente/verRecetas">Ver Recetas</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li class="nav-item">
                                <Link to="/paciente/SolicitarCita">Solicitar una Cita</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/paciente/VerCitas">Ver Citas</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li class="nav-item">
                                <Link to="/paciente/comprasMedicamento">Comprar Medicamentos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/paciente/verCompras">Ver Compras</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li>
                                <Link to="/login" >Cerrar Sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default PacienteNav;