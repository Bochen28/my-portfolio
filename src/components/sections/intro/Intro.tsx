"use client"
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import resume from "@/../public/assets/resume.pdf"
import Typed from "typed.js";
import Wave from "../../svg/BottomWave1";
import styles from "./intro.module.sass";

const gitICon = <FontAwesomeIcon icon={faGithub} className={styles.icon} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />;

function Intro() {
  useEffect(() => {
    const typed = new Typed("#heroText", {
      strings: ["Web Developer.", "UI/UX Enthusiast.", "Games lover."],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true
    });
  });

  return (
    <>
      <section id="intro" className={styles.intro}>
        <div className={styles.content}>
          <h1>
            Hi, I am <span>Patryk.</span>
            <br />
            <span id="heroText"></span>
          </h1>
          <a className={styles.resume} href={resume} download>
            <h3>My Resume</h3>
          </a>
          <a
            className={styles.btn}
            href="https://github.com/Bochen28"
            target="_blank"
          >
            {gitICon}
          </a>
          <a
            className={styles.btn}
            href="https://www.linkedin.com/in/patryk-bochenek-6458b4290/"
            target="_blank"
          >
            {linkedIn}
          </a>
        </div>
        <Wave />
      </section>
    </>
  );
}

export default Intro;
