import Banner from "../../../components/Banner";
import bgBanner from "../../../assets/images/banner_bg1.jpg";

const Hero = () => {
  return (
    <div>
      <Banner bgPath={bgBanner}>
        <h1 className="text-4xl md:text-6xl  z-10">OUR SERVICES</h1>
      </Banner>
    </div>
  );
};

export default Hero;
