import React from "react";

function Badge({ src, number }) {
  return (
    <div className="font-Mulish w-full ml-2">
      <div className="flex flex-col items-start">
        <div>
          <img
            class="inline object-cover w-6 h-6 lg:w-7 lg:h-7 rounded-full"
            src={src}
            alt="Most liked"
          />
        </div>
        {/* <div className="text-gray-500 font-bold text-xxs lg:text-tiny">
          {number}
        </div> */}
      </div>
    </div>
  );
}

export default React.memo(Badge);
