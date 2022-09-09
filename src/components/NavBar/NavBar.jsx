import "./NavBar.css"
import { routes } from "../../config/routes"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const links = [
  [routes.HOME, "Home"],
  [routes.PERSONAJES, "Personajes"],
  [routes.EPISODIOS, "Episodios"],
  [routes.JUEGO, "Juego"],
  [routes.CONTACTO, "Contacto"],
]

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClick = () => setIsOpen((prev) => !prev)

  return (
    <header>
      <button className={`nav-btn ${isOpen ? "open" : ""}`} onClick={onClick}>
        <span className="line"></span>
      </button>
      <div className={`nav-bg ${isOpen ? "open" : ""}`}></div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          {links.map(([route, label], i) => (
            <li key={`nav_${i}`}>
              <NavLink className="nav-link" to={route}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
