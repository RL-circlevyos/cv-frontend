import React from "react";
import { Link } from "react-router-dom";
import PersonImage from "../../../assets/person.png";

function StudyMaterialItem({ id, name, username, thumbnail }) {
  return (
    <Link
      to={`/career-guide/myresources/materials/${id}`}
      className=" w-44 px-7 cursor-pointer transition ease-in duration-300"
    >
      <img
        className=" h-44 w-auto rounded-lg object-center"
        src={
          thumbnail
            ? thumbnail
            : "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
        }
        alt=""
      />

      <div className="py-3 text-center">
        <div className="font-semibold text-lg">{name}</div>
        <div className="flex items-center space-x-2">
          <img src={PersonImage} alt="" className="h-5 w-5" />
          <div className="text-gray-500 text-sm">{username}</div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(StudyMaterialItem);
