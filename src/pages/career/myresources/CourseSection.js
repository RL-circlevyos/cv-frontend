import React from "react";
import CourseVideoItem from "./CourseVideoItem";

function CourseSection({ sectionname, videos }) {
  return (
    <div>
      {/* section name */}
      <div className="bg-teal-700  px-5 py-2 rounded-lg text-white font-semibold text-lg">
        {sectionname}
      </div>

      {/* section video items */}
      <div className="pt-2 space-y-2">
        {videos.map((video) => (
          <CourseVideoItem
            key={video?._id}
            videoid={video?._id}
            videoname={video?.videoname}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(CourseSection);
