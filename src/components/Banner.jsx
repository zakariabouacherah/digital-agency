const Banner = ({ children, bgPath }) => {
  return (
    <div
      style={{
        background: `url(${bgPath}) center center no-repeat`,
        backgroundSize: "cover",
      }}
      className="h-[60vh] flex items-center justify-center banner relative  "
    >
      {children}
    </div>
  );
};

export default Banner;
