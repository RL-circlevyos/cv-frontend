import { ThumbDownIcon } from "@heroicons/react/outline";
import { ThumbUpIcon } from "@heroicons/react/solid";
import React from "react";

function MyQnaTitleDescription() {
  return (
    <div>
      <div>
        <div className="text-sm text-gray-400 border-b-2 ">Question</div>
        <div className="py-2 text-bold tracking-wider font-serif text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer
        </div>
        <div className="px-3 ">
          <div className="text-sm text-gray-500">Description</div>
          <div className="border-t-2 "></div>
          <div className="tracking-wider text-justify text-sm text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </div>
        </div>
        <div className="flex justify-end space-x-8 pt-5">
          <div className="flex items-center space-x-1">
            <ThumbUpIcon className="h-8 w-8 text-green-500" />
            <div className="font-semibold">20</div>
          </div>
          <div className="flex items-start space-x-1">
            <ThumbDownIcon className="h-8 w-8 text-red-700" />
            <div className="font-semibold">40</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MyQnaTitleDescription);
