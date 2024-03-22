const Br = ({ vertical }) => {
  return (
    <div
      className={`flex items-center  gap-1  opacity-80 ${
        vertical ? "h-12 w-[3px] flex-col-reverse" : "w-12 h-[3px]"
      }`}
    >
      <span
        className={`bg-[#FF5F1F] rounded-md children  ${
          vertical ? "w-full h-[60%]" : "w-[60%] h-full"
        } `}
      ></span>
      <span
        className={`bg-[#FF5F1F] rounded-md children ${
          vertical ? "w-full h-[10%]" : "w-[10%] h-full"
        } `}
      ></span>
      <span
        className={`bg-[#FF5F1F] rounded-md children ${
          vertical ? "w-full h-[30%]" : "w-[30%] h-full"
        } `}
      ></span>
    </div>
  );
};

export default Br;
