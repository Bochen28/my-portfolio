import styles from "./hardSkill.module.sass";

function HardSkill() {
  return (
    <div className={styles.content}>
      <h2>Hard Skills</h2>
      <div className={styles.card}>
        <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Sass</li>
            <li>Js</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>NextJs</li>
            <li>BootStrap</li>
        </ul>
      </div>
    </div>
  );
}

export default HardSkill;
