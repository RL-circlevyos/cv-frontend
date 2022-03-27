import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormItem from "../../components/career/userRequest/FormItem";
import Navbar from "../../components/Navbar";

function Counselling() {
  const auth = useSelector((state) => state.auth);
  const { token } = auth;

  const [currentStatus, setCurrentStatus] = useState();
  const [wantToBe, setwantToBe] = useState();
  const [interest, setInterest] = useState();
  const [stream, setstream] = useState();
  const [classSchool, setclassSchool] = useState();
  const [sem, setSem] = useState();
  const [currentWorking, setcurrentWorking] = useState();
  const formdata = new FormData();

  formdata.append("intereset", interest);
  formdata.append("wanttobe", wantToBe);
  formdata.append("currentStatus", currentStatus);
  formdata.append("class", classSchool);
  formdata.append("stream", stream);
  formdata.append("sem", sem);
  formdata.append("currentlyWorking", currentWorking);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCounselling = {
      interest: interest,
      wanttobe: wantToBe,
      currentStatus: currentStatus,
      class: classSchool ? classSchool : "",
      stream: stream ? stream : "",
      sem: sem ? sem : "",
      currentWorking: currentWorking ? currentWorking : "",
    };
    console.log(newCounselling);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/counsellingcreate`,
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            Authorization: token,
          },
          body: formdata,
        }
      );

      if (!response.ok) {
        return Error("error occured in counselling");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(currentStatus);
  return (
    <div>
      <Navbar />
      <div className="flex bg-gray-50  justify-center h-screen">
        <div className="bg-white shadow-md max-h-px">
          <div className="text-purple-600 text-4xl border-b-2">
            Tell us about yourself
          </div>
          <form
            action=""
            className="text-2xl text-teal-600 font-medium p-5  max-w-3xl space-y-5 tracking-wider "
          >
            <div>
              <div className="pb-2">What is your interst ? </div>
              <input
                type="text"
                onChange={(e) => {
                  setInterest(e.target.value);
                }}
                placeholder="Type your interest"
                className="px-3 bg-gray-50 border-b-2 border-teal-800 focus:outline-none "
              />
            </div>
            <div>
              <div className="pb-2">What you want to be ?</div>
              <input
                type="text"
                onChange={(e) => {
                  setwantToBe(e.target.value);
                }}
                placeholder="Type here"
                className="px-3 bg-gray-50 border-b-2 border-teal-800 focus:outline-none "
              />
            </div>
            <div>
              <div className="pb-2">What is your current status</div>
              <select
                name="current_status"
                id="current_status"
                className="w-80 bg-gray-100 px-2 py-2 shadow-md rounded-full"
                onChange={(e) => {
                  setCurrentStatus(e.target.value);
                }}
              >
                <option value="select">selete status</option>
                <option value="school">School</option>
                <option value="college">College</option>
                <option value="looking for job">Looking for job</option>
                <option value="already in job">Already in job</option>
              </select>
            </div>
            <div className={currentStatus === "school" ? "block" : "hidden"}>
              <div>Which class you are in ?</div>
              <input
                type="text"
                onChange={(e) => {
                  setclassSchool(e.target.value);
                }}
                placeholder="Type here"
                className="px-3 bg-gray-50 border-b-2 border-teal-800 focus:outline-none "
              />
            </div>
            <div
              className={
                currentStatus === "college" ||
                currentStatus === "looking for job" ||
                currentStatus === "already in job"
                  ? "block"
                  : "hidden"
              }
            >
              <div>What is your stream ?</div>
              <input
                type="text"
                onChange={(e) => {
                  setstream(e.target.value);
                }}
                placeholder="Type here"
                className="px-3 bg-gray-50 border-b-2 border-teal-800 focus:outline-none "
              />
            </div>
            <div className={currentStatus === "college" ? "block" : "hidden"}>
              <div>Which sem you are in ?</div>
              <input
                type="text"
                onChange={(e) => {
                  setSem(e.target.value);
                }}
                placeholder="Type here"
                className="px-3 bg-gray-50 border-b-2 border-teal-800 focus:outline-none "
              />
            </div>
            <div
              className={
                currentStatus === "already in job" ? "block" : "hidden"
              }
            >
              <div>Which field you are currently working ?</div>
              <input
                type="text"
                onChange={(e) => {
                  setcurrentWorking(e.target.value);
                }}
                placeholder="Type here"
                className="px-3 bg-gray-50 border-b-2 border-teal-800 focus:outline-none "
              />
            </div>
            <div className="flex justify-between py-4">
              <Link
                to="/career-guide/qna"
                className="bg-red-600 hover:bg-red-700 cursor-pointer text-white max-w-min px-2 py-1 rounded-lg text-lg font-semibold tracking-wide"
              >
                Cancel
              </Link>
              <div
                onClick={handleSubmit}
                className="bg-teal-600 hover:bg-teal-700 cursor-pointer text-white max-w-min px-2 py-1 rounded-lg text-lg font-semibold tracking-wide"
              >
                Submit
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Counselling);
