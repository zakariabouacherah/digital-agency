import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Member from "../../../components/Member";

const Team = ({ withoutButton }) => {
  const membres = [
    {
      imageUrl:
        "https://images.pexels.com/photos/5588224/pexels-photo-5588224.jpeg",
      secteur: "Developer",
      name: "Aymane Armadou",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/3091137/pexels-photo-3091137.jpeg",
      secteur: "Marketing Manager",
      name: "Salma Moustaqim",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/13026082/pexels-photo-13026082.jpeg",
      secteur: "UI/UX Designer",
      name: "Mustapha Allal",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/3286500/pexels-photo-3286500.jpeg",
      secteur: "Project Manager",
      name: "Sara Bouma",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/18534747/pexels-photo-18534747/free-photo-of-homme-photographe-debout-urbain.jpeg",
      secteur: "Photographer",
      name: "Oussama Ichid",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/5996258/pexels-photo-5996258.jpeg",
      secteur: "Content Writter",
      name: "Issam Bahry",
    },
  ];
  return (
    <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-32">
      <div className="flex justify-between items-start flex-col md:flex-row md:items-center gap-2">
        <Heading subTitle="meet our experts" title="Our Team" />
        {withoutButton ? "" : <Button label="View All" />}
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
            1040: {
              slidesPerView: 4.3,
            },
            1440: {
              slidesPerView: 5.3,
            },
          }}
          loop
        >
          {membres.map((item, index) => (
            <SwiperSlide key={index}>
              <Member
                image={item.imageUrl}
                name={item.name}
                secteur={item.secteur}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
