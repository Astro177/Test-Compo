import PropsType from "prop-types";
import { GiFlatHammer } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

export const ProductCard = ({ sectionData, bgColor }) => {
  return (
    <section className="container mx-auto mb-10">
      <div className="flex items-center gap-10 justify-between">
        <div
          className={`${bgColor} flex flex-col justify-center items-center text-white gap-3 lg:w-[350px] py-36`}
        >
          <p className="text-4xl font-bold">{sectionData?.title}</p>
          <p className="font-bold">{sectionData?.products}</p>
          <button className="px-10 py-2 bg-blue-400 hover:bg-white hover:text-primary font-bold duration-300 rounded-full">
            View All Items
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {sectionData?.data?.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-6 mx-auto shadow-xl rounded-md lg:w-[450px] py-4 mb-3"
            >
              <div className="overflow-hidden">
                <img
                  src={item?.imageOne}
                  alt=""
                  className="w-[165px] hover:scale-110 duration-500"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xl font-bold hover:text-primary duration-300">
                  {item?.name}
                </p>
                <p>
                  Current Bid: <span className="font-bold">{item?.price}</span>
                </p>
                <div className="flex items-center gap-4">
                  <GiFlatHammer className="size-8 text-white bg-primary rounded-full p-2 font-bold shadow-lg" />

                  <FaHeart className="size-8 text-black bg-white hover:bg-primary hover:text-white duration-300 rounded-full p-2 font-bold shadow-lg" />

                  <IoMdSearch className="size-8 text-black bg-white hover:bg-primary hover:text-white duration-300 rounded-full p-2 font-bold shadow-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ProductCard.propTypes = {
  sectionData: PropsType.object.isRequired,
  bgColor: PropsType.string.isRequired,
};
