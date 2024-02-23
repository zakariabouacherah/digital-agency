import ScrollToTop from "react-scroll-to-top";
import FooterHeading from "./FooterHeading";
import {
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandInstagram,
} from "react-icons/tb";
import { useEffect } from "react";

const Footer = () => {
  const smStyle =
    "w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-[#fe5e1f]";
  return (
    <>
      <ScrollToTop smooth top={800} color="white" width="18" height="18" />
      <footer className={` px-8 md:px-16 lg:px-32 bg-[#fff2] -mt-16 pt-8 pb-6`}>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-[50%] ">
            <img
              src="../../../public/images/logo.png"
              alt="logo"
              width="200px"
              className="mb-4"
            />
            <p className="text-sm text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates error veniam sit enim! Est!
            </p>
          </div>
          <div className="lg:w-[30%] text-sm text-gray-100 ">
            <div className="lg:h-[75px] flex items-center mb-4 ">
              <FooterHeading label="Madrid" />
            </div>
            <p>185 Heating Binraw</p>
            <p>Loca Modric</p>
            <p>Real Madrid</p>
            <p>Espagne</p>
          </div>
          <div className="lg:w-[30%] text-sm text-gray-100  ">
            <div className="lg:h-[75px] flex items-center mb-4 ">
              <FooterHeading label="Agadir" />
            </div>
            <p>80 000 Agadir</p>
            <p>Ait Mellou</p>
            <p>Sous Massa</p>
            <p>Morocco</p>
          </div>
          <div className="lg:w-[40%]">
            <div className="lg:h-[75px] flex items-center mb-4 ">
              <FooterHeading label="Contact" />
            </div>
            <p className="text-sm font-light text-gray-200">
              info@datadriven.io
            </p>
            <p className="text-sm font-light text-gray-200">
              services@datadriven.com
            </p>
            <p className="text-sm font-light text-gray-200">+212 699 999 000</p>
            <div className="flex gap-4 items-center mt-2">
              <div className={smStyle}>
                <TbBrandFacebook />
              </div>
              <div className={smStyle}>
                <TbBrandTwitter />
              </div>
              <div className={smStyle}>
                <TbBrandLinkedin />
              </div>
              <div className={smStyle}>
                <TbBrandInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-neutral-300">
          © 2024 DataDriven. All right are reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
