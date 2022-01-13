import React from "react";
import List from "../Contribution/Imagines/List";
import Intro from "./Intro";

const Profile = () => {
  return (
    <div>
      <Intro />

      <div className="flex justify-center items-center">
        <div className="mt-4 w-full max-w-7xl">
          <div className="font-Mulish flex flex-wrap items-start justify-between space-x-6 w-full mt-6 pb-8 overflow-x-hidden">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Profile);
