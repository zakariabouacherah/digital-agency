const Member = ({ image, name, secteur }) => {
  return (
    <div className="relative p-0 w-[100%]  overflow-hidden mb-8 par">
      <div className="relative w-full h-[320px] md:h-[300px] ">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover saturate-0 lg:saturate-50 img"
        />
      </div>
      <div className="absolute text-center -bottom-28 left-0 w-full flex flex-col items-center justify-center gap-1 p-4 bg-[#0008] chi ">
        <h2 className="font-semibold text-lg"> {name} </h2>
        <p className="font-extralight text-sm"> {secteur} </p>
      </div>
    </div>
  );
};

export default Member;
