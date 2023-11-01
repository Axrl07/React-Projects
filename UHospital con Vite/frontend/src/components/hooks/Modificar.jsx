import { UserContext } from '../../Rutas.routes';
import { useContex } from 'react';

function Modificar() {
    const usuario = useContex(UserContext);
    return (
        <form onSubmit={handleActualizarDatos} className={styles.formContainer}>
            <div>
                <h1 className={styles.h1}> Actualización de datos de usuario </h1>
            </div>
            <div class="row g-2 mb-3">
                <div class="col-md">
                    <span class="input-group-text" id="inputGroup-sizing-default"> ID del paciente:</span>
                </div>
                <div class="col-md">
                    <input class="form-control" type="text" value={usuario.id} aria-label="readonly input example" name="id" readonly />
                </div>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Nombres </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="name" placeholder={usuario.nombre} required />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Apellidos </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="lastName" placeholder={usuario.apellido} required />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Nombre de Usuario </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="userName" placeholder={usuario.usuario} required />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Contraseña </span>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="userPwd" placeholder={usuario.clave} required />
            </div>
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-imput-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"> Genero </span>
                    </div>
                </div>
                <div class="col-md">
                    <div class="row g-2">
                        <select class="form-select" aria-label="Default select example" name="genre" required>
                            <option value="m" > Masculino </option>
                            <option value="f" > Femenino </option>
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
                        <input type="date" id="inputDate" class="form-control" aria-describedby="date" name="birthDate" required />
                    </div>
                </div>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Telefono Celular </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="cellphone" placeholder={usuario.telefono} required />
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success"> Actualiar datos </button>
                <Link to="/paciente" className="btn btn-danger"> Regresar </Link>
            </div>
        </form>
    );
}

export default Modificar;