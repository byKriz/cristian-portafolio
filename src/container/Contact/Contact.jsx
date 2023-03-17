import React from "react";
import styles from "./Contact.module.scss";
import { BsDownload } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import location from "@assets/ubicacion.png";

export const Contact = () => {
  return (
    <section id="contact" className={styles.Contact}>
      <div className={styles.contactContainer}>
        <h2>Contact Me</h2>
        <div className={styles.row}>
          <div className={styles.col}>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Phone Number" />
            <input type="text" placeholder="Your Email Adress" />
            <input type="text" placeholder="Issue" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>
              Send Message
              <FaPaperPlane />
              <span className={styles.overlay}></span>
            </button>
          </div>
          <div className={`${styles.col} ${styles.colInfo}`}>
            <img src={location} alt="location" />
            <div className={styles.info}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
