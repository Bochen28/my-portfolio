import styles from "./bottomWave.module.sass";

function BottomWave1() {
  return (
    <svg
      className={styles.wave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#4169E1"
        fill-opacity="1"
        d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,197.3C672,181,768,171,864,181.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
}

export default BottomWave1;
