import React from "react";
import styles from "./Project.module.scss";
import projectImg from "@assets/p1.png";
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
          <a href={live} target="_blank">
            <MdOutlineWebAsset />
          </a>
          <a href={repository} target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
