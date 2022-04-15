import React from "react";

function MockTestItem() {
  return (
    <div className="bg-white cursor-pointer w-1/2 shadow-md text-left items-center flex justify-around rounded-md mx-4">
      <div className="font-bold">Subject name</div>
      <div className="align-middle text-center">
        <div className="text-green-700 ">Completed</div>
        <div className="text-purple-700 font-semibold">1/10</div>
      </div>
    </div>
  );
}

export default React.memo(MockTestItem);
