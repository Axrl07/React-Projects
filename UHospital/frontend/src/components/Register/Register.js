import styles from "./Register.module.css";

function Registro() {
    const handleRegistrar = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const response = await fetch('http://localhost:4000/auth/register', {
            method: 'POST',
            headers: {
                'enctype': 'multipart/form-data'
            },
            body: formData
        })

        const data = await response.json();
        if (response.status === 200) {
            alert(data.msg);
            return;
        }else{
            alert(data.error);
            return;
        }
    }
    const blockButtom = (e) => {
        e.preventDefault();
        if (e.target.value === "m" || e.target.value === "f") {
            document.getElementById("inputDate").disabled = false;
        } else {
            document.getElementById("inputDate").disabled = true;
        }
    }
    return (
        <form onSubmit={handleRegistrar} className={styles.formContainer}>
            <div>
                <h1 className={styles.h1}> Registro de Usuario </h1>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Nombres </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="name" required />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Apellidos </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="lastName" required />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Nombre de Usuario </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="userName" required />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Contraseña </span>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="userPwd" required />
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
                        <input type="date" id="inputDate" class="form-control" aria-describedby="date" name="birthdate" required />
                    </div>
                </div>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Telefono Celular </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="cellphone" required />
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success"> Registrarse </button>
            </div>
        </form>
    );
}

export default Registro;
