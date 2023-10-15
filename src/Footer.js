import React from "react";
import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Footer = () => {
  return (
    <>
      <footer className="footer">
    <h1 className="ssl"> Follow me on :</h1>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://wa.link/woz279"
            >
             <i className="bi bi-whatsapp"></i>
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.instagram.com/ll__prince.xx/?igshid=NzZhOTFlYzFmZQ%3D%3D"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.linkedin.com/feed/"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://github.com/Prince-2028"
            >
              <i className="bi bi-github"></i>
            </a>
            
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.facebook.com/yadav.kumer.37?mibextid=ZbWKwL"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </li>
             
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              About
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Services
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Team
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <p>©2023 Prince kumar | Fron End Web Developer </p>
      </footer>
    </>
  );
};

export default Footer;
