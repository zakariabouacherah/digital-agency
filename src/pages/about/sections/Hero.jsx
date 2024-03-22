import Banner from "../../../components/Banner";
import bgBanner from "../../../assets/images/banner_bg.jpg";

const Hero = () => {
  return (
    <>
      <Banner bgPath={bgBanner}>
        <h1 className="text-4xl md:text-6xl  z-10">ABOUT US</h1>
      </Banner>
    </>
  );
};

export default Hero;
