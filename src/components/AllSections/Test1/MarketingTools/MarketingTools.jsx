import { IoMdArrowRoundForward } from "react-icons/io";
import { marketingToolsData } from "../../../../assets/data/testData";
import React from "react";
import VideoSec from "../VideoSec/VideoSec";

export const MarketingTools = () => {
  return (
    <section className="bg-gray/40 py-20 mt-10 px-5 lg:px-0">
      <div className="container mx-auto">
        <div className="lg:flex justify-between items-end">
          <div>
            <p className="text-xl">BUILT-IN MARKETING TOOLS</p>
            <p className="text-3xl lg:text-5xl mt-6 font-bold">
              From first touch to full funnel
            </p>
          </div>
          <div className="group mt-10 lg:mt-0">
            <div className="flex items-center gap-4">
              <p className="text-xl group-hover:translate-x-2 duration-500">
                Leverage our full marketing suite
              </p>
              <IoMdArrowRoundForward class="font-bold text-xl duration-500 group-hover:translate-x-2" />
            </div>
            <div className="border border-black mt-4"></div>
          </div>
        </div>
        <div className="lg:flex justify-between items-center mt-20 lg:mt-32">
          <div>
            {marketingToolsData?.data?.map((item, i) => (
              <div key={i} className="lg:w-5/6 mb-20 group">
                <div className="lg:flex items-start gap-6">
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
                    <p className="text-3xl text-black-special/80 group-hover:text-black duration-300 font-bold mb-6">
                      {item?.name}
                    </p>
                    <p> {item?.description}</p>
                    <div className="border mt-10 border-black"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <VideoSec
              videoUrl={marketingToolsData?.videoUrl}
              width={"lg:w-[30vw]"}
              key={marketingToolsData}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
