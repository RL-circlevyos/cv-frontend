import { CheckCircleIcon, ClockIcon } from "@heroicons/react/solid";
import React from "react";

function SkillItem({ isVerify, name }) {
  return (
    <div className="flex space-x-2 items-center bg-white shadow-md p-3 rounded-md">
      <div className="text-xl font-serif font-semibold">{name}</div>
      {!isVerify ? (
        <ClockIcon className="h-5 w-5 text-yellow-700" />
      ) : (
        <CheckCircleIcon className="h-5 w-5 text-green-700" />
      )}
    </div>
  );
}

export default React.memo(SkillItem);
