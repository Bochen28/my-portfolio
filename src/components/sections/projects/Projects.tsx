import ProjectCard from "@/components/projectCard/ProjectCard";
import styles from "./projects.module.sass";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.content}>
        <h2 className={styles.heading}>My Projects:</h2>
        <ProjectCard
          name=""
          gitLink="https://github.com/Bochen28/Home-Budget"
          liveLink=""
        />
      </div>
    </section>
  );
}

export default Projects;
