import { useState, useEffect, useRef } from "react";
import { bannerVideoData } from "../../../../assets/data/testData";
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";
import { FaPlay } from "react-icons/fa6";

const BannerVideo = () => {
  const videoRef = useRef(null);
  const [isMute, setIsMute] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMute;
      videoRef.current
        .play()
        .then(() => {
          // Autoplay started successfully
        })
        .catch((error) => {
          // Autoplay is not allowed or encountered an error
          console.error("Autoplay failed:", error);
        });
    }
  }, [isMute]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className={`h-[80vh] w-full my-10 px-2 md:p-0`}>
      <div className="relative h-full">
        <video
          ref={videoRef}
          src={bannerVideoData?.videoUrl}
          loop
          playsInline
          className="w-full h-full object-cover z-0"
          onContextMenu={(e) => e.preventDefault()}
        />

        <div className="absolute top-10 lg:top-[27%] left-0 lg:left-[20%] text-white px-5">
          <p className="text-5xl font-bold lg:w-7/12 leading-snug mb-6">
            {bannerVideoData?.name}
          </p>
          <p className="text-xl lg:w-4/6">{bannerVideoData?.description}</p>
        </div>

        <div className="">
          <div className="absolute bottom-[20%] lg:bottom-[10%] left-[20%] lg:flex text-white gap-4 items-center">
            <button className="bg-white text-black font-bold px-10 py-4 rounded-full border-4 border-white hover:bg-transparent hover:text-white duration-300">
              {bannerVideoData?.btnText1}
            </button>
            <p className="lg:w-1/3 mt-4 lg:mt-0">{bannerVideoData?.btnText2}</p>
          </div>
          <div className="absolute bottom-20 lg:bottom-[10%] right-2 lg:right-[15%] ">
            <button className="bg-white/20 text-white font-bold px-10 py-4 rounded-full  hover:bg-white hover:text-black duration-300 flex items-center gap-4 ">
              <FaPlay />
              <span>{bannerVideoData?.btnText3}</span>
            </button>
          </div>
        </div>

        <div className="md:mt-5 md:ml-5 mt-3 ml-3 absolute bottom-4 right-3">
          <div className="flex gap-3">
            <button
              className="bg-blue-gradient p-2 rounded-full"
              onClick={() => setIsMute(!isMute)}
            >
              {isMute ? (
                <SpeakerXMarkIcon className="md:h-5 md:w-5 h-3 w-3 text-white" />
              ) : (
                <SpeakerWaveIcon className="md:h-5 md:w-5 h-3 w-3 text-white" />
              )}
            </button>
            <button
              className="bg-blue-gradient p-2 rounded-full md:block hidden"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <PauseIcon className="md:h-5 h-3 w-3 md:w-5 text-white" />
              ) : (
                <PlayIcon className="md:h-5 h-3 w-3 md:w-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
