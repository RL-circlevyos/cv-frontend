import React from "react";

function JobExpItem() {
  return (
    <div className="bg-white shadow-lg w-min px-3 py-5 m-2 ">
      <div>Comapny_name</div>
      <div className="flex space-x-2">
        <div>
          <div>Start date</div>
          <div>12.02.2020</div>
        </div>
        <div>
          <div>End date</div>
          <div>12.02.2020</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(JobExpItem);
