import Navbar from "@/components/navbar/Navbar";
import Intro from "@/components/sections/intro/Intro";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skills/Skills";
import Projects from "@/components/sections/projects/Projects";
import Footer from "@/components/sections/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
