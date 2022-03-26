import React from "react";
import { Link } from "react-router-dom";
import FormItem from "../../../components/career/userRequest/FormItem";
import Navbar from "../../../components/Navbar";

function MentorRequest() {
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
          />
          <FormItem
            label="What is your designation ?"
            inputPlaceholder="Add your designation"
            inputType="text"
            buttonRequired={true}
          />
          <FormItem
            label="Upload your qualification certificate / organization recommendation later ?"
            inputPlaceholder="Add your organization"
            inputType="file"
          />
          <FormItem label="Upload your resume ?" inputType="file" />
          <div className="flex justify-between py-10">
            <Link
              to="/career-guide/qna"
              className="bg-red-600 hover:bg-red-800 cursor-pointer text-left max-w-min  px-11 py-1 text-lg font-semibold text-white rounded-md "
            >
              Cancel
            </Link>
            <div className="bg-teal-700 hover:bg-teal-800 cursor-pointer text-left max-w-min  px-11 py-1 text-lg font-semibold text-white rounded-md ">
              Submit
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default React.memo(MentorRequest);
