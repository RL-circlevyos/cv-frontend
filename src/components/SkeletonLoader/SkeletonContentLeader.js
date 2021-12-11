import React from "react";

function SkeletonContentLeader() {
  return (
    <div>
      <div class="  border-primary   p-2 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 ">
            <div class="rounded-full bg-gray-400 h-11 w-11"></div>

            <div class="h-2 bg-gray-300 mt-3 rounded  w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonContentLeader;