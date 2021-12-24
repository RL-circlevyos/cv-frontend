import React from "react";

function Badge({ src, number }) {
  return (
    <div className="ml-5">
      <div className="flex items-start flex-col">
        <div>
          <img
            class="inline object-cover w-8 h-8 mr-2 rounded-full"
            src={src}
            alt="Most liked"
          />
        </div>
        <div className="text-gray-500 font-bold text-sm lg:text-base">
          {number}
        </div>
      </div>
    </div>
  );
}

export default Badge;
