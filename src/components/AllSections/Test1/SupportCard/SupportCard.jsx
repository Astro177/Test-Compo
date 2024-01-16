import React from "react";
import { supportCardData } from "../../../../assets/data/testData";
import { IoIosArrowForward } from "react-icons/io";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Link } from "react-router-dom";

export const SupportCard = () => {
  return (
    <section className="bg-black py-20 mt-10 px-5 lg:px-0">
      <div className="text-center text-white">
        <p className="font-bold mb-4">CAPTAKE SUPPORT</p>
        <p className="text-3xl lg:text-5xl font-bold lg:w-3/12 mx-auto">
          The help you need, when you need it
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center mt-32 container mx-auto">
        {supportCardData?.map((item) => (
          <div
            to={item?.to}
            key={item?.id}
            className="mx-auto flex flex-col items-start bg-black-gradient text-white px-10 py-10 rounded-xl gap-6 group"
          >
            <div className="">
              {item?.icon ? (
                <div className="bg-blue-gradient p-2 w-10 rounded-full mb-10 lg:mb-0">
                  {React.createElement(item?.icon, {
                    className: "text-white size-6",
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <p className="text-4xl font-bold mb-6">{item?.name}</p>
              <p>{item?.description}</p>
              <div className="mt-10">
                <button className="bg-white/20 px-4 py-2 rounded-full font-bold group-hover:bg-white/40 duration-300 flex items-center gap-2">
                  {item?.btnText}
                  <span className="group-hover:translate-x-1 duration-300">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper lg:hidden mt-10"
      >
        {supportCardData?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div
              to={item?.to}
              className="mx-auto flex flex-col items-start bg-black-gradient text-white px-10 py-10 rounded-xl gap-6 group"
            >
              <div className="">
                {item?.icon ? (
                  <div className="bg-blue-gradient p-4 rounded-xl">
                    {React.createElement(item?.icon, {
                      className: "text-white size-8",
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <p className="text-4xl font-bold mb-6">{item?.name}</p>
                <p>{item?.description}</p>
                <div className="mt-10">
                  <button className="bg-white/20 px-4 py-2 rounded-full font-bold group-hover:bg-white/40 duration-300 flex items-center gap-2">
                    {item?.btnText}
                    <span className="group-hover:translate-x-1 duration-300">
                      <IoIosArrowForward />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  );
};
