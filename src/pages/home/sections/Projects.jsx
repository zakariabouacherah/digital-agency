import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectItem from "../../../components/ProjectItem";
import project1 from "../../../assets/images/project1.jpeg";
import project2 from "../../../assets/images/project2.jpeg";
import project3 from "../../../assets/images/project3.jpeg";
import project4 from "../../../assets/images/project4.jpeg";
import project5 from "../../../assets/images/project5.jpeg";
import project6 from "../../../assets/images/project6.jpeg";

const Projects = () => {
  const projects = [
    {
      imagePath: project1,
      secteur: "Development",
      service: "Web App / Mobile App",
    },
    {
      imagePath: project2,
      secteur: "Development",
      service: "Web App / Mobile App",
    },
    {
      imagePath: project3,
      secteur: "Development",
      service: "Web App / Mobile App",
    },
    {
      imagePath: project4,
      secteur: "Development",
      service: "Web App / Mobile App",
    },
    {
      imagePath: project5,
      secteur: "Development",
      service: "Web App / Mobile App",
    },
    {
      imagePath: project6,
      secteur: "Development",
      service: "Web App / Mobile App",
    },
  ];
  return (
    <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-32">
      <div className="flex justify-between items-start flex-col md:flex-row md:items-center gap-2">
        <Heading subTitle="our completed projects" title="Recent Projects" />
        <Button label="All Projects" />
      </div>
      <div>
        <Swiper
          slidesPerView={1.3}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            514: {
              slidesPerView: 2.3,
            },
            640: {
              slidesPerView: 3.3,
            },
            840: {
              slidesPerView: 4.3,
            },
          }}
          loop
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <ProjectItem
                image={item.imagePath}
                secteur={item.secteur}
                service={item.service}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
