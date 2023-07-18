import ProjectCard from "@/components/projectCard/ProjectCard";
import styles from "./projects.module.sass";

function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.content}>
                <ProjectCard name="Sample Text" />
            </div>
        </section>
    )
}

export default Projects;