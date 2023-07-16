import TopWave from "@/components/svg/TopWave2";
import BottomWave from  "@/components/svg/BottomWave3";
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
        <BottomWave />
      </section>
    </>
  );
}

export default Skills;
