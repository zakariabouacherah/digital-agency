import { IoMailOpenOutline, IoSearch } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import Hero2Item from "../../../components/Hero2Item";

const HeroBottom = () => {
  const heroItems = [
    {
      icon: <IoMailOpenOutline />,
      title: "Email Marketing",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero molestiae nobis, debitis ipsum in nostrum placeat nulla molestias unde dolore.",
    },
    {
      icon: <TbTargetArrow />,
      title: "Market Analysis",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero molestiae nobis, debitis ipsum in nostrum placeat nulla molestias unde dolore.",
    },
    {
      icon: <IoSearch />,
      title: "Keyword Research",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero molestiae nobis, debitis ipsum in nostrum placeat nulla molestias unde dolore.",
    },
  ];
  return (
    <div className="flex flex-col items-center md:flex-row justify-center gap-6 px-8 md:px-16 lg:px-32">
      {heroItems.map((item, index) => (
        <Hero2Item
          icon={item.icon}
          title={item.title}
          text={item.text}
          key={index}
        />
      ))}
    </div>
  );
};

export default HeroBottom;
