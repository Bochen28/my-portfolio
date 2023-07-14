import styles from "./navbar.module.sass";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contentBox}>
        <h1>Bochen</h1>
        <ul className={styles.anchors}>
          <li>
            <a href="#about">
              <h2>About me</h2>
            </a>
          </li>
          <li>
            <a href="#skills">
              <h2>Skills</h2>
            </a>
          </li>
          <li>
            <a>
              <h2>Projects</h2>
            </a>
          </li>
          <li>
            <a className={styles.contact}>
              <h2>Contact</h2>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
