import styles from "./projectCard.module.sass";

type ProjectProps = {
    name: string,
}

function ProjectCard({name}: ProjectProps) {
    return(
        <div className={styles.card}>
            <h2>{name}</h2>
        </div>
    )
}

export default ProjectCard;