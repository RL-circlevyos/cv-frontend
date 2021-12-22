import React from "react";

function Badge({ src, number }) {
  return (
    <div className="ml-5">
      <div className="align-middle">
        <div>
          <img
            class="inline object-cover w-8 h-8 mr-2 rounded-full"
            src={src}
            alt="Most liked"
          />
        </div>
        <div className="text-gray-500 font-bold">{number}</div>
      </div>
    </div>
  );
}

export default Badge;
