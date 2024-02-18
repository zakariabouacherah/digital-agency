import { useState } from "react";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 76) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const navItemStyle =
    "hover:text-[#FF5F1F] border-transparent border-b-[2px] font-semibold hover:border-[#FF5F1F] transition ease-in duration-150 cursor-pointer";
  return (
    <nav
      className={`fixed top-0 flex w-full items-center z-30 justify-between py-8 px-12  ${
        color ? "backdrop-blur-md bg-[#44444471] shadow-md" : "bg-transparent"
      }`}
    >
      <div>logo</div>
      <ul className="hidden lg:flex items-center gap-8">
        <li className={navItemStyle}>Home</li>
        <li className={navItemStyle}>About</li>
        <li className={navItemStyle}>Services</li>
        <li className={navItemStyle}>Projects</li>
        <li className={navItemStyle}>Clients</li>
        <li className={navItemStyle}>Teams</li>
        <li className={navItemStyle}>Blog</li>
        <li className={navItemStyle}>Contact</li>
      </ul>
      <div className="relative w-[25px] h-[25px] cursor-pointer lg:hidden ">
        <span className="bg-white h-[3px] w-full rounded-md absolute left-0 top-0  "></span>
        <span className="bg-white h-[3px] w-full rounded-md absolute left-0 top-[50%] translate-y-[-50%]  "></span>
        <span className="bg-white h-[3px] w-full rounded-md absolute left-0 bottom-0  "></span>
      </div>
    </nav>
  );
};

export default Navbar;
