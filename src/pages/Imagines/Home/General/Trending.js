import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Recommendations from "./Recommendation/Recommendation";
import logo from "../../../../assets/notfound.svg";
import Navbar from "../../../../components/Navbar";

const Trending = () => {
  return (
    <div>
      <div className="lg:block hidden">
        <div className="grid place-items-center mt-10 font-Mulish">
          <div className="lg:text-large text-6xl text-primary">404</div>
          <div className="lg:w-1/2 w-3/4 h-72">
            <img src={logo} alt="" className="h-full w-full object-contain" />
          </div>
          <div className="md:text-4xl text-3xl lg:pt-7 pt-4 text-gray-600 tracking-normal">
            Page Not Found.....
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full block">
        <Navbar />
        <Scrollbars
          autoHide
          thumbSize={1}
          autoHeight
          autoHeightMax={"90vh"}
          style={{ width: "100%" }}
        >
          <div className="lg:hidden w-full flex justify-center flex-col items-center">
            <div className="block max-w-xl pb-4">
              <span className="w-full">
                <span className=" flex  items-center  px-2 justify-between font-Libre">
                  <span className="text-2xl  text-yellow-900">Trending</span>
                  <span className="float-right">All</span>
                </span>
              </span>
              <Recommendations />
            </div>
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default Trending;
