import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";

const VideoSec = (props) => {
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
    <div className={`h-[70vh] ${props?.width} my-10 px-2 md:p-0`}>
      <div className="relative h-full">
        <video
          ref={videoRef}
          src={props.videoUrl}
          loop
          playsInline
          className="w-full h-full object-cover z-0 rounded-lg lg:rounded-3xl"
          onContextMenu={(e) => e.preventDefault()}
        />
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

VideoSec.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  secHeight: PropTypes.string.optional,
  width: PropTypes.string.optional,
};

export default VideoSec;
