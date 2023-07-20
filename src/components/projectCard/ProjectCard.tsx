import styles from "./projectCard.module.sass";

type ProjectProps = {
    name: string,
}

function ProjectCard({name}: ProjectProps) {
    return(
        <div className={styles.card}>
            <h2 className={styles.front}>{name}</h2>
            <h2 className={styles.back}>sample</h2>
        </div>
    )
}

export default ProjectCard;