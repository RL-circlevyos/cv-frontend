import {
  BriefcaseIcon,
  CogIcon,
  CreditCardIcon,
  DocumentAddIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import PersonImage from "../../../assets/person.png";
import {
  getJobSeekersListAction,
  getSingleJobAction,
  jobApplyAction,
} from "../../../store/apps/job/job-action";
import { useParams } from "react-router-dom";

function SingleJobDetail() {
  const { userDetails, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { job, appliedJobSeekers } = useSelector((state) => state.job);
  console.log(appliedJobSeekers);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getSingleJobAction(token, id));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [token, id, dispatch]);

  function jobApply() {
    dispatch(jobApplyAction(token, id));
  }

  return (
    <div className="h-screen w-screen fixed">
      <Navbar />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50 px-20 py-5 ">
          <div className="flex space-x-2 items-center py-2">
            <img
              src={
                job?.job?.user?.photo
                  ? job?.job?.user?.photo?.secure_url
                  : PersonImage
              }
              alt={job?.job?.user?.name}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="text-2xl font-serif  text-gray-600 ">
                {job?.job?.user?.name}
              </div>
            </div>
          </div>
          <div className="text-3xl text-teal-700 font-serif font-semibold">
            {job?.job?.title}
          </div>
          <div>
            <div className="text-gray-600 font-semibold font-serif underline underline-offset-8 py-2">
              job Description
            </div>
            <div
              className="font-serif text-xl"
              dangerouslySetInnerHTML={{
                __html: job?.job?.description,
              }}
            >
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem */}
            </div>

            <div className="py-10">
              <div className="grid gap-1 grid-cols-2 p-2 space-y-6 text-2xl font-serif">
                <div className="flex space-x-3 items-center">
                  <div className="flex space-x-1 items-center">
                    <CogIcon className="text-gray-500 h-5 w-5" />
                    <div className=" ">Experience :</div>
                  </div>
                  <div className="font-semibold tracking-wider">
                    {job?.job?.experience}
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="flex space-x-1 items-center">
                    <CogIcon className="text-gray-500 h-5 w-5" />
                    <div className=" ">Requirements :</div>
                  </div>
                  <div className="font-semibold tracking-wider">
                    {job?.job?.requirements}
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="flex space-x-1 items-center">
                    <CreditCardIcon className="text-yellow-500 h-5 w-5" />
                    <div className="">Salary :</div>
                  </div>
                  <div className="font-semibold tracking-wider">
                    {job?.job?.salary}
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="flex space-x-1 items-center">
                    <BriefcaseIcon className="text-green-500 h-5 w-5" />
                    <div className=" ">Job Type :</div>
                  </div>
                  <div className="font-semibold tracking-wider ">
                    {job?.job?.jobtype}
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="flex space-x-1 items-center">
                    <LocationMarkerIcon className="text-teal-600 h-5 w-5" />
                    <div className=" ">Location :</div>
                  </div>
                  <div className="font-semibold tracking-wider ">location</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between px-2 items-center ">
              {userDetails.jobProviderStatus ? (
                ""
              ) : (
                <div className="flex space-x-1 items-center">
                  <DocumentAddIcon className="h-6 w-6 text-purple-700" />
                  <div className="text-sm text-purple-700 font-semibold">
                    Resume Match
                  </div>
                </div>
              )}
              {userDetails.jobProviderStatus ? (
                ""
              ) : (
                <div className="bg-teal-700 hover:bg-teal-800 px-3 py-1 rounded-lg">
                  <div
                    onClick={jobApply}
                    className="text-white text-lg cursor-pointer font-semibold"
                  >
                    Apply
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleJobDetail);
