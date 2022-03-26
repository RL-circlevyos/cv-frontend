import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import PersonImage from "../../../assets/person.png";

function ExamItem() {
  return (
    <div className="bg-white   p-3 rounded-lg shadow-md cursor-pointer">
      {/* header */}
      <div className="flex justify-between items-start">
        <div className="text-xl text-blue-600 font-bold">Exam Name</div>
        <div className="text-gray-600 text-xs font-semibold">
          Published on 12.02.2022
        </div>
      </div>
      {/* middle */}
      <div>
        <div className="w-lg truncate text-sm text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </div>
        <div className="flex py-2 items-center space-x-2">
          <div className="text-base font-semibold text-teal-600">
            Application Date :
          </div>
          <div className="text-base font-bold tracking-wider text-gray-500">
            12.02.2022
          </div>
          <ArrowNarrowRightIcon className="h-5 w-5 text-green-700" />
          <div className="text-base font-bold tracking-wider text-gray-500">
            12.02.2022
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex ">
        <div className="flex space-x-2">
          <div className="text-teal-600 font-bold">Exam Date :</div>
          <div className="text-base font-bold tracking-wider text-gray-500">
            12.02.2022
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <div>Provider Name</div>
        <img src={PersonImage} alt="" className="h-8 w-8" />
      </div>
    </div>
  );
}

export default React.memo(ExamItem);
