import React from "react";
import User from "./User";
const src =
  "https://images.unsplash.com/photo-1637580981035-ddfe9a4ace7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60";
const Leaders = () => {
  return (
    <div class="pt-1 h-auto w-2/3 float-right rounded-md">
      <span className="flex justify-between items-center px-1 py-1 text-base">
        <span className="font-bold text-gray-800 underline">
          BLOG LEADERS 2021
        </span>
        <span>
          <button className="px-2 py-1 text-xs bg-yellow-900 text-gray-50 rounded-2xl">
            Leaderboard
          </button>
        </span>
      </span>
      <span className="flex items-start justify-center space-x-1 gap-y-3 max flex-wrap pt-2 pb-2">
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
        <User src={src} fullname="Aindrila " />
      </span>
    </div>
  );
};

export default Leaders;
