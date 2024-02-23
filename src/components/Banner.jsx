const Banner = ({ children, bgPath }) => {
  return (
    <div
      style={{
        background: `url(${bgPath}) bottom no-repeat`,
        backgroundSize: "cover",
      }}
      className="h-[60vh] flex items-center justify-center bg-no-repeat  bg-center banner relative  "
    >
      {children}
    </div>
  );
};

export default Banner;
