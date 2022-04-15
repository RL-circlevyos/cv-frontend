import React from "react";

function SkillTestItem({ isComplete }) {
  return (
    <div className="bg-white py-2 cursor-pointer w-1/2 shadow-md text-left items-center flex justify-between px-4 rounded-md mx-4">
      <div className="text-lg font-medium">Skill</div>
      <div>
        {!isComplete ? (
          <div className="text-blue-700 bg-gray-100 px-2 rounded-md hover:bg-gray-200 hover:text-blue-800 hover:font-semibold">
            Start
          </div>
        ) : (
          <div className="text-green-700  px-2 ">Complete</div>
        )}
      </div>
    </div>
  );
}

export default React.memo(SkillTestItem);
