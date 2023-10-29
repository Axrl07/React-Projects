import { useContext } from 'react';
import { UserContext } from '../../../App';
import styles from "./enfermeraNav.module.css";
import { Link } from "react-router-dom";

function EnfermeriaNav() {
    const usuario = useContext(UserContext);
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/enfermeria" > {usuario.apellido} </Link>
                </li>
                <li>
                    <Link to="/enfermeria/gestionarCitas">Gestionar Citas</Link>
                </li>
                <li>
                    <Link to="/login">Cerrar Sesión</Link>
                </li>
            </ul>
        </nav>
    );
}

export default EnfermeriaNav;