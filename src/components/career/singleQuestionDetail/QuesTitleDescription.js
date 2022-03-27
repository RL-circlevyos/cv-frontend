import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/outline";
import React from "react";
import { useSelector } from "react-redux";

function QuesTitleDescription() {
  const { singlequestion } = useSelector((state) => state.qna);

  return (
    <div>
      <div className="w-full">
        <div className="text-sm text-gray-400 border-b-2 ">Question</div>
        <div className="py-2 text-bold tracking-wider font-serif text-xl">
          {singlequestion?.question?.title}
        </div>
        <div className="px-3 ">
          <div className="text-sm text-gray-500">Description</div>
          <div className="border-t-2 "></div>
          <div
            className="tracking-wider text-justify text-sm text-gray-800"
            dangerouslySetInnerHTML={{
              __html: singlequestion?.question?.body,
            }}
          ></div>
        </div>
        <div className="flex justify-end space-x-8 pt-5">
          <div className="flex items-center space-x-1">
            <ThumbUpIcon className="h-8 w-8 text-green-500" />
            <div className="font-semibold">
              {singlequestion?.question?.likes?.length}
            </div>
          </div>
          {/* <div className="flex items-start space-x-1">
            <ThumbDownIcon className="h-8 w-8 text-red-700" />
            <div className="font-semibold">40</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default React.memo(QuesTitleDescription);
