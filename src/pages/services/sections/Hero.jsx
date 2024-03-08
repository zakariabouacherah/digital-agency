import Banner from "../../../components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Banner bgPath={"../../../public/images/banner_bg1.jpg"}>
        <h1 data-aos="fade-up" className="text-4xl md:text-6xl  z-10">
          OUR SERVICES
        </h1>
      </Banner>
    </div>
  );
};

export default Hero;
