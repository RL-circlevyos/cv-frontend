import React from "react";
import ReactPlayer from "react-player/lazy";
import srcVideo from "../../../assets/RL.mp4";

const srcImage =
  "https://images.unsplash.com/photo-1639972584775-e23e861f1595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const items = [
  {
    id: 1,
    src: srcImage,
    title: "ad 1",
    view: 14,
    posted: "1/10/2021",
  },
  {
    id: 2,
    src: srcVideo,
    title: "ad 2",
    view: 14,
    posted: "20/12/2021",
  },
  {
    id: 3,
    src: srcImage,
    title: "ad 3",
    view: 60,
    posted: "11/11/2021",
  },
  {
    id: 4,
    src: srcVideo,
    title: "ad 4",
    view: 4,
    posted: "22/11/2021",
  },
];
const Ad = () => {
  return (
    <div className="w-full">
      {items.map((a) => {
        return (
          <div className="w-full flex flex-col border border-gray-100 shadow mb-4">
            <div>
              {a.src.toString().endsWith("mp4") ? (
                <div className="w-full h-64 ">
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url={a.src}
                    controls
                  />
                </div>
              ) : (
                <div className="w-full h-64">
                  <img
                    src={a.src}
                    alt="ad"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-between items-start flex-wrap px-2 py-2 text-xs lg:text-tiny text-gray-600">
              <span className="text-lg font-bold flex flex-wrap">
                Title: {a.title}
              </span>
              <span className="text-base text-gray-700 font-bold flex flex-wrap ">
                People Reached:{" "}
                <i className="bg-pink-600 ml-2 text-white px-1.5 rounded-sm">
                  {a.view}
                </i>
              </span>
              <span className="text-sm text-gray-500 font-bold">
                {a.posted}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Ad);
