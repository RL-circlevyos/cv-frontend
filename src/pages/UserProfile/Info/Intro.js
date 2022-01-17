import React from "react";

import Detail from "./Detail";

/**import Revenue from "./Revenue";*/

const Intro = () => {
  return (
    <div className="flex justify-center items-start w-full">
      <div className="w-full  mt-4 max-w-7xl px-4">
        <div className="lg:flex justify-center items-center hidden px-4">
          <div className="w-3/4">
            <Detail />
          </div>
          {/* <div className="w-1/4">
              <Revenue />
            </div> */}
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 lg:hidden">
          <div className="w-full flex justify-center items-center px-4">
            <Detail />
          </div>
          {/* <div className="w-full flex justify-center items-center">
              <Revenue />
            </div> */}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default React.memo(Intro);
