import Heading from "../../../components/Heading";
import ServiceItem from "../../../components/ServiceItem";
import {
  TbBrandCraft,
  TbBulb,
  TbSpeakerphone,
  TbDeviceAnalytics,
  TbBrandFigma,
  TbCamera,
  TbChartDots2,
  TbMessageCircle2,
  TbAtom,
} from "react-icons/tb";

const ServicesSection = () => {
  const services = [
    {
      title: "Digital Branding",
      icon: <TbBrandCraft />,
    },
    {
      title: "Creative Solutions",
      icon: <TbBulb />,
    },
    {
      title: "Marketing Solutions",
      icon: <TbSpeakerphone />,
    },
    {
      title: "Business Analytics",
      icon: <TbDeviceAnalytics />,
    },
    {
      title: "UX & UI Design",
      icon: <TbBrandFigma />,
    },
    {
      title: "Photography",
      icon: <TbCamera />,
    },
    {
      title: "Management",
      icon: <TbChartDots2 />,
    },
    {
      title: "Social Media",
      icon: <TbMessageCircle2 />,
    },
    {
      title: "Data Science",
      icon: <TbAtom />,
    },
  ];
  return (
    <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-32">
      <Heading subTitle="What we do" title="Our Services" />
      <div className="grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* <ServiceItem title="digital branding" icon={<TbBrandCraft />} /> */}
        {services.map((item, index) => (
          <ServiceItem title={item.title} icon={item.icon} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
