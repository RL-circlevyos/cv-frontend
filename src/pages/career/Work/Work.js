import { UploadIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import RecommendedJobs from "../../../components/career/ReadyForWork/RecommendedJobs";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllJobAction,
  getAllUserCreatedJobAction,
} from "../../../store/apps/job/job-action";

function Work() {
  const auth = useSelector((state) => state.auth);
  const { userDetails } = useSelector((state) => state.auth);
  const { token } = auth;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobAction(token));
    dispatch(getAllUserCreatedJobAction(token));
  }, [dispatch, token]);
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <CareerNavbar isWork={true} />
      <div className="flex justify-between ">
        <CareerSidebar />
        {/* Recommended jobs */}
        <RecommendedJobs />
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default React.memo(Work);
