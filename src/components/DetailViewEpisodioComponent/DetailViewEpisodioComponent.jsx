import React from 'react'
import "./DetailViewEpisodioComponent.scss"

export const DetailViewEpisodioComponent = ({ id, name, characters, created, air_date, episode }) => {
  return (

    <div className="tarjeta">
      <div className="pie">
        <h1>{name}</h1>
        <ul className='lista'>
          <li>Temporada/Capitulo: {episode}</li>
          <li>Fecha de estreno: {air_date}</li>
          <li>Fecha de creación: {created}</li>
        </ul>
      </div>
    </div>

  )
}
