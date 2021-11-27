import React from "react";

const Tag = ({ tagname }) => {
  return (
    <div className="w-20 rounded-3xl px-3 py-1 bg-greyish-300 text-base text-gray-900 text-center">
      {tagname}
    </div>
  );
};

export default Tag;
