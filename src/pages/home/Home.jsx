import Br from "../../components/Br";
import HeroBottom from "./sections/HeroBottom";
import Hero from "./sections/HeroSection";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroBottom />
      <div className="w-full flex items-center justify-center py-12">
        <Br vertical />
      </div>
    </>
  );
};

export default Home;
