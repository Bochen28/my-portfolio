"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./projectCard.module.sass";
import { useState } from "react";

type ProjectProps = {
  name: string;
  gitLink: string;
  liveLink: string;
  background: string;
};

function ProjectCard({ name, gitLink, liveLink, background }: ProjectProps) {
  const [isReversed, setReversed] = useState(true);
  const toggleReverse = () => {
    setReversed(!isReversed);
  };

  return (
    <div
      className={styles.card}
      onClick={toggleReverse}
      style={{ transform: isReversed ? "rotateY(0)" : "rotateY(180deg)" }}
    >
      <div
        className={styles.front}
        style={{
          backgroundImage: `url(/assets/${background})`,
          opacity: isReversed ? "1" : "0",
        }}
      >
        <h2>{name}</h2>
      </div>
      <div
        className={styles.back}
        style={{
          opacity: isReversed ? "0" : "1",
        }}
      >
        <h2>sample</h2>
        <a className={styles.projectBtn} href={gitLink} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className={styles.projectBtn} href={liveLink} target="_blank">
          <FontAwesomeIcon icon={faSatelliteDish} />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
