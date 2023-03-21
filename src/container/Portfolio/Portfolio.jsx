import React from "react";
import { Project } from "../../components/Project/Project";
import styles from "./Portfolio.module.scss";
import projectImg2 from "@assets/p2.jpg";
import projectImg3 from "@assets/p3.jpg";

export const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.Portfolio}>
      <div className={styles.portfolioContainer}>
        <h2>Portfolio</h2>
        <div className={styles.galery}>
          <Project
            name="React Pokédex"
            description="React - ViteJs - Sass"
            live="https://pokedexbykriz.netlify.app/"
            repository="https://github.com/byKriz/Poke-React-App"
          />
          <Project img={projectImg2} />
          <Project img={projectImg3} />
          <Project img={projectImg3} />
          <Project img={projectImg3} />
          <Project img={projectImg3} />
        </div>
      </div>
    </section>
  );
};
