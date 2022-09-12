import React, { useState, useEffect } from 'react'
import { Card } from '../../components/Card/Card.jsx'
import "./Personajes.css"
import { getPersonajes } from '../../services/commonService.js'

//PINTAR DATOS PARA LUIS

export const Personajes = () => {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    getPersonajes().then(results => {
      setPersonajes(results)

    })
  }, [])

  return (
    <div className='containerPersonajes'>
      {

        personajes.map(per => <Card key={per.id} name={per.name} image={per.image} id={per.id}/>)

      }
    </div>
  )
}
