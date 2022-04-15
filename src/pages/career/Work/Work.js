import { UploadIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import RecommendedJobs from "../../../components/career/ReadyForWork/RecommendedJobs";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobAction } from "../../../store/apps/job/job-action";

function Work() {
  const auth = useSelector((state) => state.auth);
  const { userDetails } = useSelector((state) => state.auth);
  const { token } = auth;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobAction(token));
  }, [dispatch, token]);
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <CareerNavbar isWork={true} />
      <div className="flex justify-between ">
        <CareerSidebar />

        {/* Recommended jobs */}

        <RecommendedJobs />

        {!userDetails.jobProviderStatus && (
          <div className="px-10 max-w-md ">
            <div className="p-3 mb-5 text-center text-sm font-semibold text-gray-600 border-b-2 border-gray-500">
              Resume
            </div>

            <div className="justify-center text-center space-y-2 max-w-md">
              <div className="flex border-2 border-primary text-teal-700 px-2 py-2 hover:bg-primary hover:text-white cursor-pointer hover:font-semibold rounded-md justify-start">
                <UploadIcon className="h-5 w-5 " />
                {/* <div className="pl-2">Upload</div> */}
                <div class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                  <div class="absolute">
                    <div class="flex flex-col items-center ">
                      {" "}
                      <i class="fa fa-cloud-upload fa-3x text-gray-200"></i>{" "}
                      <span class="block text-gray-400 font-normal">
                        Attach you files here
                      </span>{" "}
                      <span class="block text-gray-400 font-normal">or</span>{" "}
                      <span class="block text-blue-400 font-normal">
                        Browse files
                      </span>{" "}
                    </div>
                  </div>{" "}
                  <input type="file" class="h-full w-full opacity-0" name="" />
                </div>
              </div>
              <div className="font-semibold text-greyish-600">or</div>
              <div className="flex border-2 border-primary px-2 py-2 text-teal-700 hover:bg-primary hover:text-white cursor-pointer hover:font-semibold rounded-md items-center justify-center">
                <PlusCircleIcon className="h-5 w-5  " />
                <div className="pl-2 max-w-full">Create </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default React.memo(Work);
