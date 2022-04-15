import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import ExamItem from "../../../components/career/myresources/ExamItem";
import SectionHeaders from "../../../components/career/myresources/SectionHeaders";
import Navbar from "../../../components/Navbar";
import { getAllExamsAction } from "../../../store/apps/myresources/myresource-action";

function Exams() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { allExams } = useSelector((state) => state.myresource);

  useEffect(() => {
    dispatch(getAllExamsAction(auth.token));
  }, [dispatch, auth.token]);
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <CareerNavbar isMyresources={true} />
      <div className="flex">
        <CareerSidebar />

        <div className=""></div>
        <div className="bg-gray-50 px-3 h-screen w-screen overflow-y-auto no-scrollbar">
          <div className="grid grid-rows-2">
            <div>
              <SectionHeaders
                headerTitle="Upcoming & interested exams"
                router="none"
              />

              {/* interested course list */}
              <div
                className="grid grid-cols-4 px-5 py-5 gap-6"
                // id="style-8"
              >
                {allExams?.Exams?.map((exam) => (
                  <>
                    <ExamItem
                      examname={exam?.name}
                      key={exam?._id}
                      username={exam?.user?.name}
                      userprofile={exam?.user?.photo?.secure_url}
                      applicationDateFrom={exam?.applicationDatefrom}
                      applicationDateto={exam?.applicationDateto}
                      createdAt={exam?.createdAt}
                      examdetails={exam?.details}
                    />
                  </>
                ))}
                {/* 8 items */}
              </div>

              <div className="py-3">
                <SectionHeaders
                  headerTitle="Explore Other exams"
                  router="none"
                />

                {/* interested course list */}
                <div
                  className="grid grid-cols-4  px-5 py-5 gap-6"
                  // id="style-8"
                >
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                  <ExamItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Exams);
