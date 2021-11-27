import React from "react";

const Tag = ({ tagname }) => {
  return (
    <div className="w-16 rounded-3xl px-1 py-1 bg-greyish-300 text-gray-900 text-center text-xs">
      {tagname}
    </div>
  );
};

export default Tag;
