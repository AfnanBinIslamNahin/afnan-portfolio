// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navigation from './Components/Navbar'
// import About from './Components/About'
// import Hero from './Components/Hero'
// import Skills from './Components/Skills'
// import Projects from './Components/Projects'
// import Contact from './Components/Contact'
// import Education from './Components/Education'
// import Mascot from "./Components/Mascot"
// function App() {


//   return (
//     <>
//       <Navigation></Navigation>
//       <main>
//         <Hero></Hero>
//         <About></About>
//         <Education />
//         <Skills></Skills>
//         <Projects></Projects>
//         <Contact></Contact>
//         <Mascot />
//       </main>
//     </>
//   )
// }

// export default App

import { useEffect, useState } from "react";
import Navigation from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Mascot from "./Components/Mascot";
function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "skills", "projects", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Mascot activeSection={activeSection} />
    </>
  );
}

export default App;