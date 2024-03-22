import Separation from "../../components/Separation";
import Hero from "./sections/Hero";
import OurAgency from "./sections/OurAgency";
import Stats from "./sections/Stats";
import Team from "../home/sections/Team";
import Testimony from "../home/sections/Testimony";

const About = () => {
  return (
    <>
      <Hero />
      <OurAgency />
      <Stats />
      <div className="fade-up">
        <Testimony />
      </div>
      <Separation />
      <div className="fade-up">
        <Team withoutButton />
      </div>
      <Separation />
    </>
  );
};

export default About;
