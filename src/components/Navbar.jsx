import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 76) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  window.addEventListener("scroll", changeColor);
  const navItemStyle =
    "hover:text-[#FF5F1F] border-transparent border-b-[2px] font-semibold hover:border-[#FF5F1F] transition ease-in duration-150 cursor-pointer";
  return (
    <nav
      className={`fixed top-0 flex w-full items-center z-30 justify-between py-2 md:py-4 md:px-12 px-6  ${
        color ? "backdrop-blur-md bg-[#44444471] shadow-md" : "bg-transparent"
      }`}
    >
      <Link to="/" className="w-[200px] z-20 ">
        <img
          src="../../../public/images/logo.png"
          alt="datadriven"
          width="100%"
          className="w-full h-full object-contain"
        />
      </Link>
      {isOpen ? (
        <div
          onClick={toggleNavbar}
          className="w-screen h-screen bg-[#fff4] backdrop-blur-sm absolute top-0 left-0 "
        ></div>
      ) : (
        ""
      )}

      <ul
        className={`${
          isOpen ? "top-0 left-0   " : "left-[-1000px] "
        } h-[80vh] w-screen absolute bg-black lg:bg-transparent  flex flex-col justify-center lg:h-auto lg:w-auto lg:relative lg:flex lg:flex-row lg:top-0 items-center gap-8 transition-all duration-700 ease-out`}
      >
        <li className={navItemStyle}>Home</li>
        <li className={navItemStyle}>About</li>
        <li className={navItemStyle}>Services</li>
        <li className={navItemStyle}>Projects</li>
        <li className={navItemStyle}>Clients</li>
        <li className={navItemStyle}>Teams</li>
        <li className={navItemStyle}>Blog</li>
        <li className={navItemStyle}>Contact</li>
      </ul>
      <div
        className="relative w-[25px] h-[25px] cursor-pointer lg:hidden"
        onClick={toggleNavbar}
      >
        <span
          className={`bg-white h-[3px] w-full rounded-md absolute left-0 top-0 transition-all duration-150 ease-in  ${
            isOpen ? "-rotate-45 top-[50%] translate-y-[-50%]" : ""
          }`}
        ></span>
        <span
          className={`bg-white h-[3px] w-full rounded-md absolute left-0 top-[50%] transition-all duration-150 ease-in translate-y-[-50%] ${
            isOpen ? "hidden" : ""
          }  `}
        ></span>
        <span
          className={`bg-white h-[3px] w-full rounded-md absolute left-0 bottom-0 transition-all duration-150 ease-in  ${
            isOpen ? "rotate-45 top-[50%] translate-y-[-50%]" : ""
          }`}
        ></span>
      </div>
    </nav>
  );
};

export default Navbar;
