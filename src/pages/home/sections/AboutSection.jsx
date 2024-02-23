import Heading from "../../../components/Heading";
import Button from "../../../components/Button";
import { SlBadge } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-32">
      <div className="flex flex-col  items-center gap-6 lg:flex-row lg:items-start">
        <div className="flex flex-col gap-6 lg:w-[50%]">
          <Heading
            subTitle="About us"
            title="Leading the way in Creative Digital Agency"
          />
          <div className="flex gap-4">
            <div className="text-3xl text-[#FF5F1F] pt-2">
              <SlBadge />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Best digital agency in the world
              </h2>
              <p className="font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                quaerat voluptates, repellendus vel perspiciatis.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl text-[#FF5F1F] pt-2">
              <SlBadge />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Best digital agency in the world
              </h2>
              <p className="font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                quaerat voluptates, repellendus vel perspiciatis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi quaerat
                voluptates, repellendus . <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                dignissimos excepturi error?
              </p>
            </div>
          </div>
          <div className="w-[50%] ">
            <img src="../../../public/images/signature.png" alt="signature" />
          </div>
        </div>
        <div className="relative w-[80%] lg:w-[50%] ">
          <div className="relative w-full">
            <img
              src="../../../public/images/aboutImage.png"
              alt="about us"
              width={600}
              className=" h-full object-cover"
            />
          </div>
          <div className="absolute right-6 bottom-6">
            <Button label="More About Us" icon={<FaArrowRight />} to="/about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
