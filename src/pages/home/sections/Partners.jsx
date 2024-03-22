import partner1 from "../../../assets/images/partner1.png";
import partner2 from "../../../assets/images/partner2.png";
import partner3 from "../../../assets/images/partner3.png";
import partner4 from "../../../assets/images/partner4.png";
import partner5 from "../../../assets/images/partner5.png";

const Partners = () => {
  const logos = [partner1, partner2, partner3, partner4, partner5];
  return (
    <div className="flex items-center gap-2 h-[100px] md:h-[150px] lg:h-[200px] ">
      {logos.map((item, index) => (
        <div className="w-full h-full" key={index}>
          <img
            src={`${item}`}
            alt="logo"
            className="w-full h-full object-contain saturate-0 hover:saturate-100 ease-in duration-200"
          />
        </div>
      ))}
    </div>
  );
};

export default Partners;
