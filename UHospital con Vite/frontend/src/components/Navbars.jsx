import { useContext} from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbars.module.css';

export const PacientesNavbar = () => {
    const usuario = useContext(UserContext);
    return (
        <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">departamento de {usuario.departamento}</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">{usuario.nombre + " " + usuario.apellido}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link className={styles.link} to="/pacientes">Inicio</Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/pacientes/ActualizarDatos" >Modificar perfil</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li class="nav-item">
                                <Link className={styles.link} to="/pacientes/verRecetas">Ver Recetas</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li class="nav-item">
                                <Link className={styles.link} to="/pacientes/SolicitarCita">Solicitar una Cita</Link>
                            </li>
                            <li class="nav-item">
                                <Link className={styles.link} to="/pacientes/VerCitas">Ver Citas</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li class="nav-item">
                                <Link className={styles.link} to="/pacientes/comprasMedicamento">Comprar Medicamentos</Link>
                            </li>
                            <li class="nav-item">
                                <Link className={styles.link} to="/pacientes/verCompras">Ver Compras</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li>
                                <Link className={styles.link} to="/login" >Cerrar Sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export const EnfermeriaNavbar = () => {
    const usuario = useContext(UserContext);
    return (
        <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">departamento de {usuario.departamento}</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">{usuario.nombre + " " + usuario.apellido}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link className={styles.link} to="/enfermeria">Inicio</Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/enfermeria/ActualizarDatos" >Modificar perfil</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li class="nav-item">
                                <Link className={styles.link} to="/enfermeria/gestionarCitas">Gestión de Citas</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li class="nav-item">
                                <Link className={styles.link} to="/enfermeria/reportes">Reportes</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li>
                                <Link className={styles.link} to="/login" >Cerrar Sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export const MedicosNavbar = () => {
    const usuario = useContext(UserContext);
    return (
        <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">departamento de {usuario.departamento}</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">{usuario.nombre + " " + usuario.apellido}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link className={styles.link} to="/medicos">Inicio</Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/medicos/ActualizarDatos" >Modificar perfil</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li class="nav-item">
                                <Link className={styles.link} to="/medicos/atencionCitas">Atender Citas</Link>
                            </li>
                            <li><hr class="divider" /></li>
                            <li>
                                <Link className={styles.link} to="/login" >Cerrar Sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
