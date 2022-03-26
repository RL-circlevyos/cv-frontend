import React from "react";
import PersonImage from "../../../assets/person.png";

function courseItem() {
  return (
    <div className="cursor-pointer">
      <img
        className=" h-36 w-64 rounded-lg object-center"
        src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
        alt=""
      />
      <div className="py-2 px-1 space-y-1">
        <div className="truncate w-64 text-lg font-medium ">
          Here is the course name | Here is the course name
        </div>
        <div className="flex space-x-2 items-center ">
          <img src={PersonImage} alt="Avatar" className="w-7 h-7" />
          <div className="text-sm">User name</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(courseItem);
