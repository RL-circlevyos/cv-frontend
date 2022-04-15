import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import PersonImage from "../../../assets/person.png";

function ExamPaperItem({ papername, paperDetails, username, publishdate, id }) {
  return (
    <Link
      to={`/career-guide/myresources/mockpapers&ans/${id}`}
      className="bg-white   p-3 rounded-lg shadow-md cursor-pointer"
    >
      {/* header */}
      <div className="flex justify-between items-start">
        <div className="text-xl text-blue-600 font-bold">{papername}</div>
        <div className="text-gray-600 text-xs font-semibold">
          {/* Published on {moment(createdAt).format("MMMM Do YYYY")} */}
          {moment(publishdate).format("MMMM Do YYYY")}
        </div>
      </div>
      {/* middle */}
      <div>
        <div className="w-lg truncate text-sm text-gray-600">
          {paperDetails}
        </div>
      </div>
      {/* bottom */}

      <div className="flex items-center justify-end space-x-2">
        <div>{username}</div>
        <img src={PersonImage} alt="" className="h-8 w-8 rounded-full" />
      </div>
    </Link>
  );
}

export default React.memo(ExamPaperItem);
