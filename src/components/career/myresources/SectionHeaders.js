import React from "react";
import { Link } from "react-router-dom";

function SectionHeaders({ router, headerTitle }) {
  return (
    <div className="flex justify-between pr-6">
      <div className="border-b-2 w-96 text-2xl font-semibold text-primary ">
        {headerTitle}
      </div>
      <Link to={router}>
        <div
          className={
            router === "none"
              ? "hidden"
              : `text-lg font-semibold text-blue-800 cursor-pointer`
          }
        >
          See More
        </div>
      </Link>
    </div>
  );
}

export default React.memo(SectionHeaders);
