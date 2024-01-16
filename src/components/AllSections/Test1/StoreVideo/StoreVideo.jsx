import { storeVideData } from "../../../../assets/data/testData";
import VideoSec from "../VideoSec/VideoSec";
import { IoMdArrowRoundForward } from "react-icons/io";

export const StoreVideo = () => {
  return (
    <section className="bg-gray/40 py-20 mt-10 px-5 lg:px-0">
      <div className="container mx-auto">
        <div>
          <p className="text-black text-xl font-bold mb-4">
            BUILD AN ONLINE STORE
          </p>
          <p className="text-black text-3xl lg:text-5xl font-bold mb-4">
            Your store, your way
          </p>
        </div>
        <div className="mt-20">
          <VideoSec
            key={storeVideData}
            videoUrl={storeVideData?.videoUrl}
            width={"lg:w-full"}
          />
          <div className="flex flex-col lg:flex-row justify-between items-start mt-0">
            {storeVideData?.data?.map((item, i) => (
              <div className="px-10 group" key={i}>
                <div className="border mt-10 lg:mt-0 mb-10 border-primary/30"></div>
                <p className="text-black text-2xl font-bold mb-4">
                  {item?.name}
                </p>
                <p className="">{item?.description}</p>
                <p className="mt-6 flex items-center gap-2">
                  <span className="font-bold underline">{item?.text}</span>
                  <IoMdArrowRoundForward class="font-bold text-xl duration-500 group-hover:translate-x-2" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
