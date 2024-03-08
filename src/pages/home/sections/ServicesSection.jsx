import { useState } from "react";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import ServiceItem from "../../../components/ServiceItem";
import { useService } from "../../../context/ServiceContext";
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
  const { services, setSelectedService } = useService();
  const handleServiceClick = (service) => {
    setSelectedService(service);
    console.log(service);
  };

  return (
    <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-32">
      <div className="flex justify-between items-start flex-col md:flex-row md:items-center gap-2">
        <Heading subTitle="What we do" title="Our Services" />
        <Button label="More about services" to={"/services"} />
      </div>
      <div className="grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((item, index) => {
          let IconComponent;
          switch (item.icon) {
            case "TbBrandCraft":
              IconComponent = TbBrandCraft;
              break;
            case "TbBulb":
              IconComponent = TbBulb;
              break;
            case "TbSpeakerphone":
              IconComponent = TbSpeakerphone;
              break;
            case "TbDeviceAnalytics":
              IconComponent = TbDeviceAnalytics;
              break;
            case "TbBrandFigma":
              IconComponent = TbBrandFigma;
              break;
            case "TbCamera":
              IconComponent = TbCamera;
              break;
            case "TbChartDots2":
              IconComponent = TbChartDots2;
              break;
            case "TbMessageCircle2":
              IconComponent = TbMessageCircle2;
              break;
            case "TbAtom":
              IconComponent = TbAtom;
              break;

            default:
              IconComponent = TbBulb;
          }
          return (
            <ServiceItem
              key={index}
              delay={item.delay}
              title={item.title}
              icon={<IconComponent />}
              onClick={() => handleServiceClick(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
