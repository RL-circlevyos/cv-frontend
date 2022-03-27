import React from "react";
import PersonImage from "../../../assets/person.png";
import { LightBulbIcon } from "@heroicons/react/outline";
import { ClipboardCheckIcon } from "@heroicons/react/solid";
import moment from "moment";

function AnswerListItem({ username, userprofile, createat, body, accept }) {
  return (
    <div className="border-2 py-3 px-2 rounded">
      {/* top */}
      <div>
        <div className="flex justify-between">
          <div className="flex space-x-2 items-center">
            <img
              src={userprofile ? userprofile : PersonImage}
              alt=""
              className="h-6 w-6 rounded-full "
            />
            <div className="text-sm font-semibold text-gray-600">
              {username}
            </div>
          </div>
          <div className="text-gray-600 text-sm">
            {moment(createat).format("MMMM Do YYYY, h:mm a")}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex items-center space-x-5">
        {/* bottom left */}
        <div className="pt-10">
          <div className="space-y-6 items-center text-center">
            <LightBulbIcon className="h-8 w-8 text-yellow-600" />
            {accept && (
              <ClipboardCheckIcon className="h-6 w-6 text-green-700" />
            )}
          </div>
        </div>
        {/* bottom right */}
        <div className="">{body}</div>
      </div>
    </div>
  );
}

export default React.memo(AnswerListItem);
