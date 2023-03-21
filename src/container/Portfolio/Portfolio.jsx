import React from "react";
import { Project } from "../../components/Project/Project";
import styles from "./Portfolio.module.scss";
import movieApp from "@assets/p2.png";
import cryptoView from "@assets/p3.png";

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
          <Project img={cryptoView} 
          name="CryptoView"
          description="React - Tailwind - Firebase"
          live="https://cryptoviewbykriz.netlify.app/"
          repository="https://github.com/byKriz/crypto-view"
          />
        </div>
      </div>
    </section>
  );
};
