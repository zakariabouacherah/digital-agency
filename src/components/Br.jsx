import { useState } from "react";

const Br = () => {
  // const [vertical, setVertical] = useState(false)
  return (
    <div className={`flex items-center  gap-1 w-12 h-[3px] opacity-80`}>
      <span className="h-full bg-[#FF5F1F] w-[50%]  "></span>
      <span className="h-full bg-[#FF5F1F] w-[30%] "></span>
      <span className="h-full bg-[#FF5F1F] w-[20%] "></span>
    </div>
  );
};

export default Br;
