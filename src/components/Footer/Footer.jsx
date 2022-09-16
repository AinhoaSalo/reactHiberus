import React from "react"
import "./Footer.css"
import cookie from "../../assets/images/cookie1.png"
import Notificaciones from "../../pages/Notifications/Notifications"
import { GithubLogo } from "../GithubLogo"


const links = [
  { href: "https://github.com/AinhoaSalo", title: "Github Ainhoa" },
  { href: "https://github.com/JulenMendioroz", title: "Github Julen" },
  { href: "https://github.com/luisfaro13", title: "Github Luis" },
  { href: "https://github.com/raqcar16", title: "Github Raquel" },
  { href: "https://github.com/NoeliaPH", title: "Github Noe" },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container_footer">
        <ul className="list_footer">
          {links.map(({ href, title }) => (
            <li key={title}>
              <a
                className="list_link"
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo />
              </a>
            </li>
          ))}
        </ul>
        <p className="text_footer">
          <span>&copy; 2022 From Héroes y Heroínas</span>
          {/*<span>Politica de privacidad</span>*/}
          <a className="estiloA"
            href="https://ayudaleyprotecciondatos.es/wp-content/uploads/2017/12/Pol%C3%ADtica-de-Privacidad-para-aplicaciones-m%C3%B3viles.docx.pdf"
            title="Política de privacidad"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de privacidad
          </a>
          <a className="estiloA"
            href="https://www.wonder.legal/es/modele/aviso-legal-condiciones-generales-uso?gclid=Cj0KCQjwjvaYBhDlARIsAO8PkE2P3vMxMa_km0JAmE22vFLX5YxX-vN3i3mMhVeVF899sAs0r3QttfkaAqnpEALw_wcB"
            title="Aviso legal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aviso Legal
          </a>
          {/*<span>Aviso legal</span>*/}
          <span>
            Navegando por nuestra web ya estás aceptando las{" "}
            <img src={cookie} alt="cookie" className="img_cookie" />
          </span>
        </p>
        <Notificaciones/>
      </div>
    </footer>
  )
}

export default Footer
