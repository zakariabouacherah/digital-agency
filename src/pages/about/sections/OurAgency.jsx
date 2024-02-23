import Br from "../../../components/Br";
import Heading from "../../../components/Heading";

const OurAgency = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-16 px-8 md:px-16 lg:px-32">
      <div className=" p-0 lg:p-12 rounded-md lg:col-span-3 flex flex-col justify-center ">
        <Heading
          title="Your Trusted partner for business"
          subTitle="about our agency"
        />
        <p className="py-4 text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          asperiores vitae similique illo modi. <br /> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Officiis, in illo quae
          reprehenderit harum architecto est?
        </p>
        <div className="w-full flex justify-end">
          <Br />
        </div>
      </div>
      <div className="bg-[#fff4] rounded-md lg:col-span-2  overflow-hidden h-[300px] ">
        <img
          src="https://images.pexels.com/photos/3182768/pexels-photo-3182768.jpeg"
          alt="about"
          className="w-full h-full object-cover saturate-0"
        />
      </div>
      <div className="bg-[#fff4] rounded-md lg:col-span-3  overflow-hidden h-[300px] ">
        <img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
          alt="about"
          className="w-full h-full object-cover saturate-0"
        />
      </div>
      <div className="bg-[#fff4] rounded-md lg:col-span-2  overflow-hidden h-[300px] ">
        <img
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
          alt="about"
          className="w-full h-full object-cover saturate-0"
        />
      </div>
    </div>
  );
};

export default OurAgency;
