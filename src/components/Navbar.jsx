import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const changeColor = () => {
    if (window.scrollY >= 86) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  window.addEventListener("scroll", changeColor);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // const navItemStyle = `hover:text-[#FF5F1F]  border-transparent border-b-[2px] font-semibold hover:border-[#FF5F1F] transition ease-in duration-150 cursor-pointer`;
  // const avtiveNavItem = `${
  //   isHomePage ? "text-[#FF5F1F] border-b-[#FF5F1F]" : ""
  // }`;
  return (
    <nav
      className={` flex w-full items-center  z-30 justify-between py-2 md:py-4 md:px-12 px-6 transition-all ease-in duration-300 ${
        color
          ? "backdrop-blur-md bg-[#44444471] shadow-md fixed top-0"
          : "bg-transparent absolute "
      }`}
    >
      <Link to="/home" className="w-[200px] z-20 ">
        <img
          src={Logo}
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

      <div
        className={`${
          isOpen
            ? "top-0 left-0 opacity-100   "
            : "top-[-1000px] left-0 opacity-0 "
        } h-[80vh] w-screen absolute bg-black lg:bg-transparent  flex flex-col justify-center lg:h-auto lg:w-auto lg:relative lg:flex lg:flex-row lg:opacity-100 lg:top-0 items-center gap-8 transition-all duration-500 ease-in`}
      >
        <NavItem to="/" currentPath={location.pathname}>
          Home
        </NavItem>
        <NavItem to="/about" currentPath={location.pathname}>
          About
        </NavItem>
        <NavItem to="/services" currentPath={location.pathname}>
          Services
        </NavItem>
        <NavItem to="/projects" currentPath={location.pathname}>
          Projects
        </NavItem>
        <NavItem to="/clients" currentPath={location.pathname}>
          Clients
        </NavItem>
        <NavItem to="/team" currentPath={location.pathname}>
          Team
        </NavItem>
        <NavItem to="/blog" currentPath={location.pathname}>
          Blog
        </NavItem>
        <NavItem to="/contact" currentPath={location.pathname}>
          Contact
        </NavItem>
      </div>
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
