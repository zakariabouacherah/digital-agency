import { FaArrowRight } from "react-icons/fa6";

const ServiceItem = ({ icon, title }) => {
  return (
    <div className="parent flex items-center justify-between bg-[#fff3] py-3 px-2 w-[300px] md:w-[100%] min-w-[260px]  rounded-s-full cursor-pointer hover:bg-[#FF5F1F] transition ease-in duration-100 ">
      <div className="flex items-center gap-4">
        <div className="child rounded-full bg-[#000c] flex items-center justify-center w-[55px] h-[55px] ">
          <div className="text-4xl text-[#FF5F1F]  "> {icon} </div>
        </div>
        <div className="text-lg font-semibold"> {title} </div>
      </div>
      <div className="text-lg">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default ServiceItem;
