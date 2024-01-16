import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { productSliderData } from "../../../../assets/data/testData";
import CustomSliderBullet from "../../../others/CustomSliderBullet";

export const ProductSlider = () => {
  const swiperRef = useRef();
  return (
    <div className="mt-10 bg-white rounded-xl p-5">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        freeMode={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="relative"
        style={CustomSliderBullet()}
      >
        {productSliderData?.map((item, i) => (
          <SwiperSlide key={i}>
            <p className="font-bold text-xl mb-2">{item?.name}</p>
            <p>{item?.title}</p>
            <div className="flex flex-col justify-center relative">
              <img src={item?.image} alt="" className="mt-6 rounded-xl" />
              <div className="flex items-center gap-1 mt-6">
                {item?.images?.map((item, i) => (
                  <img
                    key={i}
                    src={item}
                    alt=""
                    className="w-[120px] rounded-xl"
                  />
                ))}
              </div>
              <p className="absolute top-10 left-2 px-6 py-2 bg-white rounded-xl">
                Popularity Score:{" "}
                <span className="font-bold">{item?.rating}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div className="">
          <div className="flex justify-between">
            <button
              className="z-50 w-12 shadow-xl h-12 flex items-center justify-center rounded-full bg-white text-blue-500 hover:bg-blue-600 hover:text-white duration-300 absolute top-1/2 left-0"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <FaAngleLeft className="text-xl" />
            </button>
            <button
              className="z-50 w-12 shadow-xl h-12 flex items-center justify-center rounded-full bg-white text-blue-500 hover:bg-blue-600 hover:text-white duration-300 absolute top-1/2 right-0"
              onClick={() => swiperRef.current.slideNext()}
            >
              <FaAngleRight className="text-xl" />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
