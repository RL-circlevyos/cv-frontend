import { CheckIcon, PlayIcon } from "@heroicons/react/solid";
import React from "react";

function CourseVideoItem() {
  return (
    <div>
      <div className="flex cursor-pointer justify-between items-center bg-gray-200 px-3 py-1.5 rounded-2xl">
        <PlayIcon className="h-5 w-5 text-black" />
        <div className="text-lg">Video name </div>
        <CheckIcon className="h-6 w-6 text-green-700 " />
      </div>
    </div>
  );
}

export default React.memo(CourseVideoItem);
