import React from "react";
import { Link } from "react-router-dom";

function CareerStatus() {
  return (
    <div>
      <div className="justify-between flex">
        <div className="border-b-2 w-96 text-2xl font-semibold text-primary">
          <div>Your Career Status</div>
        </div>
        <Link
          to={`/dashboard/career`}
          className="my-1 p-1 border-2 border-teal-600 hover:bg-teal-700 cursor-pointer rounded-lg px-2 text-teal-600 hover:text-white text-lg font-bold"
        >
          Career Dashboard
        </Link>
        <Link
          to={`/counselling`}
          className="my-1 p-1 bg-teal-600 hover:bg-teal-700 cursor-pointer rounded-lg px-2 text-white text-lg font-bold"
        >
          Take Counselling
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2 gap-x-0 justify-start items-start text-center px-10 py-3 space-y-2 ">
        <div className="flex space-x-2 items-center">
          <div className="font-bold text-lg "> Your Skills&nbsp;: </div>
          <div>React,Node</div>
        </div>

        <div>
          <div className="flex space-x-1 items-center">
            <div className="font-bold text-lg  ">
              Current status of studying&nbsp;:
            </div>
            <div>School</div>
          </div>
          <div className="flex space-x-1 items-center">
            <div className="font-bold text-lg ">Class/Sem&nbsp;:</div>
            <div> Xii</div>
          </div>
        </div>

        <div className="flex space-x-2 items-center">
          <div className="font-bold text-lg "> Your Pending Tests&nbsp;: </div>
          <div>Math</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CareerStatus);
