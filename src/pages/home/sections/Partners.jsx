const Partners = () => {
  const logos = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center gap-2 h-[100px] md:h-[150px] lg:h-[200px] ">
      {logos.map((item, index) => (
        <div className="w-full h-full" key={index}>
          <img
            src={`../../../public/images/partner${item}.png`}
            alt="logo"
            className="w-full h-full object-contain saturate-0 hover:saturate-100 ease-in duration-200"
          />
        </div>
      ))}
    </div>
  );
};

export default Partners;
