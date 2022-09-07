import React from 'react';
import './Home.css'

export const Home = () => {
  return (
    <>
      <section className='todoHome'>
        <div className='seccionesHome'>
          <h2 className='tituloSeccionesHome'>Personajes</h2>
          <img className='imgSeccionesHome' src="https://fondosmil.com/fondo/27345.jpg" alt="Personajes" />
        </div>
        <div className='seccionesHome'>
          <h2 className='tituloSeccionesHome'>Episodios</h2>
          <img className='imgSeccionesHome' src="https://p4.wallpaperbetter.com/wallpaper/588/5/300/rick-and-morty-toilets-hd-wallpaper-preview.jpg" alt="Episodios" />
        </div>
        <div className='seccionesHome'>
          <h2 className='tituloSeccionesHome'>Juego memoria</h2>
          <img className='imgSeccionesHome' src="https://areajugones.sport.es/wp-content/uploads/2021/09/rick-y-morty-3.jpg" alt="Juego cartas" />
        </div>
      </section>
    </>
  )
}


