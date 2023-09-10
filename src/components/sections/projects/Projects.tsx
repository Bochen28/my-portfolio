import ProjectCard from "@/components/projectCard/ProjectCard";
import styles from "./projects.module.sass";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.content}>
        <h2 className={styles.heading}>My Projects (click them):</h2>
        <ProjectCard
          text="A simple web app that helps you control your daily expenses"
          gitLink="https://github.com/Bochen28/Home-Budget"
          liveLink=""
          background="1.png"
        />
        <ProjectCard
          text="Currency calculator that gets live data from NBP API"
          gitLink="https://github.com/Bochen28/Currency-calculator"
          liveLink=""
          background="2.png"
        />
        <ProjectCard
          text="Exemplary website"
          gitLink="https://github.com/Bochen28/React-Page-Example"
          liveLink=""
          background="3.png"
        />
      </div>
    </section>
  );
}

export default Projects;
