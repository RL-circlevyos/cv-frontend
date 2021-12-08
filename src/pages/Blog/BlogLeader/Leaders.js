import React from "react";
import User from "./User";
const src =
  "https://images.unsplash.com/photo-1637580981035-ddfe9a4ace7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60";
const Leaders = () => {
  return (
    <div class="pt-1 h-auto w-2/3 float-right rounded-md">
      <span className="flex justify-between items-center px-1 py-1 text-base">
        <span className=" text-gray-800 ">
          Content Leaders{" "}
          <span className="font-semibold ml-2 shadow-md bg-transparent p-1 rounded-md">
            2021
          </span>
        </span>

        <span>
          <button className="px-3 py-2 text-xs bg-yellow-900 text-gray-50 rounded-2xl">
            Leaderboard
          </button>
        </span>
      </span>
      <hr />
      <span className="flex items-start justify-center space-x-1 gap-y-3 max flex-wrap pt-1.5 pb-1.5">
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
      </span>
      <hr />
    </div>
  );
};

export default Leaders;
