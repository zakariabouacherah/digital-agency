import Button from "../../../components/Button";
import { PiTriangleLight } from "react-icons/pi";
import { TypewriterEffect } from "../../../components/ui/typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  const words = [
    {
      text: "Trusted",
    },
    {
      text: "Digital",
    },
    {
      text: "agency",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div
        className="h-[70vh] h-max-screen flex bg-contain xl:bg-cover bg-no-repeat bg-right lg:bg-center items-center lg:justify-start justify-center px-8 md:px-16 lg:px-32"
        style={{
          backgroundImage: 'url("../../../public/images/heroSectionBg.png")',
        }}
      >
        <div
          data-aos="fade-up"
          className="flex flex-col gap-6 w-full lg:w-[50%]"
        >
          <h1 className="text-5xl font-semibold relative">
            <span className="relative z-10">
              <TypewriterEffect
                words={words}
                cursorClassName={"bg-[#ff5f1f]"}
              />
            </span>
            <span className="absolute top-0 left-0 bg-[#FF5F1F] w-[20px] h-full  z-0"></span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-sm opacity-85 font-light hidden lg:block"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            obcaecati maiores, iusto odit dignissimos quis! Sit? Lorem ipsum
            dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique expedita in corrupti!
          </p>
          <div
            className="flex items-center gap-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Button label="Get Started" />
            <div className="flex items-center gap-2">
              <div className="text-[#FF5F1F] text-xl flex items-center justify-center border-[1px] border-[#FF5F1F] w-[40px] h-[40px] rounded-full hover:bg-[#FF5F1F] hover:text-white transition ease-in-out ">
                <PiTriangleLight className="rotate-[90deg]" />
              </div>
              <span className="text-sm font-extralight">Watch video</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
