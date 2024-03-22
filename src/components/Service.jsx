import { Link } from "react-router-dom";

const Service = ({ icon, title, description, onClick }) => {
  const secondPeriodIndex = description.indexOf(
    ".",
    description.indexOf(".") + 1
  );

  const truncatedDescription =
    secondPeriodIndex !== -1
      ? description.substring(0, secondPeriodIndex + 1)
      : description;

  return (
    <div className="relative bg-[#ddd3] px-4 pt-4 flex flex-col items-center justify-start w-full min-h-[400px]  rounded-lg cursor-pointer hover:bg-gradient-to-b from-40% hover:from-[#ff5f1f] hover:to-[#ff814f4b] hover:-translate-y-2 parent fade-up ">
      <div className="relative w-20 h-20 rounded-full bg-[#aaa4] flex items-center justify-center">
        <div className="text-6xl text-[#ff5f1f] child2 "> {icon} </div>
      </div>
      <div className="relative mt-2 text-xl font-bold mb-6 "> {title} </div>

      <div className="relative text-center text-md font-light opacity-75 mb-16">
        {truncatedDescription}..
      </div>
      <Link
        className="absolute bottom-4 text-[#ff5f1f] underline child2"
        to={`/services/${title.toLowerCase().replace(/\s/g, "-")}`}
        onClick={onClick}
      >
        More
      </Link>
    </div>
  );
};

export default Service;
