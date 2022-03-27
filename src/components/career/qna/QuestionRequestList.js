import React from "react";
import { useSelector } from "react-redux";
import QuestionRequestListItem from "./QuestionRequestListItem";

function QuestionRequestList() {
  const { requestedQuestions } = useSelector((state) => state.qna);

  return (
    <div>
      <div className="mx-auto justify-items-center w-screen space-y-3 h-screen  rounded-md pt-6 pb-44 mr-4 xl:mr-40 overflow-y-auto overscroll-none no-scrollbar ">
        {requestedQuestions?.reqQues?.map((reqQu) => (
          <>
            <QuestionRequestListItem
              key={reqQu?._id}
              createdAt={reqQu?.question?.createdAt}
              questionid={reqQu?.question?._id}
              title={reqQu?.question?.title}
              username={reqQu?.requestedUser?.name}
              userprofile={reqQu?.requestedUser?.photo?.secure_url}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default React.memo(QuestionRequestList);
