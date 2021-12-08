import React from "react";

const User = ({ src, fullname, bgColor }) => {
  return (
    <div className="flex flex-col items-center w-16 h-16">
      <img
        src={src}
        alt="pics"
        className=" w-12 h-12 rounded-full object-cover"
      />
      <span className="text-xs mt-1 font-medium text-gray-900">{fullname}</span>
    </div>
  );
};

export default User;
