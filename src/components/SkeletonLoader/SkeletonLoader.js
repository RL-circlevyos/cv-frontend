import React from "react";

function SkeletonLoader() {
  return (
    <div>
      <div class="  border-primary shadow-md rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-4 py-1">
            <div class="h-11 bg-gray-300 rounded w-7/5"></div>
            <div class="space-y-2">
              <div class="h-4 bg-gray-300 rounded"></div>
              <div class="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <div className="flex animate-pulse">
          <div class="rounded-full bg-gray-400 h-9 w-9 mr-2"></div>
          <div>
            <div class="h-4 bg-gray-300 rounded"></div>
          </div>
          <div class="h-2 bg-gray-300 rounded  w-2/6"></div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SkeletonLoader);
