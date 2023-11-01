import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

function Login({setusuario}) {
    const navigate = useNavigate();
    const handleRegistro = () => {
        navigate("/registro");
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const res = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers:{
                'encType': 'multipart/form-data'
            },
            body: formData
        })

        const data = await res.json();

        if(res.status === 200){
            setusuario(data.usuario);
            switch(data.usuario.departamento){
                case 'enfermeria':
                    navigate('/enfermeria');
                    break;
                case 'medicos':
                    navigate('/medicos');
                    break;
                default:
                    navigate('/pacientes');
                    break;
            }
        } else {
            alert(data.error)
        }
    }

    return (
        <>
            <form onSubmit={handleLogin} className={styles.formContainer} encType='multipart/form-data'>
                <div>
                    <h1 className={styles.h1}>Inicio de sesión</h1>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="addon-wrapping">Usuario</span>
                    <input type="text" class="form-control" placeholder="Ingrese su nombre de usuario" aria-label="Username" aria-describedby="addon-wrapping" name="nombreUsuario" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="addon-wrapping">Contraseña</span>
                    <input type="pwd" class="form-control" placeholder="Ingrese su contraseña" aria-label="Username" aria-describedby="addon-wrapping" name="clave"/>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-success"> Inicio de Sesión </button>
                    <button type="button" onClick={handleRegistro} class="btn btn-warning"> Registrarse </button>
                </div>
            </form>
        </>
    );

}

export default Login;