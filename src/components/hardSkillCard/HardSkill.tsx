"use client";

import { useState } from "react";
import styles from "./hardSkill.module.sass";

function HardSkill() {
  const [isVisible, setVisible] = useState(true);

  const toggleDropdown = () => {
    setVisible(!isVisible);
  };

  return (
    <div className={styles.content}>
      <h2>Hard Skills</h2>
      <div className={styles.card} onClick={toggleDropdown}>
        <ul className={styles.skillsList}>
          <li>Html</li>
          <li>Css</li>
          <li>Sass</li>
          <li>Js</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>BootStrap</li>
        </ul>
        <div
          className={styles.dropdown}
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(90%)",
          }}
        >
          <h2>What's next:</h2>
          <ul className={styles.skillsList}>
            <li>Next</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HardSkill;
