import { NavLink } from "react-router-dom"

import "./Header.css"
import { routes } from "../../config/routes"
import { useState } from "react"

const links = [
  [routes.HOME, "Home"],
  [routes.PERSONAJES, "Personajes"],
  [routes.EPISODIOS, "Episodios"],
  [routes.JUEGO, "Juego"],
  [routes.CONTACTO, "Contacto"],
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)

  return (
    <header>
      <button className={`nav-btn ${isOpen ? "open" : ""}`} onClick={toggle}>
        <span className="line"></span>
      </button>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          {links.map(([route, label], i) => (
            <li key={`nav_${i}`}>
              <NavLink className="nav-link" to={route} onClick={close}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
