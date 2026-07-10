
import Hero from "../components/sections/Hero/Hero";
import Skills from "../components/sections/Skills/Skills";
import Background from "../components/Background";
import Spotlight from "../components/Spotlight";
import About from "../components/sections/About/About";
import Projects from "../components/sections/Projects/Projects";
import Navbar from "../components/Navbar/Navbar";
import Education from "../components/sections/Education/Education";
import Contact from "../components/sections/Contact/Contact";
import ThankYou from "../components/sections/ThankYou/ThankYou";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">

    
     
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Background />
        <Contact />
        <Spotlight />

        
          
   

      </div>

    </main>
  );
}