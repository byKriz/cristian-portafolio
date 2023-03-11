import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header>
        <div className={styles.logo}>
            <a href="#">Nick</a>
        </div>
        <nav>
            <ul>
                <li><a href="#inicio">INICIO</a></li>
                <li><a href="#aboutme">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#curriculum">Curriculum</a></li>
                <li><a href="#portafolio">Portafolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      </header>
    </div>
  );
};
