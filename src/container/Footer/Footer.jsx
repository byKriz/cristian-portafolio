import React from "react";
import styles from "./Footer.module.scss";
import { FaAngleDoubleUp, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <a href="#home" className={styles.up}>
        <FaAngleDoubleUp />
      </a>
      <div className={styles.socialMedia}>
        <a href="#">
          <FaGithub />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};
