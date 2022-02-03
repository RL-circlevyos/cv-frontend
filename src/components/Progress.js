import React from "react";

const ProgressBar = ({ value, max, width, amount }) => {
  return (
    <div className="flex items-center w-full pb-4">
      <progress
        style={{ backgroundColor: "#f3f3f3" }}
        width={width}
        className="progress h-1 rounded-full w-full mr-2 border border-gray-200 bg-cyan-600"
        value={value}
        max={max}
      />
      <span className=" text-cyan-700 text-tiny lg:text-sm font-bold flex items-center">
        {(value * 100) / max}

        <i> {amount}</i>
      </span>
    </div>
  );
};

export default ProgressBar;
