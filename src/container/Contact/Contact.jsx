import React from "react";
import styles from "./Contact.module.scss";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import location from "@assets/ubicacion.png";

export const Contact = () => {
  return (
    <section id="contact" className={styles.Contact}>
      <div className={styles.contactContainer}>
        <h2>Contact Me</h2>
        <div className={styles.row}>
          <div className={styles.col}>
            <span className={styles.data}>
              <BsFillPeopleFill />
              Cristian Esquivel
            </span>
            <span className={styles.data}>
              <MdEmail />
              cristianesquivelh@gmail.com
            </span>
            <span className={styles.data}>
              <MdLocationOn />
              Caracas, Venezuela
            </span>
            <span className={styles.data}>
              <FaGithub />
              <a href="#">byKriz</a>
            </span>
            <span className={styles.data}>
              <FaLinkedin />
              <a href="#">Crstian Esquivel</a>
            </span>
          </div>
          <div className={`${styles.col} ${styles.colInfo}`}>
            <img src={location} alt="location" />
            {/* <div className={styles.info}>
              <ul>
                <li>
                  <MdLocationOn />
                  Caracas, Venezuela
                </li>
                <li>
                  <MdEmail />
                  Email: cristianesquivelh@gmail.com
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
