import React, { useState, useEffect } from 'react'
import { getDetailEpisodio } from '../../services/commonService';
import { useParams } from 'react-router-dom'
import { DetailViewEpisodioComponent } from '../../components/DetailViewEpisodioComponent/DetailViewEpisodioComponent'
import "./DetailViewEpisodio.css"
import { BotonAtras } from '../../components/BotonAtras/BotonAtras';

export const DetailViewEpisodio = () => {
  const [episodio, setEpisodio] = useState([])
  const { id } = useParams();

  useEffect(() => {
    getDetailEpisodio(id).then(result => {
      console.log(result.url)
      setEpisodio(result)

    })

  }, [])

  return (
    <div className='containerDetailViewEpisodios'>
      <div className="divBotonAtras">
      <BotonAtras url={'/episodios'}/>
      </div>
      <DetailViewEpisodioComponent key={episodio.id} name={episodio.name} characters={episodio.characters} created={episodio.created} id={episodio.id} air_date={episodio.air_date} episode={episodio.episode} />
    </div>
  )
}
