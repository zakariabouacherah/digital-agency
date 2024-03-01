import { useState, useEffect } from "react";
import StatsItem from "../../../components/StatsItems";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="bg-gradient-to-br   from-[#fff1] to-[#fff2] p-6 rounded-md flex flex-col lg:flex-row lg:items-center gap-4 my-8 mx-8 md:mx-16 lg:mx-32"
    >
      <div className="lg:w-[50%] lg:px-6 ">
        <div className="text-2xl font-bold mb-2">Why us?</div>
        <div className="text-sm font-light lg:w-[80%] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex inventore
          culpa nam nesciunt saepe alias quaerat nisi expedita mollitia, velit
          blanditiis porro.
        </div>
      </div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        {counterOn && (
          <div className="lg:w-[100%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 ">
            <StatsItem number={"12"} label={"Years of experience"} />
            <StatsItem number={"86"} label={"Happy clients"} />
            <StatsItem number={"32"} label={"Business partner"} />
          </div>
        )}
        {/* <StatsItem number={"5+"} label={"Years of experience"} /> */}
      </ScrollTrigger>
    </div>
  );
};

export default Stats;
