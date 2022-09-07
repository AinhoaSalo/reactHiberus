import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <section className='todoHome'>
        <Link className='seccionesHome' to='/personajes'>
          <h2 className='tituloSeccionesHome'>Personajes</h2>
          <img className='imgSeccionesHome' src="https://fondosmil.com/fondo/27345.jpg" alt="Personajes" />
        </Link>
        <Link className='seccionesHome' to='/episodios'>
          <h2 className='tituloSeccionesHome'>Episodios</h2>
          <img className='imgSeccionesHome' src="https://p4.wallpaperbetter.com/wallpaper/588/5/300/rick-and-morty-toilets-hd-wallpaper-preview.jpg" alt="Episodios" />
        </Link>
        <Link className='seccionesHome' to='/'>
          <h2 className='tituloSeccionesHome'>Juego memoria</h2>
          <img className='imgSeccionesHome' src="https://areajugones.sport.es/wp-content/uploads/2021/09/rick-y-morty-3.jpg" alt="Juego cartas" />
        </Link>
      </section>
    </>
  )
}


