export function Greeting({ nombre, apellido, edad }) {
  // con objetos
  let user = {
    name: nombre,
    lastName: apellido,
    age: edad,
  };
  return (
    <>
      <h1>{user.name}</h1>
      <h2>{user.lastName}</h2>
      <p>{user.age}</p>
    </>
  );
}
export function Numbers() {
  // interprentacion de jsx
  function add(x, y) {
    return x + y;
  }
  return (
    <div>
      <h1> La suma de los númeroes es: </h1>
      <p>{add(10, 40)}</p>
    </div>
  );
}
export function Condicional() {
  // con condicionales
  const casado = true;
  return (
    <div>
      <h1> Estás casado? </h1>
      <p>
        {casado ? "Felicidades por el casamiento" : "lo siento por la solteria"}
      </p>
    </div>
  );
}
export function UserCard(props) {
  // con props
  return (
    <div>
      <h1>{props.nombre}</h1>
      <ul>
        <li>apellido: {props.apellido}</li>
        <li>edad: {props.edad}</li>
        <li>estado: {props.estado ? "casado" : "Soltero"}</li>
      </ul>
    </div>
  );
}
