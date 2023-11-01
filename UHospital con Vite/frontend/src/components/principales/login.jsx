import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

function Login() {
    const navigate = useNavigate();
    const handleRegistro = () => {
        navigate("/registro");
    }
    return (
        <>
            <form className={styles.formContainer} encType='text/plain'>
                <div>
                    <h1 className={styles.h1}>Inicio de sesión</h1>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="addon-wrapping">Usuario</span>
                    <input type="text" class="form-control" placeholder="Ingrese su nombre de usuario" aria-label="Username" aria-describedby="addon-wrapping" name="userName" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="addon-wrapping">Contraseña</span>
                    <input type="pwd" class="form-control" placeholder="Ingrese su contraseña" aria-label="Username" aria-describedby="addon-wrapping" name="userPwd"/>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-success"> Inicio de Sesión </button>
                </div>
            </form>
            <div className={styles.container}>
                <div class="d-grid gap-2">
                    <button onClick={handleRegistro} class="btn btn-warning"> Registrarse </button>
                </div>
            </div>
        </>
    );

}

export default Login;