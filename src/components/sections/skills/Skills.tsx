import TopWave from "@/components/svg/TopWave2";
import styles from "./skills.module.sass";

function Skills() {
  return (
    <>
      <section id="skills" className={styles.skills}>
        <div className={styles.content}></div>
        <TopWave />
      </section>
    </>
  );
}

export default Skills;
