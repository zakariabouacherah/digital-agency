import { useService } from "../../../context/ServiceContext";

const ServicesBody = () => {
  const { services, setSelectedService } = useService();
  console.log(services);
  return <div></div>;
};

export default ServicesBody;
