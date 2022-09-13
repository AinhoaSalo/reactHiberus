import { Route, Routes } from "react-router-dom"

import "./App.css"
import { routes } from "./config/routes"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/Home"
import { Episodios } from "./pages//Episodios/Episodios"
import { Personajes } from "./pages/Personajes/Personajes"
import { Formulario } from "./pages/Formularios/Formulario"
import { DetailViewPersonaje } from "./pages/DetailViewPersonaje/DetailViewPersonaje"
import { DetailViewEpisodio } from "./pages/DetailViewEpisodio/DetailViewEpisodio"
import { Juego } from "./pages/Juego/Juego"

//https://mycolor.space/?hex=%23004165&sub=1 paleta colores elegida Dotting Palette
//Colores: Verde #D4E586, azul chillon #00DEEA azul mas oscuro tirando a gris #94B0B2 y gris marron #AAAD9A

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.PERSONAJES} element={<Personajes />} />
          <Route path={routes.PERSONAJE} element={<DetailViewPersonaje />} />
          <Route path={routes.EPISODIOS} element={<Episodios />} />
          <Route path={routes.EPISODIO} element={<DetailViewEpisodio />} />
          <Route path={routes.CONTACTO} element={<Formulario />} />
          <Route path={routes.JUEGO} element={<Juego />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
