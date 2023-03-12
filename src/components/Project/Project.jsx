import React from "react";
import styles from "./Project.module.scss";
import projectImg from "@assets/p1.jpg";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";

export const Project = ({
  img = projectImg,
  name = "Diseño Creativo",
  description = "Fotografía",
  live = "#",
  repository = "#",
}) => {
  return (
    <div className={styles.Project}>
      <img src={img} alt="" />
      <div className={styles.overlay}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.links}>
          <a href={live}>
            <MdOutlineWebAsset />
          </a>
          <a href={repository}>
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
