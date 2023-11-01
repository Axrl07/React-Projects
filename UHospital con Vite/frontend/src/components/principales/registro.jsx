import { useFetcher, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './registro.module.css';
import GeneradorId from './GeneradorId';
import { RegistroExitoso } from '../hooks/Modal';

function Registro() {
    const navigate = useNavigate();
    const [id, setid] = useState("");
    const [usuarioLocal, setusuarioLocal] = useState(null);
    const [abrir, setabrir] = useState(false);

    const handleLogin = () => {
        navigate("/login");
    }
    const handleRegistro = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const res = await fetch('http://localhost:4000/auth/registro',{
            method: 'POST',
            headers:{
                'encType': 'multipart/form-data'
            },
            body: formData
        })

        const data = await res.json();

        if(res.status === 200){
            setusuarioLocal(data.usuario);
            setabrir(true);
        } else {
            alert(data.error)
        }

    }
    
    return(
        <>
            <form onSubmit={handleRegistro} className={styles.formContainer} encType='multipart/form-data'>
                <div>
                    <h1 className={styles.h1}> Registro de Usuario </h1>
                </div>
                {<GeneradorId setid={setid} id={id}/>}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default"> Nombres </span>
                    <input type="text" class="form-control" name="nombre" required />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default"> Apellidos </span>
                    <input type="text" class="form-control" name="apellido" required />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default"> Nombre de Usuario </span>
                    <input type="text" class="form-control" name="nombreUsuario" required />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default"> Contraseña </span>
                    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="clave" required  maxLength={8} minLength={3}/>
                </div>
                <div class="row g-2">
                    <div class="col-md">
                        <div class="form-imput-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default"> Genero </span>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="row g-2">
                            <select class="form-select" aria-label="Default select example" name="genero" required>
                                <option value="masculino" > Masculino </option>
                                <option value="femenino" > Femenino </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row g-2">
                    <div class="col-md">
                        <div class="form-imput-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default"> Fecha de nacimiento </span>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="row g-2">
                            <input type="date" id="inputDate" class="form-control" aria-describedby="date" name="fechaNacimiento" required />
                        </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default"> Telefono Celular </span>
                    <input type="text" class="form-control" aria-label="Sizing example input" name="telefono" required />
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-success"> Registrarse </button>
                    <button type="button" onClick={handleLogin} class="btn btn-warning"> Regresar al Login </button>
                </div>
            </form>
            { abrir && <RegistroExitoso abrir={abrir} setabrir={setabrir} usuarioLocal={usuarioLocal} />}
        </>
    )
}

export default Registro;