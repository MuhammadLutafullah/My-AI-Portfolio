// App.jsx
import { useRef } from "react"; // Add this import

import "./App.css";
import ContactSection from "./components/ContactSection/ContactSection";
import CustomTabs from "./components/CustomTabs/CustomTabs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Slider360 from "./components/Slider360/Slider360";
import StackSlider from "./components/StackSlider/StackSlider";
// ... other imports

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const whyRef = useRef(null);

  const scrollToSection = (ref) => {
    const yOffset = -100;
    const element = ref.current;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onPortfolioClick={() => scrollToSection(portfolioRef)}
        onContactClick={() => scrollToSection(contactRef)}
        onWhyClick={() => scrollToSection(whyRef)}
      />
      <div ref={homeRef} id="home">
        <Hero />
      </div>
      <StackSlider />
      <div ref={aboutRef} id="about">
        <Resume />
      </div>
      <div ref={whyRef} id="why">
        <Slider360 />
      </div>

      <div ref={portfolioRef} id="portfolio">
        <Projects />
      </div>
      <div ref={contactRef} id="contact">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
