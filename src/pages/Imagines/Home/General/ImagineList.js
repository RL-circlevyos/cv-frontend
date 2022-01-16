import { ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Recommendations from "./Recommendation/Recommendation";
import List from "./List";
import Sidebar from "../Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Info from "../Info";

const ImagineList = () => {
  return (
    <div className="h-screen w-full font-Mulish fixed">
      <Navbar />
      <div className="flex justify-center items-start w-full">
        <div className="flex justify-between items-start w-full max-w-7xl">
          <div>
            <Sidebar />
          </div>
          <div className="flex justify-center items-center w-full max-w-lg flex-col mt-2 md:mt-5">
            <div className="w-full flex justify-center items-center px-4 mt-4 lg:mt-0">
              <Scrollbars
                thumbSize={1}
                autoHide
                style={{ width: "100%", height: "95vh" }}
              >
                <div className="w-full flex justify-center items-center">
                  <List />
                </div>
              </Scrollbars>
            </div>
          </div>
          <div className="block lg:hidden"></div>
          <div className="lg:block hidden">
            <div className="block max-w-xs pb-4">
              <span className="w-1/4 ">
                {" "}
                <Info />
              </span>
            </div>
            {/* <Scrollbars
              autoHide
              thumbSize={1}
              autoHeight
              autoHeightMax={"75vh"}
              style={{ width: "100%" }}
            >
             <span className=" flex  items-center  px-2 justify-between font-Libre">
                  <span className="text-2xl  text-yellow-900">Trending</span>
                  <span className="float-right">All</span>
                </span>
              </span>
              <div className="block max-w-xs pb-4">
                <Recommendations />
              </div>
            </Scrollbars> */}
          </div>
        </div>
        <ToastContainer autoClose={3000} />
      </div>
    </div>
  );
};

export default React.memo(ImagineList);
