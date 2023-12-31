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
          liveLink="https://budget.bochen.pro/"
          background="1.png"
        />
        <ProjectCard
          text="Currency calculator that gets live data from an API"
          gitLink="https://github.com/Bochen28/Currency-calculator"
          liveLink="https://calculator.bochen.pro/"
          background="2.png"
        />
        <ProjectCard
          text="Website that helps you store and organize your links"
          gitLink="https://github.com/Bochen28/my-link/"
          liveLink="https://my-link.bochen.pro/"
          background="3.png"
        />
      </div>
    </section>
  );
}

export default Projects;
