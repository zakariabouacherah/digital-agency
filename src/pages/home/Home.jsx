import Separation from "../../components/Separation";
import AboutSection from "./sections/AboutSection";
import HeroBottom from "./sections/HeroBottom";
import Hero from "./sections/HeroSection";
import Projects from "./sections/Projects";
import ServicesSection from "./sections/ServicesSection";
import Testimony from "./sections/Testimony";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroBottom />
      <Separation />
      <AboutSection />
      <Separation />
      <ServicesSection />
      <Separation />
      <Projects />
      <Separation />
      <Testimony />
      <Separation />
    </>
  );
};

export default Home;
