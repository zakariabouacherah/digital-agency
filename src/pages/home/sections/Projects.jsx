import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectItem from "../../../components/ProjectItem";

const Projects = () => {
  const projects = [
    {
      imagePath: "../../../public/images/project1.jpeg",
      secteur: "Development",
      service: "Web App / Mobile App",
    },
    {
      imagePath: "../../../public/images/project2.jpeg",
      secteur: "Development",
      service: "Web App / Mobile App",
    },
    {
      imagePath: "../../../public/images/project3.jpeg",
      secteur: "Development",
      service: "Web App / Mobile App",
    },
    {
      imagePath: "../../../public/images/project4.jpeg",
      secteur: "Development",
      service: "Web App / Mobile App",
    },
    {
      imagePath: "../../../public/images/project5.jpeg",
      secteur: "Development",
      service: "Web App / Mobile App",
    },
    {
      imagePath: "../../../public/images/project6.jpeg",
      secteur: "Development",
      service: "Web App / Mobile App",
    },
  ];
  return (
    <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-32">
      <div className="flex justify-between items-center">
        <Heading subTitle="our completed projects" title="Recent Projects" />
        <Button label="All Projects" />
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            514: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            840: {
              slidesPerView: 4,
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
