import React from "react";
import styles from "./Home.module.scss";
import profileImg from "@assets/hero.png";

export const Home = () => {
  return (
    <section id="Home" className={styles.Home}>
        <div className={styles.bannerContainer}>
            <div className={styles.imgContainer}>
                <img src={profileImg} alt="" />
            </div>
            <h1>Cristian Esquivel</h1>
        </div>
    </section>
  );
};
