import React from "react";
import { Link } from "react-router-dom";
import PersonImage from "../../../assets/person.png";

function courseItem({
  coursename,
  username,
  thumbail,
  userprofile,
  id,
  isMentorDashBoard,
}) {
  return (
    <Link
      to={
        isMentorDashBoard
          ? `/dashboard/mentor/create-course/${id}`
          : `/career-guide/myresources/courses/${id}`
      }
      className="cursor-pointer"
    >
      <img
        className=" h-36 w-64 rounded-lg object-center"
        src={
          thumbail
            ? thumbail
            : "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
        }
        alt=""
      />
      <div className="py-2 px-1 space-y-1">
        <div className="truncate w-64 text-lg font-medium ">{coursename}</div>
        <div className="flex space-x-2 items-center ">
          <img
            src={userprofile ? userprofile : PersonImage}
            alt={username}
            className="w-7 h-7 rounded-full"
          />
          <div className="text-sm">{username}</div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(courseItem);
