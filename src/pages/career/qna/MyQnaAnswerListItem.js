import { LightBulbIcon } from "@heroicons/react/outline";
import { ClipboardCheckIcon } from "@heroicons/react/solid";
import React from "react";
import PersonImage from ".././../../assets/person.png";

function MyQnaAnswerListItem() {
  return (
    <div className="border-2 py-3 px-2 rounded">
      {/* top */}
      <div>
        <div className="flex justify-between">
          <div className="flex space-x-2 items-center">
            <img src={PersonImage} alt="" className="h-6 w-6 rounded-full " />
            <div className="text-sm font-semibold text-gray-600">User Name</div>
          </div>
          <div className="text-gray-600 text-sm">12.02.2022</div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex items-center space-x-5">
        {/* bottom left */}
        <div className="pt-10">
          <div className="space-y-6 items-center text-center">
            <LightBulbIcon className="h-8 w-8 text-yellow-600" />
            <ClipboardCheckIcon className="h-6 w-6 text-green-700" />
          </div>
        </div>
        {/* bottom right */}
        <div className=" space-y-8">
          {/* bottom right up */}
          <div className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </div>
          {/* bottom right down */}
          <div className="flex bg-teal-600 max-w-min px-1 py-1 rounded-lg text-white font-semibold hover:bg-teal-700 cursor-pointer ">
            <div></div>
            <div>Accept</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MyQnaAnswerListItem);
