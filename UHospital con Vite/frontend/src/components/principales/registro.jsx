import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './registro.module.css';

function Registro({ setusuario }) {
    const navigate = useNavigate();
    const [id, setid] = useState("");

    const handleLogin = () => {
        navigate("/login");
    }
    const generarId = (length = 19) => {
        let result = ''
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++ ) {
          if(result.length === 4 || result.length === 9 || result.length === 14){
            result += '-'
          }
          result += characters.charAt(Math.floor(Math.random() * characters.length));
          if(result.length === 19){
            setid(result);
            break;
          }
       }
    }
    const handleRegistro = async (e) => {
        e.preventDefault();
        const form = e.tarjet;
        const formData = new FormData(form);
        const res = await fetch('http://localhost:4000/auth/registro',{
            method: 'POST',
            headers:{
                'encType': 'text/plain'
            },
            body: formData
        })

        const data = await res.json();

        if(data.status === 200){
            setusuario(data.usuario);
            navigate("/paciente");
        } else {
            alert(data.error)
        }

    }
    
    return(
        <>
            <form onSubmit={handleRegistro} className={styles.formContainer} encType='text/plain'>
                <div>
                    <h1 className={styles.h1}> Registro de Usuario </h1>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default"> ID </span>
                    <input type="text" class="form-control" value={id} placeholder={id} name="id" required readonly />
                    <button class="btn btn-primary" onClick={generarId}> genere un ID </button>
                </div>
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
                    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="clave" required />
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
                </div>
            </form>
            <div className={styles.container}>
                <div class="d-grid gap-2">
                    <button onClick={handleLogin} class="btn btn-warning"> Regresar al Login </button>
                </div>
            </div>
        </>
    )
}

export default Registro;