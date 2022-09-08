import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailPersonaje } from '../../services/commonService'
import "./DetailView.css"

export const DetailView = () => {
  const [personaje, setPersonaje] = useState([])
  const { id } = useParams();

  useEffect(() => {
    getDetailPersonaje(id).then(result => {
      console.log(result.url)
      setPersonaje(result)

    })

  }, [])


  return (
    <div >
      <img src={personaje.image} className="" alt="" />
      <h1 className="">{personaje.name}</h1>
      <ul>
        <li>{personaje.name}</li>
        <li>{personaje.status}</li>
        <li>{personaje.species}</li>
        <li>{personaje.gender}</li>
        <li>{personaje.image}</li>
        <li>{personaje.episodes}</li>
      </ul>

    </div>
    // <ul>
    //   <li>{personaje.name}</li>
    //   <li>{personaje.status}</li>
    //   <li>{personaje.species}</li>
    //   <li>{personaje.gender}</li>
    //   <li>{personaje.image}</li>
    //   <li>{personaje.episodes}</li>
    // </ul>
  )
}
