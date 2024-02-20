import Br from "./Br";

const Heading = ({ subTitle, title, center }) => {
  return (
    <div className={`flex flex-col ${center ? "items-center" : ""} gap-2 `}>
      <div className="uppercase text-sm md:text-md text-[#FF5F1F]">
        {subTitle}
      </div>
      <div className="text-2xl font-bold md:text-3xl"> {title} </div>
      {center ? "" : <Br />}
    </div>
  );
};

export default Heading;
