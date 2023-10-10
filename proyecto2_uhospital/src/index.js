import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, Numbers, Condicional, UserCard } from "./op.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
// el componenete <> </> es un fragmento de una etiqueta padre para <Greeting />
root.render(
  <>
    <UserCard nombre="Angel" apellido="Ruiz" edad={20} estado={false} />
    <UserCard nombre="Pedro" apellido="Alvarez" edad={17} estado={true} />
    <UserCard nombre="Juan" apellido="Sandoval" edad={15} estado={true} />
  </>
);
