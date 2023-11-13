import { UserContext } from '../../App';
import { useContext, useState } from 'react';
import { ModificarExitoso } from '../../components/Modal';
import styles from '../../styles/Modificar.module.css';

function Modificar({setusuario}) {
    const usuario = useContext(UserContext);
    const [abrir, setabrir] = useState(false);
    const [usuarioActualizado, setusuarioActualizado] = useState();
    
    const handleModificar = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const response = await fetch('http://localhost:5555/auth/actualizarDatos', {
            method: 'PUT',
            headers: {
                'enctype': 'multipart/form-data'
            },
            body: formData
        })

        const data = await response.json();

        if (response.status === 200) {
            setusuario(data.usuario);
            setusuarioActualizado(data.usuario);
            setabrir(true);
        }else{
            alert(data.error);
        }
    }

    return (
        <>
            <form className={styles.formContainer} encType='multipart/form-data' onSubmit={handleModificar}>
                <div>
                    <h1 className={styles.h1}> Actualización de datos de usuario </h1>
                </div>
                <div class="row g-2 mb-3">
                    <div class="col-md">
                        <span class="input-group-text"> ID del paciente:</span>
                    </div>
                    <div class="col-md">
                        <input class="form-control" type="text" value={usuario.id} name="id" readOnly />
                    </div>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text"> Nombres </span>
                    <input type="text" class="form-control" name="nombre" placeholder={usuario.nombre} required />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text"> Apellidos </span>
                    <input type="text" class="form-control" name="apellido" placeholder={usuario.apellido} required />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text"> Nombre de Usuario </span>
                    <input type="text" class="form-control" name="nombreUsuario" placeholder={usuario.usuario} required />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text"> Contraseña </span>
                    <input type="password" class="form-control" name="clave" placeholder={usuario.clave} required />
                </div>
                <div class="row g-2">
                    <div class="col-md">
                        <div class="form-imput-group mb-3">
                            <span class="input-group-text"> Genero </span>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="row g-2">
                            <select class="form-select" name="genero" required>
                                <option value="masculino" > Masculino </option>
                                <option value="femenino" > Femenino </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row g-2">
                    <div class="col-md">
                        <div class="form-imput-group mb-3">
                            <span class="input-group-text"> Fecha de nacimiento </span>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="row g-2">
                            <input type="date" class="form-control" name="fechaNacimiento" required />
                        </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text"> Telefono Celular </span>
                    <input type="text" class="form-control" name="telefono" placeholder={usuario.telefono} required />
                </div>
                <div class="row g-2">
                    <div class="col-md">
                        <div class="form-imput-group mb-3">
                            <span class="input-group-text"> Seleccione el departamento al que desea pertenecer </span>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="row g-2">
                            <select class="form-select" name="departamento" required>
                                <option value="pacientes" > pacientes </option>
                                <option value="enfermeria" > enfermeria </option>
                                <option value="medicos" > medicos </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-warning"> Actualiar datos </button>
                </div>
            </form>
            { abrir && <ModificarExitoso abrir={abrir} setabrir={setabrir} usuarioActualizado={usuarioActualizado} />}
        </>
    );
}

export default Modificar;