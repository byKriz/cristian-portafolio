import React from "react";
import styles from "./Home.module.scss";
import profileImg from "@assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  return (
    <section id="home" className={styles.Home}>
      <div className={styles.bannerContainer}>
        <div className={styles.imgContainer}>
          <img src={profileImg} alt="" />
        </div>
        <h1>Cristian Esquivel</h1>
        <h2>Frontend Developer - ReactJs Expert</h2>
        <div className={styles.socialMedia}>
          <a href="https://github.com/byKriz" target={'_blank'}><FaGithub/></a>
          <a href="https://www.linkedin.com/in/cristian-esquivel-351613135/" target={'_blank'}><FaLinkedin/></a>
        </div>
      </div>
    </section>
  );
};
