import React from "react";
import SkillTestItem from "./SkillTestItem";

function SkillTests() {
  return (
    <div className="space-y-2 overflow-y-auto h-96 no-scrollbar">
      <SkillTestItem isComplete={true} />
      <SkillTestItem isComplete={true} />
      <SkillTestItem isComplete={true} />
      <SkillTestItem />
      <SkillTestItem />
      <SkillTestItem />
      <SkillTestItem />
      <SkillTestItem />
      <SkillTestItem />
      <SkillTestItem />
      <SkillTestItem />
      <SkillTestItem />
    </div>
  );
}

export default React.memo(SkillTests);
