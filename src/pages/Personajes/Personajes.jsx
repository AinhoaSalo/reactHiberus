import React, { useState, useEffect } from 'react'
import { Card } from '../../components/Card/Card.jsx'
import "./Personajes.css"
import { getPersonajes } from '../../services/commonService.js'

//PINTAR DATOS PARA LUIS

export const Personajes = () => {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    getPersonajes().then(results => {
      // console.log(results)
      setPersonajes(results)

    })
  }, [])

  return (
    <div>
      {
        // personajes.map(({name, id, image})=>{
        
        //   <Card key={id} name={name} id={id} image={image}/>
          
        // })

        personajes.map(per => <Card key={per.id} name={per.name} image={per.image} id={per.id}/>)

      }
    </div>
  )
}
