import src from "../../../../assets/series.svg";
import React from "react";

import Navbar from "../../../../components/Navbar";

import Sidebar from "../Sidebar";

const Series = () => {
  return (
    <div className="h-screen w-full font-Mulish fixed">
      <Navbar />
      <div className="flex justify-center items-start w-full">
        <div className="flex justify-between items-start w-full max-w-7xl">
          <div>
            <Sidebar />
          </div>
          <div className="flex justify-center items-center w-full flex-col mt-2 md:mt-5">
            <img src={src} alt="Under Construction" className="w-full h-96" />

            <span className="text-gray-400 text-2xl font-extrabold pt-10">
              {" "}
              Series ComingSoon...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Series);
