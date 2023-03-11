import React from "react";
import styles from "./AboutMe.module.scss";
import cv from "@assets/prueba.pdf";

export const AboutMe = () => {
  return (
    <section id="aboutme" className={styles.AboutMe}>
      <div className={styles.aboutContainer}>
        <h2>About Me</h2>
        <p>
          <span>Hi, I am Cristian Esquivel, </span>a frontend web developer with
          a passion for creating beautiful and functional user interfaces. I
          specialize in ReactJS, a powerful JavaScript library for building
          dynamic and interactive web applications. I have experience in
          developing responsive websites using HTML, CSS and JavaScript, as well
          as working with RESTful APIs and popular frameworks like Bootstrap and
          Tailwind. I also have knowledge of web accessibility, performance
          optimization.
        </p>
        <p>
          I'm always eager to learn new skills and technologies to improve my
          craft as a frontend developer. I enjoy collaborating with other
          developers and designers to create amazing web experiences for users.
        </p>
        <p>
          If you are interested in working with me or just want to say hi, feel
          free to contact me through email or LinkedIn. I'd love to hear from
          you!
        </p>
        <a href={cv} download>
          Download Curriculum
        </a>
      </div>
    </section>
  );
};
