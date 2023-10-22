import styles from './Login.module.css';

function Login(props) {
    const handleIngresar = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'enctype': 'multipart/form-data'
            },
            body: formData
        })

        const data = await response.json();
        if (response.status !== 200) {
            alert(data.error);
            return;
        }else{
            alert("Bienvenido");
        }

        /*
        props.setUser(data.user);
        switch (data.user.tipo) {
            case "paciente":
                break;
            case "medico":
                break;
            case "enfermeria":
        } */
        
    }

    return (
        <form onSubmit={handleIngresar} className={styles.formContainer}>
            <div>
                <h1 className={styles.h1}> Inicio de sesión </h1>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="addon-wrapping">Nombre de Usuario</span>
                <input type="text" class="form-control" aria-label="userName" aria-describedby="addon-wrapping" name="userName" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="addon-wrapping">Contraseña</span>
                <input type="password" class="form-control" aria-label="userPwd" aria-describedby="addon-wrapping" name="userPwd" />
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success">Ingresar</button>
                <button type="button" class="btn btn-success">Registrarse</button>
            </div>
        </form>
    );
}

export default Login;