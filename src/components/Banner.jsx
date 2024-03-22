const Banner = ({ children, bgPath }) => {
  return (
    <div
      style={{
        background: `url(${bgPath}) center center no-repeat`,
        backgroundSize: "cover",
      }}
      className=" h-[40dvh] lg:h-[60dvh] flex items-center justify-center banner relative bg-fixed  "
    >
      {children}
    </div>
  );
};

export default Banner;
