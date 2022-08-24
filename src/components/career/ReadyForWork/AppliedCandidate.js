import { DocumentIcon } from "@heroicons/react/solid";
import React from "react";
import PersonImage from "../../../assets/person.png";

function AppliedCandidate({ name, resume }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-10">
      <div className="flex items-center space-x-10 ">
        <div className=" flex space-x-2 items-center">
          <img src={PersonImage} alt="" className="h-7 w-7" />
          <div>{name}</div>
        </div>
        <div>
          <a href={resume} target="_">
            <DocumentIcon className="h-7 w-7" />
          </a>
        </div>
      </div>
      <div className="flex space-x-3 pt-3">
        <div className="flex space-x-3">
          <div className="text-greyish-600 font-semibold">
            Verified Skill :{" "}
          </div>
          <div className="text-lg font-serif font-semibold">3</div>
        </div>
        <div className="flex space-x-3">
          <div className="text-greyish-600 font-semibold">experience : </div>
          <div className="text-lg font-serif font-semibold">3 yrs</div>
        </div>
        <div className="flex space-x-3">
          <div className="text-greyish-600 font-semibold">Ratings : </div>
          <div className="text-lg font-serif font-semibold">3 / 5</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AppliedCandidate);
