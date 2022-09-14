import React from "react";
import "./Footer.css";
import cookie from "../../images/cookie1.png";
import gitHub from "../../images/logo-GitHub.png";
import Notificaciones from "../../pages/Notifications/Notifications";

// Noe se encarga
export const Footer = () => {
  return (

    <footer className="footer">
      <div className="container_footer">  
        <ul className="list_footer">
          <li className="li_list_footer">
            <a
              className=""
              href="https://github.com"
              title="GitHub Ainhoa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHub} alt="logo" className="img_gh" />
            </a>
          </li>
          <li className="li_list_footer">
            <a
              className=""
              href="https://github.com"
              title="GitHub Julen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHub} alt="logo" className="img_gh" />
            </a>
          </li>

          <li className="li_list_footer">
            <a
              className=""
              href="https://github.com"
              title="GitHub Luis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHub} alt="logo" className="img_gh" />
            </a>
          </li>

          <li className="li_list_footer">
            <a
              className="footer__link"
              href="https://github.com"
              title="GitHub Raquel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHub} alt="logo" className="img_gh" />
            </a>
          </li>
          <li className="li_list_footer">
            <a
              className=""
              href="https://github.com"
              title="GitHub Noe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHub} alt="logo" className="img_gh" />
            </a>
          </li>
        </ul>
        <p className="text_footer">
          <span>&copy; 2022 From Héroes y Heroínas</span>
          {/*<span>Politica de privacidad</span>*/}
          <a
            href="https://ayudaleyprotecciondatos.es/wp-content/uploads/2017/12/Pol%C3%ADtica-de-Privacidad-para-aplicaciones-m%C3%B3viles.docx.pdf"
            title="Política de privacidad"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de privacidad
          </a>
          <a
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
  );
};

export default Footer;
