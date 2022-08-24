import { CheckIcon, PlayIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, useParams } from "react-router-dom";

function CourseVideoItem({ videoname, videoid }) {
  const { id } = useParams();
  return (
    <Link to={`/career-guide/myresources/courses/${id}?video=${videoid}`}>
      <div className="flex cursor-pointer justify-between items-center bg-gray-200 px-3 py-1.5 pt-2 rounded-2xl">
        <PlayIcon className="h-5 w-5 text-black" />
        <div className="text-lg">{videoname} </div>
        <div></div>
        {/* <CheckIcon className="h-6 w-6 text-green-700 " /> */}
      </div>
    </Link>
  );
}

export default React.memo(CourseVideoItem);
