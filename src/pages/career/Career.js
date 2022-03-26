import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { SearchIcon } from "@heroicons/react/solid";
import Navbar from "../../components/Navbar";
import List from "../Imagines/Home/General/List";
import CareerNavbar from "../../components/career/CareerNavbar";
import { ChatAlt2Icon } from "@heroicons/react/outline";
import CareerSidebar from "../../components/career/CareerSidebar";
import CareerQuestionList from "../../components/career/CareerQuestionList";

function Career() {
  return (
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
  );
}

export default React.memo(Career);
