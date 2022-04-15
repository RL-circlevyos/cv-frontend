import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import { createMockPaperAction } from "../../../store/apps/myresources/myresource-action";

function CreateMockPaper() {
  const [paperName, setPaperName] = useState();
  const [paperDetails, setPaperDetails] = useState();
  const [questionFile, setQuestionFile] = useState();
  const [answerFile, setAnswerFile] = useState();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const questionInputChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setQuestionFile(e.target.files[0]);
    }
  }, []);

  const formdata = new FormData();

  formdata.append("papername", paperName);
  formdata.append("details", paperDetails);
  formdata.append("questionfile", questionFile);
  formdata.append("answerfile", answerFile);

  const answerInputChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAnswerFile(e.target.files[0]);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createMockPaperAction(token, formdata));
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50">
          <div className=" ">
            <form className="grow bg-gray-50 h-screen px-60 py-5">
              <div className="flex items-center justify-between pb-5">
                <Link to="/dashboard/mentor/papers&ans">
                  <ArrowCircleLeftIcon className="h-10 w-10 text-gray-700 hover:text-gray-500 cursor-pointer" />
                </Link>

                <div
                  onClick={handleSubmit}
                  className="bg-primary px-5 py-2 rounded-lg text-white font-semibold w-min cursor-pointer hover:bg-teal-700"
                >
                  Post
                </div>
              </div>

              <div className="space-y-2 text-left items-start align-">
                <div className="px-2 text-base font-semibold text-gray-600">
                  Paper Name
                </div>
                <input
                  onChange={(e) => setPaperName(e.target.value)}
                  placeholder="Write note title"
                  className="bg-gray-200 px-5 py-3 w-full rounded-full focus:outline-none"
                />
              </div>
              <div>
                <div className="px-2 text-base py-3 font-semibold text-gray-600">
                  Description
                </div>
                <textarea
                  onChange={(e) => setPaperDetails(e.target.value)}
                  className="bg-gray-200 px-5 py-3 w-full rounded-md focus:outline-none"
                />
                {/* <Editor
          editorState={editorState}
          placeholder="Type your main content"
          toolbarClassName="flex justify-center mx-auto w-full"
          editorClassName="mt-6 bg-white shadow py-5 px-3 max-w-20"
          onEditorStateChange={onEditorStateChange}
          handleBeforeInput={handleBeforeInput}
          handlePastedText={handlePastedText}
          toolbar={{
            options: [
              "inline",
              // "blockType",
              "emoji",
              "colorPicker",
              // "list",
              "link",
              // "textAlign",
              //"history",
            ],
          }}
        /> */}
              </div>
              <div>
                <div className="px-2 text-base py-3 font-semibold text-gray-600">
                  Question
                </div>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={questionInputChange}
                />
              </div>
              <div>
                <div className="px-2 text-base py-3 font-semibold text-gray-600">
                  Upload Answer with qustion
                </div>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={answerInputChange}
                />
              </div>
              {/* TODO: Tag input */}
              {/* TODO: Price input */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CreateMockPaper);
