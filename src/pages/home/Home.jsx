import Separation from "../../components/Separation";
import AboutSection from "./sections/AboutSection";
import BlogSection from "./sections/BlogSection";
import HeroBottom from "./sections/HeroBottom";
import Hero from "./sections/HeroSection";
import Newsletter from "./sections/Newsletter";
import Partners from "./sections/Partners";
import Projects from "./sections/Projects";
import ServicesSection from "./sections/ServicesSection";
import Team from "./sections/Team";
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
      <Partners />
      <Team />
      <Newsletter />
      <BlogSection />
      <Separation />
    </>
  );
};

export default Home;
