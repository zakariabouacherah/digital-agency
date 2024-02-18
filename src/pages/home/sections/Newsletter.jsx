import Button from "../../../components/Button";

const Newsletter = () => {
  return (
    <div className="my-8 bg-[#fff2] backdrop-blur-md px-8 md:px-16 lg:px-32 py-14 flex flex-col md:flex-row gap-4 md:justify-between">
      <div className="text-xl font-bold md:text-2xl">
        SUBSCRIBE TO OUR NEWSLETTER
      </div>
      <div className="flex items-center w-full md:w-auto">
        <input
          type="text"
          placeholder="exemple@mail.com"
          className="py-3 px-2 rounded-s-md text-sm md:w-[300px] outline-none text-black font-medium placeholder:font-normal "
        />
        <button className="py-3 px-2 md:px-4 rounded-e-md text-sm bg-[#ff5f1f] ">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
