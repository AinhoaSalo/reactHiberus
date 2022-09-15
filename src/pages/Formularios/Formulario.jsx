import React from "react";
import { useState, useEffect} from "react";
import "./Formulario.css"

export function Formulario() {
    let [nameUserRegister, setNameUserRegister] = useState("");



  return (
    <div className="formulario">
      <h1 className="titulo">Contacto</h1>
      <form>
        <div>
          <label className="label">Nombre:</label>
          <input type="text" name="nombre" />
        </div>
        <div>
          <label className="label">Apellidos:</label>
          <input type="text" name="apellidos" />
        </div>
        <div>
          <label className="label">Email:</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label className="label">Motivo de consulta:</label>
          <input type="text" name="motCon" />
        </div>
        <div>
          <label className="label">Escriba su mensaje:</label>
          <input type="textarea" name="mensaje" />
        </div>
        <div className="buttonContainer">
          <button type="button" className="button">Enviar</button>
        </div>
      </form>
    </div>
            
  );
}
