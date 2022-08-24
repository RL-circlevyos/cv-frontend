import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormItem from "../../../components/career/userRequest/FormItem";
import Navbar from "../../../components/Navbar";
import { mentorReqAction } from "../../../store/apps/auth/auth-action";

function MentorRequest() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [reqOrganization, setReqOrganization] = useState();
  const [reqDesignation, setReqDesignation] = useState();
  const [reqCertificate, setReqCertificate] = useState();
  const [reqResume, setReqResume] = useState();

  const formdata = new FormData();
  formdata.append("organization", reqOrganization);
  formdata.append("designation", reqDesignation);
  formdata.append("jobProvider", true);
  formdata.append("verificationFile", reqCertificate);
  formdata.append("resume", reqResume);

  function mentorRequestHandler() {
    dispatch(mentorReqAction(formdata, token));
  }
  return (
    <div>
      <Navbar />
      <div className="flex justify-center p-6">
        <form action="" className="px-52 space-y-10">
          <div className="text-3xl text-center  font-bold text-purple-600 ">
            Request for Mentor
          </div>
          <FormItem
            label="What is your organization ?"
            inputType="text"
            inputPlaceholder="Add your organization"
            buttonRequired={true}
            onInputChange={(e) => {
              setReqOrganization(e.target.value);
            }}
          />
          <FormItem
            label="What is your designation ?"
            inputPlaceholder="Add your designation"
            inputType="text"
            buttonRequired={true}
            onInputChange={(e) => {
              setReqDesignation(e.target.value);
            }}
          />
          <FormItem
            label="Upload your qualification certificate / organization recommendation later ?"
            inputPlaceholder="Add your organization"
            inputType="file"
            onInputChange={(e) => {
              console.log(e.target.files[0]);
              setReqCertificate(e.target.files[0]);
            }}
          />
          <FormItem
            label="Upload your resume ?"
            inputType="file"
            onInputChange={(e) => {
              setReqResume(e.target.files[0]);
            }}
          />
          <div className="flex justify-between py-10">
            <Link
              to="/career-guide/qna"
              className="bg-red-600 hover:bg-red-800 cursor-pointer text-left max-w-min  px-11 py-1 text-lg font-semibold text-white rounded-md "
            >
              Cancel
            </Link>
            <div
              onClick={mentorRequestHandler}
              className="bg-teal-700 hover:bg-teal-800 cursor-pointer text-left max-w-min  px-11 py-1 text-lg font-semibold text-white rounded-md "
            >
              Submit
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default React.memo(MentorRequest);
