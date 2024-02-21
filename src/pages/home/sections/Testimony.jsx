import Heading from "../../../components/Heading";
import { PiPlayCircleDuotone } from "react-icons/pi";
import TestimonyItem from "../../../components/TestimonyItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

const Testimony = () => {
  const commentaires = [
    {
      commentaire:
        "Nunc eget neque eros. Duis sed elit sit amet neque iaculis mattis. In convallis tortor id iaculis sagittis. Vivamus id ligula commodo, aliquam nisl sit amet, consequat lacus. Vestibulum imperdiet pellentesque justo at sodales. Maecenas interdum mattis risus, id molestie lectus euismod vestibulum.",
      company: "Founder of POPO",
      author: "Brahim Ouali",
    },
    {
      commentaire:
        "Fusce eleifend magna ex, sed fringilla mauris rhoncus iaculis. Nunc tristique ante lacinia, lobortis metus sed, tincidunt risus. Vivamus dictum rutrum tellus, accumsan rutrum nulla ornare at. Nulla facilisi. Etiam eget rutrum nunc. Integer iaculis nulla ut gravida egestas. ",
      company: "RH of Yalla",
      author: "Aicha Aloua",
    },
    {
      commentaire:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam harum officia, sit repellendus deleniti facere! Vitae ullam ipsa suscipit illo aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam harum officia, sit repellendus deleniti facere! Vitae ullam ipsa suscipit illo aspernatur",
      company: "Founder of FoodAli",
      author: "Ali Talbi",
    },
  ];
  return (
    <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-32">
      <div className="flex flex-col-reverse  items-center  gap-6 lg:flex-row-reverse lg:items-center">
        <div className="flex flex-col gap-6 lg:w-[50%]">
          <Heading
            subTitle="what client says about us"
            title="Our Testimonials"
          />
          <div className="w-[300px] md:w-[400px] lg:w-[500px]  ">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              effect={"fade"}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, EffectFade]}
              loop
            >
              {commentaires.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonyItem
                    commentaire={item.commentaire}
                    company={item.company}
                    author={item.author}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="relative w-[80%] lg:w-[50%] ">
          <div className="relative w-full">
            <img
              src="../../../public/images/testimony1.png"
              alt="testimony"
              width={600}
              className=" h-full w-full object-cover"
            />
          </div>
          <div className="absolute cursor-pointer right-6 bottom-6  bg-[#FF5F1F] rounded-full flex items-center gap-2 pr-4 pl-2 py-2">
            {/* <Button label="More About Us" icon={<FaArrowRight />} /> */}
            <div className="text-4xl">
              <PiPlayCircleDuotone />
            </div>
            <div className="text-sm font-light"> Watch video </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
