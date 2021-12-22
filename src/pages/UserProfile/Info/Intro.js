import React from "react";
import Navbar from "./../../../components/Navbar";
import Details from "./Details";
import Revenue from "./Revenue";

const Intro = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-start w-full">
        <div className="grid place-items-center mt-4  max-w-7xl">
          <div className="flex items-start">
            <div className="lg:w-3/4">
              <Details />
            </div>
            <div className="lg:w-1/4">
              <Revenue />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Intro;
