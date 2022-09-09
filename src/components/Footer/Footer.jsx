import React from "react";
import "./Footer.css";
// Noe se encarga
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text">
          <span>&copy; 2022 From Héroes y Heroínas</span>
          <span>Politica de privacidad</span>
          <span>Aviso legal</span>
          <span>Visitando nuestra web ya has aceptado las <img src="./Footer/cookie.PNG" alt="cookie" /></span>
        </p>
        <ul className="list">
          <li className="">
            <a
              className=""
              href="https://github.com"
              title="GitHub Ainhoa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logo-GitHub.png" alt="logo" />
            </a>
          </li>

          <li className="">
            <a
              className=""
              href="https://github.com"
              title="GitHub Julen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./logo-GitHub.png" alt="logo" />
            </a>
          </li>

          <li className="">
            <a
              className=""
              href="https://github.com"
              title="GitHub Luis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./logo-GitHub.png" alt="logo" />
            </a>
          </li>

          <li className="">
            <a
              className="footer__link"
              href="https://github.com"
              title="GitHub Raquel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./logo-GitHub.png" alt="logo" />
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://github.com"
              title="GitHub Noe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./logo-GitHub.png" alt="logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
