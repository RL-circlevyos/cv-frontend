import React from "react";
import CourseVideoItem from "./CourseVideoItem";

function CourseSection() {
  return (
    <div>
      {/* section name */}
      <div className="bg-teal-700  px-5 py-2 rounded-lg text-white font-semibold text-lg">
        Section name
      </div>

      {/* section video items */}
      <div className="pt-2 space-y-2">
        <CourseVideoItem />
        <CourseVideoItem />
        <CourseVideoItem />
        <CourseVideoItem />
        <CourseVideoItem />
        <CourseVideoItem />
      </div>
    </div>
  );
}

export default React.memo(CourseSection);
