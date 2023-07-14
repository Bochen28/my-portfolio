import TopWave from "@/components/svg/topWave1";
import styles from "./about.module.sass";

function About() {
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.content}>
          <h1>Time for some bragging.</h1>
          <h2>
            I'm a <span>passionate and dedicated</span> junior frontend
            developer with a<span> strong enthusiasm</span> for creating
            engaging and user-friendly web experiences.{" "}
            <span>Adaptability</span> is one of my strengths. I embrace new
            technologies and trends in the ever-evolving world of frontend
            development,{" "}
            <span>constantly seeking opportunities to expand my knowledge</span>
            . Feel free to reach out to me for any opportunities,
            collaborations, or simply to connect. Let's bring ideas to life and
            make the web a better place!
          </h2>
        </div>
        <TopWave />
      </section>
    </>
  );
}

export default About;
