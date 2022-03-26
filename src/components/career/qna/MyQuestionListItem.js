import React from "react";
import { Link } from "react-router-dom";
import PersonImage from "../../../assets/person.png";

function MyQuestionListItem() {
  return (
    <div>
      <div className="bg-gray-50 max-w-5xl py-2 rounded-lg shadow-md mx-auto justify-center">
        {/* Top container */}
        <div className="flex">
          {/* top left */}
          <div className="flex items-center flex-grow ">
            <img
              className="relative w-9 h-9 mx-2  rounded-full "
              src={PersonImage}
              alt=""
            />

            <div>
              <div className="text-sm text-gray-700 font-semibold">
                User Name
              </div>
              <div className="text-sm text-gray-500">12.02.2022</div>
            </div>
          </div>
        </div>

        <Link to="/career-guide/qna/myqna/12">
          {/* middle container */}
          <div className="pt-5  ">
            <div className="border-b-2 mx-3 text-sm text-gray-400">
              Question
            </div>
            <div className="px-3 font-serif tracking-wide text-lg font-semibold text-grey-800 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever ince the 1500s, when an unknown printer
            </div>
          </div>
          {/* bottom container */}
        </Link>
      </div>
    </div>
  );
}

export default React.memo(MyQuestionListItem);
