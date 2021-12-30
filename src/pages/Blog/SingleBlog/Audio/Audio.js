import React, { useState, useRef } from "react";
//import song from "./Coldplay X BTS - My Universe (Official Video) ( 128kbps ).mp3";
import song from "../../../../assets/BTS - Pied Piper (방탄소년단 - Pied Piper) _Color Coded Lyrics_Han_Rom_Eng_가사_ ( 128kbps ).mp3";
import Slider from "./Slider/Slider";
import ControlPanel from "./Controls/ControlPanel";
import { HeartIcon, PlayIcon } from "@heroicons/react/solid";
import src from "../../../../assets/sound.gif";
import { useSelector } from "react-redux";

function Audio({ srcaudio }) {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const blog = useSelector((state) => state.blog);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

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

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  const [like, setLike] = useState(false);
  const clickLikeHandler = () => {
    setLike(!like);
  };

  return (
    <div className="app-container">
      <div className="flex justify-center items-center space-x-3">
        <div>
          <img
            src="https://images.unsplash.com/photo-1638173973774-286a6a69d197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="pic"
            className="w-7 h-7 rounded-full"
          />
        </div>
        <div>Voice artist 1</div>
        {isPlaying ? (
          <div className="flex space-x-2">
            <div onClick={play}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer text-gray-500"
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
            <div className="w-6 h-6">
              <img src={src} alt="" className="w-full h-full" />
            </div>
          </div>
        ) : (
          <PlayIcon
            onClick={play}
            className="w-7 h-7 text-primary cursor-pointer"
          />
        )}
        <span className="flex space-x-1 items-center text-xs">
          <span className="cursor-pointer" onClick={clickLikeHandler}>
            {like ? (
              <HeartIcon className="h-6 w-6 text-pink-600 cursor-pointer" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-500 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
          </span>
          <i>12</i>
        </span>
      </div>
      <div className="grid place-items-center">
        <Slider percentage={percentage} onChange={onChange} />
        <audio
          ref={audioRef}
          onTimeUpdate={getCurrDuration}
          onLoadedData={(e) => {
            setDuration(e.currentTarget.duration.toFixed(2));
          }}
          src={`https://storage.googleapis.com/niketan-dev-mode.appspot.com/${srcaudio}`}
        ></audio>

        <ControlPanel
          play={play}
          isPlaying={isPlaying}
          duration={duration}
          currentTime={currentTime}
        />
      </div>
    </div>
  );
}

export default React.memo(Audio);
