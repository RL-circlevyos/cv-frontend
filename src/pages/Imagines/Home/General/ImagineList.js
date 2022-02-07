import React from "react";
import Scrollbars from "react-custom-scrollbars-2";

import Navbar from "../../../../components/Navbar";

import List from "./List";
import Sidebar from "../Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Info from "../Info";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ImagineList = () => {
  return (
    <div className="h-screen w-full font-Mulish fixed">
      <Navbar />
      <div className="flex justify-center items-start w-full">
        <div className="flex justify-between items-start w-full max-w-7xl">
          <div>
            <Sidebar />
          </div>
          <div className="flex justify-center items-center w-full max-w-lg flex-col ">
            <div className="w-full flex justify-center flex-col items-center px-4 mt-4 lg:mt-0">
              {/**  {imagine.uploadIndicator === true && (
                <Progress
                  amount="%"
                  value={imagine.uploadPercentage}
                  max={100}
                />
              )} 

              <Progress amount="%" value={10} max={100} />*/}

              <Scrollbars
                thumbSize={1}
                autoHide
                style={{ width: "100%", height: "92vh" }}
              >
                <div className=" md:hidden bg-primary text-white py-2 w-full flex justify-center items-start px-2 rounded-md">
                  <div className="font-bold text-base md:text-lg px-3">
                    Early Bird Registration...
                  </div>
                  <Link
                    to="/cv/offers/detail-procedure"
                    className="bg-teal-800 flex justify-center py-1 rounded-lg mx-2 px-2"
                  >
                    Click to know more
                  </Link>
                </div>
                <div className="w-full flex justify-center px-2 lg:0 items-center md:mt-5 mt-3">
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
        <Helmet>
          <title> circlevyos</title>
          <meta
            name="description"
            content="a social media platform for creative minds dedicated to readers, writers, painters, singers, voice artists and sound creators"
          />
        </Helmet>
        <ToastContainer autoClose={3000} />
      </div>
    </div>
  );
};

export default React.memo(ImagineList);
