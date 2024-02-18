const Member = ({ image, name, secteur }) => {
  return (
    <div className="bg-[#fff3] p-0 w-[100%]  overflow-hidden rounded-md mb-8 ">
      <div className="w-full h-[360px] md:h-[300px] ">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover saturate-0 brightness-75 hover:saturate-100 hover:scale-105 ease-in duration-100"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-1 p-4">
        <h2 className="font-semibold text-lg"> {name} </h2>
        <p className="font-extralight text-sm"> {secteur} </p>
      </div>
    </div>
  );
};

export default Member;
