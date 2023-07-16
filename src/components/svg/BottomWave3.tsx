import styles from "./bottomWave.module.sass";

function BottomWave3() {
  return (
    <svg
      className={styles.wave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#4169E1"
        fill-opacity="1"
        d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,186.7C672,181,768,171,864,186.7C960,203,1056,245,1152,256C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
}

export default BottomWave3;