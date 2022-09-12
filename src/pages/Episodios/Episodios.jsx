import React, { useEffect, useState } from 'react'
import { Tabla } from '../../components/Tabla/Tabla.jsx'
import { getEpisodios } from '../../services/commonService.js'
import "./Episodios.css"

export const Episodios = () => {
  const [episodios, setEpisodios] = useState([])

  useEffect(() => {
    getEpisodios().then(results => {
      setEpisodios(results)
      console.log(results)
    })

  }, [])


  return (

    <div className='containerEpisodios'>
      <table className='tablaEpisodios'>
        <thead>
          <tr>
            <th> Episodio </th>
            <th> Nombre</th>
            <th> Detalle</th>
          </tr>
        </thead>
        <tbody>

          {

            episodios.map(ep => <Tabla key={ep.id} name={ep.name} episode={ep.episode} id={ep.id} />)

          }
        </tbody>
      </table>

    </div>




  )
}



