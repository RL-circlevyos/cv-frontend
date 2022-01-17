import React from "react";

function SkeletonImagines() {
  return (
    <div>
      <div class="  border-primary shadow-md rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="flex">
            <div class="h-24 bg-gray-300 rounded w-24 "></div>

            {/* <div class="h-4 bg-gray-300 rounded"></div> */}
          </div>
          <div class="flex-1 ">
            <div class="flex">
              <div class="rounded-full bg-gray-400 h-9 w-9 mr-2"></div>
              <div class="h-2 bg-gray-300 rounded  w-2/6"></div>
            </div>
            <div class="h-2 bg-gray-300 mt-3 rounded  w-4/6"></div>
            <div class="h-2 bg-gray-300 mt-2 rounded  w-2/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SkeletonImagines);
