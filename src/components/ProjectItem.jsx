const ProjectItem = ({ image, service, secteur }) => {
  return (
    <div className="bg-[#fff3] p-0 w-[100%]  overflow-hidden mb-8 ">
      <div className="w-full h-[200px] ">
        <img
          src={image}
          alt={service}
          className="w-full h-full object-cover saturate-0 brightness-75 hover:saturate-100 hover:scale-105 ease-in duration-100"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-1 p-4">
        <h2 className="font-semibold text-lg"> {secteur} </h2>
        <p className="font-extralight text-sm"> {service} </p>
      </div>
    </div>
  );
};

export default ProjectItem;
