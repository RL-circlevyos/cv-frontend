import React from "react";
import MockTestItem from "./MockTestItem";

function MockTestList() {
  return (
    <div className=" space-y-2 overflow-y-auto h-96 no-scrollbar">
      <MockTestItem />
      <MockTestItem />
      <MockTestItem />
      <MockTestItem />
      <MockTestItem />
      <MockTestItem />
      <MockTestItem />
      <MockTestItem />
      <MockTestItem />
      <MockTestItem />
    </div>
  );
}

export default React.memo(MockTestList);
