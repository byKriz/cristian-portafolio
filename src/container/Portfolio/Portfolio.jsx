import React from "react";
import { Project } from "../../components/Project/Project";
import styles from "./Portfolio.module.scss";
import movieApp from "@assets/p2.png";
import projectImg3 from "@assets/p3.jpg";

export const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.Portfolio}>
      <div className={styles.portfolioContainer}>
        <h2>Portfolio</h2>
        <div className={styles.galery}>
          <Project
            name="React Pokédex"
            description="React - ViteJs - Axios"
            live="https://pokedexbykriz.netlify.app/"
            repository="https://github.com/byKriz/Poke-React-App"
          />
          <Project img={movieApp} 
          name="React Movie App"
          description="React - Vitejs - Axios"
          live="https://reactmovieappbykriz.netlify.app/"
          repository="https://github.com/byKriz/ReactMovieApp"
          />
          <Project img={projectImg3} />
          <Project img={projectImg3} />
          <Project img={projectImg3} />
          <Project img={projectImg3} />
        </div>
      </div>
    </section>
  );
};
