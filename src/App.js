import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { Episodios } from './pages/Episodios';
import { Personajes } from './pages/Personajes';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Formulario } from './pages/Formulario';

function App() {
  return (
    <>
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
          <Route exact path ='/' element={<Home/>} />
          <Route exact path ='/episodios' element={<Episodios />} />
          <Route exact path ='/personajes' element={<Personajes/> } />
          <Route exact path ='/contacto' element={<Formulario /> } />
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </>
  );
}

export default App;
