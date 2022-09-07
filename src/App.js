import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Episodios } from './pages//Episodios/Episodios';
import { Personajes } from './pages/Personajes/Personajes';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Formulario } from './pages/Formularios/Formulario';

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
            <Route exact path='/' element={<Home />} />
            <Route exact path='/episodios' element={<Episodios />} />
            <Route exact path='/personajes' element={<Personajes />} />
            <Route exact path='/contacto' element={<Formulario />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
