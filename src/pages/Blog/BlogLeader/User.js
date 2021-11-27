import React from "react";

const User = ({ src, fullname, bgColor }) => {
  return (
    <div className="flex flex-col items-center w-14 h-14">
      <img
        src={src}
        alt="pics"
        className=" w-10 h-10 rounded-full object-cover"
      />
      <span className="text-xxs italic font-bold text-gray-900">
        {fullname}
      </span>
    </div>
  );
};

export default User;
