import React from "react";
import { useState, useEffect} from "react";
import "./Formulario.css"

export function Formulario() {
    let [nameUserRegister, setNameUserRegister] = useState("");



  return (
    <div className="formulario">
      <h1 className="tituloFormulario">Contacto</h1>
      <form>
        <div className="labelInputFormulario">
          <label className="labelFormulario">Nombre:</label>
          <input className="inputFormulario" type="text" name="nombre" />
        </div>
        <div className="labelInputFormulario">
          <label className="labelFormulario">Apellidos:</label>
          <input className="inputFormulario" type="text" name="apellidos" />
        </div>
        <div className="labelInputFormulario">
          <label className="labelFormulario">Email:</label>
          <input className="inputFormulario" type="text" name="email" />
        </div>
        <div className="labelInputFormulario">
          <label className="labelFormulario">Motivo de consulta:</label>
          <input className="inputFormulario" type="text" name="motCon" />
        </div>
        <div className="labelInputFormulario">
          <label className="labelFormulario">Escriba su mensaje:</label>
          <input className="inputFormulario" type="textarea" name="mensaje" />
        </div>
        <div className="buttonContainer">
          <button type="button" className="button">Enviar</button>
        </div>
      </form>
    </div>
            
  );
}
