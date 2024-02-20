const FooterHeading = ({ label }) => {
  return (
    <div className="font-bold text-xl">
      <div className="capitalize"> {label} </div>
      <div className="w-14 h-0.5 bg-[#ff5f1f] rounded-md"></div>
    </div>
  );
};

export default FooterHeading;
