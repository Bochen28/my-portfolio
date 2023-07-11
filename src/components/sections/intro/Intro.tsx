import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./intro.module.sass";

const gitICon = <FontAwesomeIcon icon={faGithub} className={styles.icon} />;

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.introText}>
        <h1>
          Hi, I am <span>Patryk.</span><br />
          Your Future Frontend Developer
        </h1>
        <a className={styles.resume}>
          <h3>My Resume</h3>
        </a>
        <a className={styles.gitBtn} href="https://github.com/Bochen28" target="_blank">
          {gitICon}
        </a>
      </div>
    </section>
  );
}

export default Intro;
