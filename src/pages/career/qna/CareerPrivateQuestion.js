import React, { useEffect } from "react";
import CareerSidebar from "../../../components/career/CareerSidebar";
import QuestionCreateForm from "../../../components/career/qna/QuestionCreateForm";
import Navbar from "../../../components/Navbar";
import MentorList from "../../../components/career/qna/MentorList";
import { useDispatch, useSelector } from "react-redux";
import { getAllMentorAction } from "../../../store/apps/user/user-action";

function CareerPrivateQuestion() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMentorAction(auth.token));
  }, [dispatch, auth.token]);
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />

      <div className="flex ">
        <CareerSidebar />
        <QuestionCreateForm isPrivate={true} />
        <div className="px-10 max-w-md ">
          <div className="p-3 mb-5 text-center text-sm font-semibold text-gray-600 border-b-2 border-gray-500">
            Choose mentors from list
          </div>

          <MentorList />
        </div>
      </div>
    </div>
  );
}

export default React.memo(CareerPrivateQuestion);
