import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import CareerNavbar from "../../components/career/CareerNavbar";
import CareerSidebar from "../../components/career/CareerSidebar";
import CareerQuestionList from "../../components/career/CareerQuestionList";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuestionAction } from "../../store/apps/qna/qna-action";

function Career() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { token } = auth;

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getAllQuestionAction(token));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, token]);

  return (
    <>
      <div className="h-screen w-screen font-Mulish fixed">
        <Navbar />
        <div>
          {/* upper navbar */}
          <CareerNavbar isQna={true} />

          <div className="flex  justify-between ">
            {/* career sidebar */}
            <CareerSidebar />

            <CareerQuestionList />

            <div></div>
            {/* career question list */}
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Career);
