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
        <br />
        <h4>Resumen</h4>
        <p className='texto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, cumque explicabo expedita rem voluptatum esse inventore officia iure dolorum? Perferendis assumenda molestias dolorem commodi libero illum eum ad maiores dolor!</p>
      </div>
    </div>

  )
}
