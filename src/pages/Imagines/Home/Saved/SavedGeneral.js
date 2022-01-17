import { ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import List from "../General/List";
import Sidebar from "../Sidebar";
import GCard from "./GCard";

const SavedGeneral = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  return (
    <div className="h-screen w-full font-Mulish fixed">
      <Navbar />
      <div className="flex justify-center items-start w-full">
        <div className="flex justify-around items-start w-full max-w-7xl">
          <div>
            <Sidebar />
          </div>
          <div className="flex justify-center items-center w-full max-w-4xl flex-col mt-2 md:mt-5">
            <div className="w-full flex justify-center items-center px-4">
              <Scrollbars
                thumbSize={1}
                autoHide
                style={{ width: "100%", height: "88vh" }}
              >
                <div className="w-full flex flex-wrap gap-4 justify-center items-center">
                  {userDetails?.saveimagines?.map((sv) => (
                    <>
                      <GCard username={sv.title} image={sv.photo} id={sv.id} />
                    </>
                  ))}
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
