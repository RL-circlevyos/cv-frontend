import { ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import List from "../General/List";
import Sidebar from "../Sidebar";

const SavedGeneral = () => {
  return (
    <div className="h-screen w-full font-Mulish fixed">
      <Navbar />
      <div className="flex justify-center items-start w-full">
        <div className="flex justify-around items-start w-full max-w-7xl">
          <div>
            <Sidebar />
          </div>
          <div className="flex justify-center items-center w-full max-w-lg flex-col mt-2 md:mt-5">
            <div className="w-full flex justify-center items-center px-4">
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
        </div>
      </div>
    </div>
  );
};

export default React.memo(SavedGeneral);
