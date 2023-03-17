import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [navMenu, setNavMenu] = useState(false);

  const handleMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <div className={styles.headerContainer}>
      <header>
        <div className={styles.logo}>
          <a href="#">Cristian Esquivel</a>
        </div>
        <nav id="nav" className={navMenu ? `${styles.responsive}` : ``}>
          <ul>
            <li>
              <a href="#home" onClick={handleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#aboutme" onClick={handleMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleMenu}>
                Skills
              </a>
            </li>
            {/* <li>
              <a href="#curriculum">Curriculum</a>
            </li> */}
            <li>
              <a href="#portfolio" onClick={handleMenu}>
                Portafolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.navResponsive} onClick={handleMenu}>
          {!navMenu ? <FaBars /> : <AiOutlineClose />}
        </div>
      </header>
    </div>
  );
};
