import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BlogItem = ({ date, title, imageUrl, delay }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col items-center overflow-hidden cursor-pointer"
    >
      <div className="w-full h-[300px] z-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          width="100%"
          className="w-full h-full object-cover saturate-0 brightness-90 hover:saturate-100 hover:scale-105 ease-in duration-100"
        />
      </div>
      <div className="p-6 bg-[#1c1d1c] w-[80%] -mt-6 rounded-sm z-10 flex flex-col gap-3 ">
        <div className="py-1 px-3 bg-[#ff5f1f] self-start text-sm font-extralight rounded-sm">
          {date}
        </div>
        <div className="text-lg font-bold"> {title} </div>
        <div className="text-xs font-thin text-[#ff5f1f] cursor-pointer hover:underline">
          {" "}
          READ MORE{" "}
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
