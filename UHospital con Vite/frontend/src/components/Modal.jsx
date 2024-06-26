import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export const RegistroExitoso = ({ abrir, setabrir, usuarioLocal }) => {
    const usuario = usuarioLocal;
    const navigate = useNavigate();
    const cerrarModal = () => {
        setabrir(false);
        navigate("/login");
    }
    return (
        <Modal isOpen={abrir}>
            <ModalHeader>
                <h1>Usuario creado de forma exitosa</h1>
            </ModalHeader>
            <ModalBody>
                <p>El usuario {usuario.usuario} , creado por {usuario.nombre + " " + usuario.apellido} ha sido creado de forma exitosa. Para continuar inicie sesión.</p>
            </ModalBody>
            <ModalFooter>
                <button type='button' className="btn btn-primary" onClick={cerrarModal}>Aceptar</button>
            </ModalFooter>
        </Modal>
    );
}

export const ModificarExitoso = ({ abrir, setabrir, usuarioActualizado }) => {
    const usuario = usuarioActualizado;
    const navigate = useNavigate();
    const cerrarModal = () => {
        setabrir(false);
        if(usuario.departamento === "paciente"){
            navigate('/pacientes');
        }else if(usuario.departamento === "enfermeria"){
            navigate('/enfermeria');
        } else {
            navigate('/medicos');
        }
    }
    return (
        <Modal isOpen={abrir}>
            <ModalHeader>
                <h1>Usuario modificado exitosamente</h1>
            </ModalHeader>
            <ModalBody>
                <p>El usuario {usuario.usuario} , perteneciente a {usuario.nombre + " " + usuario.apellido} ha sido modificado de forma exitosa. Para continuar inicie sesión.</p>
            </ModalBody>
            <ModalFooter>
                <button type='button' className="btn btn-primary" onClick={cerrarModal}>Aceptar</button>
            </ModalFooter>
        </Modal>
    );
}


