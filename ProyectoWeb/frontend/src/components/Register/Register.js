import styles from "./Register.module.css";

function Registro() {
    return (
        <form className={styles.formContainer}>
            <div>
                <h1 className={styles.h1}> Registro de Usuario </h1>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Nombres </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="userName" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Apellidos </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="userName" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Contraseña </span>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="userPwd" />
            </div>
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid">
                            <option value="m"> Masculino </option>
                            <option value="f"> Femenino </option>
                        </select>
                        <label for="floatingSelectGrid">género</label>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Registro;
