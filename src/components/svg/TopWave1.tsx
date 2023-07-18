import styles from "./topWave.module.sass";

function TopWave1() {
  return (
    <svg
      className={styles.wave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#4169E1"
        fillOpacity="1"
        d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,240C672,256,768,224,864,186.7C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
}

export default TopWave1;
