import React, { useState, useEffect } from 'react'
import { Card } from '../../components/Card/Card.jsx'
import "./Personajes.css"
import { getPersonajes } from '../../services/commonService.js'

//PINTAR DATOS PARA LUIS

export const Personajes = () => {
  const [personajes, setPersonajes] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPersonajes().then(results => {
      console.log(results)
      setPersonajes(results)
    })
  }, [])

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='containerPersonajes'>
      <div className='buscador'>
        <label className='lab' htmlFor="search">Buscador:</label>
        <input className='inp' value={search} onChange={searcher} type="text" placeholder='Search' id='search' />
      </div>
      {

        personajes.filter(per =>
          per.name.toLowerCase().includes(search.toLocaleLowerCase())
        ).map(per => <Card key={per.id} name={per.name} image={per.image} id={per.id} />)

      }
    </div>
  )
}
