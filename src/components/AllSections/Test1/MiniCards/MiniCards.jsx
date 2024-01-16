import { IoMdArrowRoundForward } from "react-icons/io";
import { miniCardsData } from "../../../../assets/data/testData";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

export const MiniCards = () => {
  return (
    <section className="container mx-auto mt-10 px-5 lg:px-0">
      <h2 className="text-xl font-bold capitalize">
        Explore the world`s largest community
      </h2>
      <div className="flex flex-col lg:flex-row gap-2 items-center mt-10 lg:mt-20">
        {miniCardsData?.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 group shadow-lg p-8 w-full h-auto rounded-xl border"
          >
            <img src={item?.image} alt="" className="w-[60px] h-[60px]" />
            <div className="flex items-center gap-4">
              <p className="text-xl">{item?.name}</p>
              <IoMdArrowRoundForward class="font-bold text-xl duration-500 group-hover:translate-x-2" />
            </div>
            <p>{item?.description}</p>
          </div>
        ))}
      </div>
      {/* <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        className="mySwiper lg:hidden mt-10"
      >
        {miniCardsData?.map((item, i) => (
          <SwiperSlide
            key={i}
            className="flex flex-col gap-4 group shadow-lg p-8 w-full h-auto rounded-xl border"
          >
            <img src={item?.image} alt="" className="w-[60px] h-[60px]" />
            <div className="flex items-center gap-4">
              <p className="text-xl">{item?.name}</p>
              <IoMdArrowRoundForward class="font-bold text-xl duration-500 group-hover:translate-x-2" />
            </div>
            <p>{item?.description}</p>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  );
};
