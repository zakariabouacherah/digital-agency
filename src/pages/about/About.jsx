import Separation from "../../components/Separation";
import Hero from "./sections/Hero";
import OurAgency from "./sections/OurAgency";
import Stats from "./sections/Stats";
import Team from "../home/sections/Team";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Testimony from "../home/sections/Testimony";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Hero />
      <OurAgency />
      <Stats />
      <div data-aos="fade-up">
        <Testimony />
      </div>
      <Separation />
      <div data-aos="fade-up">
        <Team withoutButton />
      </div>
      <Separation />
    </>
  );
};

export default About;
