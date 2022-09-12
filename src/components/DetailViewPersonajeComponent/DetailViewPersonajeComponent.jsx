import React from 'react'
import "./DetailViewPersonajeComponent.css"

export const DetailViewPersonajeComponent = ({name, status, species, gender, image, episodes}) => {
  return (
  //   <div >
  //   <img src={image} className="" alt="" />
  //   <h1 className="">{name}</h1>
  //   <ul>
  //     <li>{name}</li>
  //     <li>{status}</li>
  //     <li>{species}</li>
  //     <li>{gender}</li>
  //     <li>{image}</li>
  //     <li>{episodes}</li>
  //   </ul>

  // </div>
  <div className="cardDetail">
  <div className="textCard">
    <ul className="texto">
    <li>Nombre: {name}</li>
      <li>Estado: {status}</li>
      <li>Especie: {species}</li>
      <li>Genero: {gender}</li>
      {/* <li>{episodes}</li> */}
    </ul>
  </div>
  <div className="imgCard">
     {/* <img className="imgMarco" src= alt="" />  */}
    <img
      className="imgNave"
      src={image}
      alt=""
    />
  </div>
</div>
  )
}



