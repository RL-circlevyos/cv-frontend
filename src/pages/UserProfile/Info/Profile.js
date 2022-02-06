import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../../../components/Navbar";
import List from "../Contribution/Imagines/List";
import Intro from "./Intro";

const Profile = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Intro />

      <div className="flex justify-center items-center">
        <div className="mt-4 w-full max-w-7xl">
          <div className="font-Mulish flex flex-wrap items-start justify-between space-x-6 w-full mt-6 pb-8 overflow-x-hidden">
            <List />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default React.memo(Profile);
