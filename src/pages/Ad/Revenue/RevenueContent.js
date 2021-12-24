import React from "react";
import {
  EyeIcon,
  ChatAlt2Icon,
  LightBulbIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/solid";

function RevenueContent() {
  return (
    <div>
      <div>
        <div className="px-2 divide-y-2">
          <div className="font-bold text-gray-500">20 nov, 2021</div>
          <hr className="w-28 mb-2  " />
        </div>
        <div className="flex px-3 ">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image1"
            className="px-2 h-30 w-48"
          />

          <div className="mr-10">
            <div className="font-bold text-lg mb-3">Here is the title</div>
            <div className="flex">
              <div className="font-bold text-md mb-3 text-greyish-500">
                Status :
              </div>
              <div className="font-semibold text-lg mb-3 ml-2 text-green-500">
                Online
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="mr-10">
              <EyeIcon className="text-primary" />
              <div className="font-bold mt-2">12 k</div>
            </div>

            <div className="mr-10">
              <ChatAlt2Icon className="text-teal-500" />
              <div className="font-bold mt-2">100</div>
            </div>

            <div className="mr-10">
              <LightBulbIcon className="text-yellow-400" />
              <div className="font-bold mt-1">1002</div>
            </div>

            <div className="mr-10">
              <CurrencyDollarIcon className="text-yellow-700" />
              <div className="font-bold mt-2">20k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueContent;
