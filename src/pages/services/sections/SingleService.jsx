import Banner from "../../../components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useService } from "../../../context/ServiceContext";
import Separation from "../../../components/Separation";
import { TbChevronRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const SingleService = () => {
  const { selectedService } = useService();
  console.log(selectedService);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="min-h-screen">
      {selectedService && (
        <>
          <Banner bgPath={"../../../public/images/banner_bg1.jpg"}>
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-6xl z-10 flex items-center flex-col gap-4"
            >
              {selectedService.title}
            </h1>
          </Banner>

          <div className="flex flex-col gap-8 px-8 md:px-16 lg:px-32 mt-12">
            <div className="flex items-center gap-2 text-md md:text-lg ">
              {/* <div className="relative px-1 bg-rose-50">
                <Link to="/home" className="relative z-10">
                  Home
                </Link>
                <div className="absolute top-[50%] translate-y-[-50%] right-[-0.6rem] h-[1.27rem] w-[1.27rem] rotate-[45deg]  bg-rose-50 z-0"></div>
              </div> */}

              <Link to="/home" className="hover:underline hover:text-[#ff5f1f]">
                Home
              </Link>
              <TbChevronRight />
              <Link
                to="/services"
                className="hover:underline hover:text-[#ff5f1f]"
              >
                Services
              </Link>
              <TbChevronRight />

              <div className="text-[#ff5f1f] cursor-pointer font-semibold">
                {selectedService.title}
              </div>
            </div>
            <img
              src={selectedService.svgPath}
              alt={selectedService.title}
              className="self-center w-[200px] md:w-[400px] "
            />
            <div>
              <div className="font-semibold text-3xl mb-4">
                {selectedService.title}
              </div>
              <div className="font-light text-md mt-2">
                {" "}
                {selectedService.description}{" "}
              </div>
            </div>
          </div>
          <Separation />
        </>
      )}
    </div>
  );
};

export default SingleService;
