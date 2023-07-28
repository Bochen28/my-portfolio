import styles from "./softSkill.module.sass";

function SoftSkill() {
  return (
    <div className={styles.content}>
      <h2>Soft Skills</h2>
      <div className={styles.card}>
        <ul className={styles.skillsList}>
          <li>Creativity</li>
          <li>Critical Thinking</li>
          <li>Teamwork</li>
          <li>Time Management</li>
        </ul>
      </div>
    </div>
  );
}

export default SoftSkill;