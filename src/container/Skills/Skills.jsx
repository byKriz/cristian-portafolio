import React from "react";
import { Skill } from "../../components/Skill/Skill";
import styles from "./Skills.module.scss";

export const Skills = () => {
  return (
    <section id="skills" className={styles.Skills}>
      <div className={styles.skillsContainer}>
        <h2>Skills</h2>
        <div className={styles.row}>
          {/* <div className={styles.col}> */}
            {/* <h3>Technical Skills</h3> */}
            <Skill tech="HTML" icon="html" />
            <Skill tech="Sass" icon="sass" />
            <Skill tech="Javascript" icon="js" />
            <Skill tech="ReactJs" icon="react" />
            <Skill tech="API" icon="api" />
            <Skill tech="Tailwind CSS" icon="tailwind" />
            <Skill tech="Python" icon="python" />
          {/* </div> */}
          {/* <div className={styles.col}>
            <h3>Soft Skills</h3>
            <Skill tech="Team Work" icon="teamwork" />

          </div> */}
        </div>
      </div>
    </section>
  );
};
