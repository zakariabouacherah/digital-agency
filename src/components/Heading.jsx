import Br from "./Br";

const Heading = ({ subTitle, title }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="uppercase text-sm md:text-md text-[#FF5F1F]">
        {subTitle}
      </div>
      <div className="text-2xl font-bold md:text-3xl"> {title} </div>
      <Br />
    </div>
  );
};

export default Heading;
