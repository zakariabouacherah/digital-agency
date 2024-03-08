import { Link } from "react-router-dom";

const NavItem = ({ to, currentPath, children }) => {
  const isActive = to === currentPath || to.startsWith("/" + currentPath);
  const navItemStyle = `relative hover:text-[#FF5F1F] font-semibold  transition ease-in duration-150 cursor-pointer navItem `;
  const activeNavItemStyle = `text-[#FF5F1F] navItem2`;

  return (
    <Link
      to={to}
      className={`${navItemStyle} ${isActive ? activeNavItemStyle : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavItem;
