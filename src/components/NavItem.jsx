import { Link } from "react-router-dom";

const NavItem = ({ to, currentPath, children }) => {
  const isActive = to === currentPath;

  return (
    <Link
      to={to}
      className={`relative hover:text-[#FF5F1F] font-semibold  transition ease-in duration-150 cursor-pointer navItem  ${
        isActive ? "text-[#FF5F1F] navItem2" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavItem;
