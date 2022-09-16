import React from 'react'
import { Link } from 'react-router-dom'
import "./DetailViewPersonajeComponent.scss"

export const DetailViewPersonajeComponent = ({ name, status, species, gender, image, episodes }) => {
  console.log(image)
  return (

    <div className="tarjetaPersonaje">
      <div className="cuerpo">
        <img src={image} alt="muestra" />

      </div>
      <div className="pie">
        <h1>{name}</h1>
        <ul className='lista'>
          <li>Estado: {status}</li>
          <li>Especie: {species}</li>
          <li>Genero: {gender}</li>

        </ul>
      </div>
    </div>




  )
}



