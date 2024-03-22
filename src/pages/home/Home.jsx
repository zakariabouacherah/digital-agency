import Separation from "../../components/Separation";
import AboutSection from "./sections/AboutSection";
import BlogSection from "./sections/BlogSection";
import Contact from "./sections/Contact";
import HeroBottom from "./sections/HeroBottom";
import Hero from "./sections/HeroSection";
import Newsletter from "./sections/Newsletter";
import Partners from "./sections/Partners";
import Projects from "./sections/Projects";
import ServicesSection from "./sections/ServicesSection";
import Team from "./sections/Team";
import Testimony from "./sections/Testimony";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Hero />
      <HeroBottom />
      <Separation />

      <div className="fade-up">
        <AboutSection />
      </div>
      <Separation />

      <div className="fade-up">
        <ServicesSection />
      </div>
      <Separation />

      <div className="fade-up">
        <Projects />
      </div>
      <Separation />
      <div className="fade-up">
        <Testimony />
      </div>
      <div className="fade-up">
        <Partners />
      </div>
      <div className="fade-up">
        <Team withoutButton />
      </div>
      <div className="fade-up">
        <Newsletter />
      </div>
      <div className="fade-up">
        <BlogSection />
      </div>
      <Separation />
      <div className="fade-up">
        <Contact />
      </div>
      <Separation />
    </>
  );
};

export default Home;
