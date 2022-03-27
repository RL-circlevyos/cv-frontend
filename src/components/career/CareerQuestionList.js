import { LinearProgress } from "@mui/material";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import CareerQuestionListItem from "./CareerQuestionListItem";

function CareerQuestionList() {
  const { questionLists, isUploading } = useSelector((state) => state.qna);

  return (
    <div>
      {isUploading && (
        <span className="text-lg text-primary block mt-4 mb-4 w-full">
          {" "}
          <LinearProgress color="success" />
          <span className="text-base leading-relaxed italic font-semibold flex justify-center items-center">
            Uploading...
          </span>
        </span>
      )}
      <div className="mx-auto justify-items-center  space-y-3 h-screen  rounded-md pt-6 pb-44 mr-4 xl:mr-40 overflow-y-auto overscroll-none no-scrollbar ">
        {questionLists?.Questions?.map((question) => (
          <>
            <CareerQuestionListItem
              key={question?._id}
              questionid={question?._id}
              questionTitle={question.title}
              profileImageQAthr={question?.user?.photo?.secure_url}
              username={question?.user?.name}
              createdat={question?.createdAt}
              likes={question?.likes}
            />
          </>
        ))}
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default React.memo(CareerQuestionList);
