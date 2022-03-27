import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { SearchIcon } from "@heroicons/react/solid";
import Navbar from "../../components/Navbar";
import List from "../Imagines/Home/General/List";
import CareerNavbar from "../../components/career/CareerNavbar";
import { ChatAlt2Icon } from "@heroicons/react/outline";
import CareerSidebar from "../../components/career/CareerSidebar";
import CareerQuestionList from "../../components/career/CareerQuestionList";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuestionAction } from "../../store/apps/qna/qna-action";

function Career() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isLogged, token } = auth;

  useEffect(() => {
    dispatch(getAllQuestionAction(token));
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
