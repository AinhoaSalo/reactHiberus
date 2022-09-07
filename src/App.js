import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "./App.css"
import { routes } from "./config/routes"
import { NavBar } from "./components/NavBar/NavBar"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/Home"
import { Episodios } from "./pages//Episodios/Episodios"
import { Personajes } from "./pages/Personajes/Personajes"
import { Formulario } from "./pages/Formularios/Formulario"

//https://mycolor.space/?hex=%23004165&sub=1 paleta colores elegida Dotting Palette
//Colores: Verde #D4E586, azul chillon #00DEEA azul mas oscuro tirando a gris #94B0B2 y gris marron #AAAD9A

function App() {
  return (
    <>
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route exact path={routes.HOME} element={<Home />} />
            <Route exact path={routes.PERSONAJES} element={<Episodios />} />
            <Route exact path={routes.EPISODIOS} element={<Personajes />} />
            <Route exact path={routes.CONTACTO} element={<Formulario />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  )
}

export default App
