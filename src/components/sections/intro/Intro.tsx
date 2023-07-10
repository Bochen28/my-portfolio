import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./intro.module.sass";

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.introText}>
        <h1>
          Hi, I am <span>Patryk.</span>
        </h1>
        <a className={styles.resume}>
          <h3>My Resume</h3>
        </a>
        <a className={styles.git}>
          <FontAwesomeIcon icon={faGithub} style={{ color: "#4169e1" }} />
        </a>
      </div>
    </section>
  );
}

export default Intro;
