import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./projectCard.module.sass";

type ProjectProps = {
  name: string;
  gitLink: string;
  liveLink: string;
};

function ProjectCard({ name, gitLink, liveLink }: ProjectProps) {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <h2>{name}</h2>
      </div>
      <div className={styles.back}>
        <h2>sample</h2>
        <a href={gitLink}><FontAwesomeIcon icon={faGithub} /></a>
        <a href={liveLink}><FontAwesomeIcon icon={faSatelliteDish} /></a>
      </div>
    </div>
  );
}

export default ProjectCard;
