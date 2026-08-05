import AuroraBackground from "./components/common/AuroraBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-[#030712] text-white">
      <AuroraBackground />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />
      
      <Contact />

      <Footer />

    </div>
  );
}