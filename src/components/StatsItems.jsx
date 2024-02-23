const StatsItem = ({ number, label }) => {
  return (
    <div className="flex items-stretch gap-1">
      <div className="text-4xl lg:text-5xl font-extrabold"> {number} </div>
      <div className="flex flex-col justify-between">
        <div className="text-[#ff5f1f] ">*</div>
        <div className="text-sm font-light"> {label} </div>
      </div>
    </div>
  );
};

export default StatsItem;
