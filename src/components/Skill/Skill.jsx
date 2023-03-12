import React from "react";
import styles from "./Skill.module.scss";
import { IoLogoJavascript, IoLogoHtml5, IoLogoSass } from "react-icons/io";
import { AiOutlineApi } from "react-icons/ai";
import { FaPython, FaReact, FaPeopleCarry } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { BsGit } from "react-icons/bs";

const icons = {
  js: <IoLogoJavascript />,
  html: <IoLogoHtml5 />,
  sass: <IoLogoSass />,
  react: <FaReact />,
  api: <AiOutlineApi />,
  python: <FaPython />,
  tailwind: <SiTailwindcss />,
  git: <BsGit />,
  vitejs: <SiVite />,
  teamwork: <FaPeopleCarry />,
  communication: <RiTeamFill />,
};

export const Skill = ({ tech = "Javascript", icon = "js" }) => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skill}>
        <div className={styles.skillIcon}>{icons[icon]}</div>
      </div>
      <span className={styles.skillName}>{tech}</span>
    </div>
  );
};
