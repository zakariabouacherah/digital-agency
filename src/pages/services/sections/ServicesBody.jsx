import Service from "../../../components/Service";
import { useService } from "../../../context/ServiceContext";
import Heading from "../../../components/Heading";
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

const ServicesBody = () => {
  const { services, setSelectedService } = useService();
  // console.log(services);
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };
  return (
    <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-32 xl:px-36">
      <div className="mt-20 flex flex-col justify-center gap-6 md:grid md:grid-cols-2 md:place-content-center lg:grid-cols-3 ">
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
            <Service
              key={index}
              title={item.title}
              icon={<IconComponent />}
              description={item.description}
              onClick={() => handleServiceClick(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesBody;
