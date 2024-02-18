const Button = ({ label, icon, small, outline }) => {
  return (
    <button
      className={`py-3 px-4 bg-[#FF5F1F] text-sm flex items-center justify-center gap-2 rounded-sm hover:bg-[#d54e19] ${
        small ? "text-sm py-1 px-2" : ""
      }
      ${
        outline ? "bg-black border-[1px] border-[#FF5F1F] text-[#FF5F1F] " : ""
      }`}
    >
      <span> {label} </span>
      <span> {icon} </span>
    </button>
  );
};

export default Button;
