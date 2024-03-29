import { PlayIcon } from "@heroicons/react/solid";
import React, { useState, useRef } from "react";

function Sound({ audiovoice }) {
  /**const [percentage, setPercentage] = useState(0);*/
  const [isPlaying, setIsPlaying] = useState(false);
  /**const [duration, setDuration] = useState(0);*/
  /**const [currentTime, setCurrentTime] = useState(0);*/

  const audioRef = useRef();

  /**  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };*/

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  /** const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

  setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };*/

  /**const [like, setLike] = useState(false);
  const clickLikeHandler = () => {
    setLike(!like);
  };*/

  return (
    <div className="">
      <div className=" ">
        {isPlaying ? (
          <div className="flex space-x-2">
            <div onClick={play}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-7 md:w-7cursor-pointer text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        ) : (
          <PlayIcon
            onClick={play}
            className="h-5 w-5 md:h-7 md:w-7 text-primary cursor-pointer"
          />
        )}
      </div>
      <div className="grid place-items-center">
        <audio
          ref={audioRef}
          /**onTimeUpdate={getCurrDuration}
          onLoadedData={(e) => {
            setDuration(e.currentTarget.duration.toFixed(2));
          }}*/
          // src={`https://storage.googleapis.com/niketan-dev-mode.appspot.com/${audiosrc}`}
          src={audiovoice}
        ></audio>
      </div>
    </div>
  );
}

export default React.memo(Sound);
