import { IoMdArrowRoundForward } from "react-icons/io";
import { flexiblePoint } from "../../../../assets/data/testData";

export const FlexingCard = () => {
  return (
    <section className="container mx-auto lg:flex justify-between mt-10 items-center px-5 lg:px-0">
      <div className="lg:w-5/12 mb-20 lg:mb-0">
        <p className="text-bold text-xl mb-4">{flexiblePoint?.title}</p>
        <p className="text-3xl lg:text-5xl font-bold mb-6">
          {flexiblePoint?.name}
        </p>
        <p className="mb-10">{flexiblePoint?.description}</p>
        <div className="group mt-10 lg:mt-20">
          <div className="flex items-center gap-4">
            <p className="text-xl group-hover:translate-x-2 duration-500">
              {flexiblePoint?.hoverText}
            </p>
            <IoMdArrowRoundForward class="font-bold text-xl duration-500 group-hover:translate-x-2" />
          </div>
          <div className="border border-black mt-4 lg:w-5/12"></div>
        </div>
      </div>
      <div>
        <img src={flexiblePoint?.image} alt="" />
      </div>
    </section>
  );
};
