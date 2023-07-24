import ProjectCard from "@/components/projectCard/ProjectCard";
import styles from "./projects.module.sass";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.content}>
        <h2 className={styles.heading}>My Projects:</h2>
        <ProjectCard name="Sample Text" gitLink="" liveLink="" />
      </div>
    </section>
  );
}

export default Projects;
