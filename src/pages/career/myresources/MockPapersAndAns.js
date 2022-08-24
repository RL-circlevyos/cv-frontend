import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import { getAllMockPaperAction } from "../../../store/apps/myresources/myresource-action";
import ExamPaperItem from "../dashboard/ExamPaperItem";

function MockPapersAndAns() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { allMockPapers } = useSelector((state) => state.myresource);

  useEffect(() => {
    dispatch(getAllMockPaperAction(token));
  }, [token, dispatch]);

  return (
    <div className="h-screen w-screen fixed">
      <Navbar />
      <CareerNavbar isMyresources={true} />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50">
          {/* info and create section */}
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-teal-700 mx-2">
              Recommended papers and answers
            </div>
          </div>
          <div className="bg-gray-50 px-3 h-screen  overflow-y-auto no-scrollbar">
            <div className="grid grid-rows-2">
              <div
                className="grid grid-cols-4 px-5 py-5 gap-6"
                // id="style-8"
              >
                {allMockPapers?.mockPapers?.map((paper) => (
                  <>
                    <ExamPaperItem
                      key={paper?._id}
                      id={paper?._id}
                      papername={paper?.papername}
                      publishdate={paper?.createdAt}
                      username={paper?.user?.name}
                      paperDetails={paper?.details}
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

export default React.memo(MockPapersAndAns);
