import { BiSolidQuoteLeft } from "react-icons/bi";

const TestimonyItem = ({ commentaire, author, company }) => {
  return (
    <div className="w-full flex flex-col gap-4 bg-black">
      <div className="text-6xl text-[#FF5F1F]  ">
        <BiSolidQuoteLeft />
      </div>
      <div className="text-sm font-light text-justify"> {commentaire} </div>
      <div className="pb-8">
        <div className="text-lg font-semibold"> {author} </div>
        <div className="text-sm font-extralight text-[#FF5F1F]">{company}</div>
      </div>
    </div>
  );
};

export default TestimonyItem;
