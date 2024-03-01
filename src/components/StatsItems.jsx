import CountUp from "react-countup";
import { GrStatusGood } from "react-icons/gr";
const StatsItem = ({ number, label }) => {
  return (
    <div className="flex items-stretch gap-2">
      <div className="text-4xl lg:text-5xl font-bold">
        {/* {number} */}
        <CountUp start={0} end={number} duration={3} delay={1} />+
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-[#ff5f1f] text-xs ">
          <GrStatusGood />
        </div>
        <div className="text-sm font-light"> {label} </div>
      </div>
    </div>
  );
};

export default StatsItem;
