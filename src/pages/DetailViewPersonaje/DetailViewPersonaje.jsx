import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DetailViewPersonajeComponent } from '../../components/DetailViewPersonajeComponent/DetailViewPersonajeComponent'
import { getDetailPersonaje } from '../../services/commonService'
import "./DetailViewPersonaje.css"

export const DetailViewPersonaje = () => {
  const [personaje, setPersonaje] = useState([])
  const { id } = useParams();

  useEffect(() => {
    getDetailPersonaje(id).then(result => {
      console.log(result.url)
      setPersonaje(result)

    })

  }, [])
  console.log(personaje)

  return (

    <DetailViewPersonajeComponent key={personaje.id} name={personaje.name} status={personaje.status} species={personaje.species} gender={personaje.gender} image={personaje.image} episodes={personaje.episodes} />

  )
}
