import styles from "./rightWave.module.sass";

function RightWave1() {
  return (
    <svg
      className={styles.wave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#4169E1"
        fillOpacity="1"
        d="M0,288L48,250.7C96,213,192,139,288,144C384,149,480,235,576,240C672,245,768,171,864,138.7C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
}

export default RightWave1;
