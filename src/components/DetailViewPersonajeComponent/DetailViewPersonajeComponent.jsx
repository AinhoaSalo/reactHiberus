import React from 'react'

export const DetailViewPersonajeComponent = ({name, status, species, gender, image, episodes}) => {
  return (
    <div >
    <img src={image} className="" alt="" />
    <h1 className="">{name}</h1>
    <ul>
      <li>{name}</li>
      <li>{status}</li>
      <li>{species}</li>
      <li>{gender}</li>
      <li>{image}</li>
      <li>{episodes}</li>
    </ul>

  </div>
  )
}
