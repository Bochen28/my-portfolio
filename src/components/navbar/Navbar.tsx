import styles from "./navbar.module.sass";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contentBox}>
        <a href="#intro"><h1>Bochen</h1></a>
        <ul className={styles.anchors}>
          <li className={styles.jumpBtn}>
            <a href="#about">
              <h2>About me</h2>
            </a>
          </li>
          <li className={styles.jumpBtn}>
            <a href="#skills">
              <h2>Skills</h2>
            </a>
          </li>
          <li className={styles.jumpBtn}>
            <a href="#projects">
              <h2>Projects</h2>
            </a>
          </li>
          <li>
            <a className={styles.contact} href="#contact">
              <h2>Contact</h2>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
