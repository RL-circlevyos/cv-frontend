import React, { useEffect } from "react";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import ExamPaperItem from "./ExamPaperItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserMockPaperAction } from "../../../store/apps/myresources/myresource-action";

function ExamPaperAndAns() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { userMockPapers } = useSelector((state) => state.myresource);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getUserMockPaperAction(token));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, token]);

  console.log(userMockPapers);
  return (
    <div className="fixed h-screen w-screen">
      <Navbar />
      <CareerNavbar isMentorDashBoard={true} />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50">
          {/* info and create section */}
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-purple-700 mx-2">
              Your papers and answers
            </div>
            <Link
              to="/dashboard/mentor/create-mockpaper"
              className="bg-purple-600 hover:bg-purple-700  mx-3 my-3 px-2 py-2 text-white font-semibold rounded-md cursor-pointer"
            >
              Create mock paper
            </Link>
          </div>
          <div className="bg-gray-50 px-3 h-screen  overflow-y-auto no-scrollbar">
            <div className="grid grid-rows-2">
              <div
                className="grid grid-cols-4 px-5 py-5 gap-6"
                // id="style-8"
              >
                {userMockPapers?.mockPapers?.map((mockPaper) => (
                  <>
                    <ExamPaperItem
                      key={mockPaper?._id}
                      id={mockPaper?._id}
                      paperDetails={mockPaper?.details}
                      papername={mockPaper?.papername}
                      username={mockPaper?.user?.name}
                      publishdate={mockPaper?.createdAt}
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ExamPaperAndAns);
