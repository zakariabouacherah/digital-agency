import StatsItem from "../../../components/StatsItems";

const Stats = () => {
  return (
    <div className="bg-gradient-to-b  lg:bg-gradient-to-r from-[#fff1] to-[#fff2] p-6 rounded-md flex flex-col lg:flex-row lg:items-center gap-2 my-8 mx-8 md:mx-16 lg:mx-32">
      <div className="lg:w-[50%] lg:px-6 ">
        <div className="text-2xl font-bold mb-2">Why us?</div>
        <div className="text-sm font-light lg:w-[80%] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex inventore
          culpa nam nesciunt saepe alias quaerat nisi expedita mollitia, velit
          blanditiis porro.
        </div>
      </div>
      <div className="lg:w-[50%] grid grid-cols-2 gap-2 ">
        <StatsItem number={"5+"} label={"Years of experience"} />
        <StatsItem number={"5+"} label={"Years of experience"} />
        <StatsItem number={"5+"} label={"Years of experience"} />
        <StatsItem number={"5+"} label={"Years of experience"} />
      </div>
    </div>
  );
};

export default Stats;
