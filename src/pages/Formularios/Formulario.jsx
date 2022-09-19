import React from "react";
import { useState, useEffect } from "react";
import "./Formulario.css"

export function Formulario() {
  const [nameForm, setNameForm] = useState("");
  const [lastnameForm, setLastnameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [objectForm, setObjectForm] = useState("");
  const [messageForm, setMessageForm] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [errors, setErrors] = useState({});
  console.log(nameForm, lastnameForm, emailForm, objectForm, messageForm)


  function valid() {
    const errores = {};
    setErrors(false)

    //Name
    if (!nameForm.match(/^(?![\s.]+$)[a-zA-Z\s.]*$/)) {
      errores['name'] = 'El nombre debe comenzar en Mayuscula y solo puede contener letras';
      setIsInvalid(true)
    }

    if (nameForm.length < 1) {
      errores['name'] = 'El campo no puede estar vacío';
      setIsInvalid(true)
    }

    //Lastname
    if (!lastnameForm.match(/^(?![\s.]+$)[a-zA-Z\s.]*$/)) {
      console.log('Estoy dentro')
      errores['lastname'] = 'El apellido debe comenzar en Mayuscula y solo puede contener letras'
      setIsInvalid(true)
    }

    if (lastnameForm.length < 1) {
      errores['lastname'] = 'El campo no puede estar vacío';
      setIsInvalid(true)
    }

    //Email
    if (!emailForm.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      console.log('Estoy dentro')
      errores['email'] = 'El correo electrónico es incorrecto'
      setIsInvalid(true)
    }

    if (emailForm.length < 1) {
      errores['email'] = 'El campo no puede estar vacío';
      setIsInvalid(true)
    }

    //Object
    if (objectForm.length < 1) {
      errores['object'] = 'Por favor, especifique motivo de contacto';
      setIsInvalid(true)
    }

    //Message
    if (messageForm.length < 1) {
      errores['message'] = 'Rellene el mensaje deseado';
      setIsInvalid(true)
    }




    setErrors(errores);
  }

  return (
    <div className="formulario">
      <h1 className="tituloFormulario">Contacto</h1>
      <form>
        <div className="labelInputFormulario">
          <label className="labelFormulario" htmlFor="name">Nombre:</label>
          <input
            className="inputFormulario"
            onChange={(e) => { setNameForm(e.target.value) }}
            value={nameForm}
            type="text"
            name="nombre"
            id="name"
          />
          <span className="errors">
            {isInvalid && errors.name}
          </span>
        </div>
        <div className="labelInputFormulario">
          <label className="labelFormulario" htmlFor="lastname">Apellidos:</label>
          <input
            className="inputFormulario"
            onChange={(e) => { setLastnameForm(e.target.value) }}
            value={lastnameForm}
            type="text"
            name="apellidos"
            id="lastname"
          />
          <span className="errors">
            {isInvalid && errors.lastname}
          </span>
        </div>
        <div className="labelInputFormulario">
          <label className="labelFormulario" htmlFor="email">Email:</label>
          <input
            className="inputFormulario"
            onChange={(e) => { setEmailForm(e.target.value) }}
            value={emailForm}
            type="text"
            name="email"
            id="email"
          />
          <span className="errors">
            {isInvalid && errors.email}
          </span>
        </div>
        <div className="labelInputFormulario">
          <label className="labelFormulario" htmlFor="object">Motivo de consulta:</label>
          <input
            className="inputFormulario"
            onChange={(e) => { setObjectForm(e.target.value) }}
            value={objectForm}
            type="text"
            name="object"
            id="object"
          />
          <span className="errors">
            {isInvalid && errors.object}
          </span>
        </div>
        <div className="labelInputFormulario">
          <label className="labelFormulario" htmlFor="message">Escriba su mensaje:</label>
          <input
            className="inputFormulario"
            onChange={(e) => { setMessageForm(e.target.value) }}
            value={messageForm}
            type="textarea"
            rows="10"
            cols="50"
            name="mensaje"
            id="message"
          />
          <span className="errors">
            {isInvalid && errors.message}
          </span>
        </div>
        <div className="buttonContainer">
          <button type="button" className="button" onClick={() => { valid() }}>Enviar</button>
        </div>
      </form>
    </div>

  );
}


