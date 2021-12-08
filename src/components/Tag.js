import React from "react";

const Tag = ({ tagname }) => {
  return (
    <div className="w-12 font-medium rounded-3xl px-1 py-1 bg-greyish-200 text-gray-900 text-center cursor-pointer hover:underline text-xs">
      {tagname}
    </div>
  );
};

export default Tag;
