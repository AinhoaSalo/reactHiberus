import React, {useState, useEffect} from 'react'
import { Card } from '../../components/Card/Card.jsx'
import "./Personajes.css"
import { getPersonajes } from '../../services/commonService.js'

//PINTAR DATOS PARA LUIS

export const Personajes = () => {

  const [first, setfirst] = useState(second)
  useEffect(() => {
    
  
  }, [])
  
  return (
    <div className='container'>
      <Card name='Morty' />
      <Card name='Morty2' />
    </div>
  )
}
