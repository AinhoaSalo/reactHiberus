import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import { routes } from "../../config/routes"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
  return (
    <>
      <div className="containerHome">
        <div className="descripcionHome">
          <h2 className="tituloParrafoHome">Fanpage Rick & Morty</h2>
          <p className="tituloParrafoHome">Información respecto a los personajes y episodios. ¿Te atreves con nuestro juego de memoria?</p>
        </div>
        <div className="todoLink">
          <Link className="seccionesHome" to={routes.PERSONAJES}>
            <h2 className="tituloSeccionesHome">Personajes</h2>
            <img
              className="imgSeccionesHome"
              src="https://fondosmil.com/fondo/27345.jpg"
              alt="Personajes"
            />
          </Link>
          <Link className="seccionesHome" to={routes.EPISODIOS}>
            <h2 className="tituloSeccionesHome">Episodios</h2>
            <img
              className="imgSeccionesHome"
              src="https://p4.wallpaperbetter.com/wallpaper/588/5/300/rick-and-morty-toilets-hd-wallpaper-preview.jpg"
              alt="Episodios"
            />
          </Link>
          <Link className="seccionesHome" to={routes.JUEGO}>
            <h2 className="tituloSeccionesHome">Juego memoria</h2>
            <img
              className="imgSeccionesHome"
              src="https://areajugones.sport.es/wp-content/uploads/2021/09/rick-y-morty-3.jpg"
              alt="Juego cartas"
            />
          </Link>
        </div>
      </div>

    </>
  )
}