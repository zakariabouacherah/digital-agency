import Br from "./Br";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero2Item = ({ icon, title, text, delay }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="parent bg-[#fff2] relative px-6 py-20 rounded-sm w-[300px] w-max-[100%] lg:w-full hover:bg-[#ff5f1f]  transition-all"
    >
      <div className="flex flex-col gap-2 relative">
        <span className="children1 text-4xl text-[#FF5F1F]"> {icon} </span>
        <div className="mb-3">
          <h1 className="text-md font-semibold mb-1"> {title} </h1>
          <Br />
        </div>
        <p className="text-sm font-extralight"> {text} </p>
      </div>
      <div className="absolute bottom-0 right-0 w-[60px] h-[60px] flex items-end justify-end flex-col gap-2 ">
        <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
        <div className="flex items-center gap-2">
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="children h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero2Item;
