import TopWave from "@/components/svg/TopWave2";
import RightWave from "@/components/svg/RightWave";
import LeftWave from "@/components/svg/LeftWave";
import HardSkill from "@/components/hardSkillCard/HardSkill";
import SoftSkill from "@/components/softSkillCard/SoftSkill";
import styles from "./skills.module.sass";

function Skills() {
  return (
    <>
      <section id="skills" className={styles.skills}>
        <div className={styles.content}>
          <HardSkill />
          <SoftSkill />
        </div>
        <TopWave />
        <div className={styles.sideWaves}>
          <LeftWave />
          <RightWave />
        </div>
        <h2 className={styles.sectionBreak}>
          Let's see what these skills can make
        </h2>
        <h2 className={styles.arrow}>&#8595;</h2>
      </section>
    </>
  );
}

export default Skills;
