import React from "react";
import PersonImage from "../../../assets/person.png";

function StudyMaterialItem() {
  return (
    <div className=" w-44 px-7 cursor-pointer">
      <img
        className=" h-44 w-auto rounded-lg object-center"
        src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
        alt=""
      />

      <div className="py-3 text-center">
        <div className="font-semibold text-lg">Name</div>
        <div className="flex items-center space-x-2">
          <img src={PersonImage} alt="" className="h-5 w-5" />
          <div className="text-gray-500 text-sm">Author Name</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(StudyMaterialItem);
