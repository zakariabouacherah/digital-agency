import Br from "./Br";

const Hero2Item = ({ icon, title, text }) => {
  return (
    <div className="bg-[#fff2] relative px-6 py-20 rounded-sm w-[300px] w-max-[100%] lg:w-full ">
      <div className="flex flex-col gap-2 relative">
        <span className="text-4xl text-[#FF5F1F]"> {icon} </span>
        <div className="mb-3">
          <h1 className="text-md font-semibold mb-1"> {title} </h1>
          <Br />
        </div>
        <p className="text-sm font-extralight"> {text} </p>
      </div>
      <div className="absolute bottom-0 right-0 w-[60px] h-[60px] flex items-end justify-end flex-col gap-2 ">
        <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
        <div className="flex items-center gap-2">
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-[#FF5F1F]"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero2Item;
