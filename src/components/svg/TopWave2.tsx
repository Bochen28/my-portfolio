import styles from "./topWave.module.sass";

function TopWave2() {
  return (
    <svg
      className={styles.wave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#4169E1"
        fill-opacity="1"
        d="M0,128L48,112C96,96,192,64,288,69.3C384,75,480,117,576,122.7C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
}

export default TopWave2;
