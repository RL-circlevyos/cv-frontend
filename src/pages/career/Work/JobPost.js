import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "draft-js/dist/Draft.css";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import { jobCreateAction } from "../../../store/apps/job/job-action";

function JobPost() {
  // * text edditor config
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorsState) => {
    setEditorState(editorsState);

    console.log(
      draftToHtml(convertToRaw(editorState.getCurrentContent())).length
    );
  };
  const count = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  ).length;
  const MAX_LENGTH = 20000;

  const getLengthOfSelectedText = () => {
    const currentSelection = editorState.getSelection();
    const isCollapsed = currentSelection.isCollapsed();

    let length = 0;

    if (!isCollapsed) {
      const currentContent = editorState.getCurrentContent();
      const startKey = currentSelection.getStartKey();
      const endKey = currentSelection.getEndKey();
      const startBlock = currentContent.getBlockForKey(startKey);
      const isStartAndEndBlockAreTheSame = startKey === endKey;
      const startBlockTextLength = startBlock.getLength();
      const startSelectedTextLength =
        startBlockTextLength - currentSelection.getStartOffset();
      const endSelectedTextLength = currentSelection.getEndOffset();
      const keyAfterEnd = currentContent.getKeyAfter(endKey);
      console.log(currentSelection);
      if (isStartAndEndBlockAreTheSame) {
        length +=
          currentSelection.getEndOffset() - currentSelection.getStartOffset();
      } else {
        let currentKey = startKey;

        while (currentKey && currentKey !== keyAfterEnd) {
          if (currentKey === startKey) {
            length += startSelectedTextLength + 1;
          } else if (currentKey === endKey) {
            length += endSelectedTextLength;
          } else {
            length += currentContent.getBlockForKey(currentKey).getLength() + 1;
          }

          currentKey = currentContent.getKeyAfter(currentKey);
        }
      }
    }

    return length;
  };

  const handleBeforeInput = () => {
    const currentContent = editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText("").length;
    const selectedTextLength = getLengthOfSelectedText();

    if (currentContentLength - selectedTextLength > MAX_LENGTH - 1) {
      return "handled";
    }
  };

  const handlePastedText = (pastedText) => {
    const currentContent = editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText("").length;
    const selectedTextLength = getLengthOfSelectedText();

    if (
      currentContentLength + pastedText.length - selectedTextLength >
      MAX_LENGTH
    ) {
      console.log(MAX_LENGTH.length);

      return "handled";
    }
  };

  // * text edditor config end

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { token } = auth;
  const formdata = new FormData();

  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState();
  const [experience, setExperience] = useState();
  const [requirements, setRequirements] = useState();
  const [jobType, setJobType] = useState();

  let navigate = useNavigate();

  formdata.append("title", title);

  formdata.append(
    "description",
    draftToHtml(convertToRaw(editorState.getCurrentContent()))
  );
  formdata.append("salary", salary);
  formdata.append("experience", experience);
  formdata.append("requirements", requirements);
  formdata.append("jobtype", jobType);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(jobCreateAction(formdata, token));

    navigate("/career-guide/work");
  };
  return (
    <div>
      <Navbar />
      {/* <CareerNavbar isWork={true} /> */}
      <div className="flex ">
        <CareerSidebar />
        <div className="w-screen">
          <form className="grow bg-gray-50 h-screen px-60 py-5">
            <div className="flex items-center justify-between pb-5">
              <Link to="/career-guide/myjobs">
                <ArrowCircleLeftIcon className="h-10 w-10 text-gray-700 hover:text-gray-500 cursor-pointer" />
              </Link>

              <div
                onClick={handleSubmit}
                className="bg-primary px-5 py-2 rounded-lg text-white font-semibold w-min cursor-pointer hover:bg-teal-700"
              >
                Create&nbsp;new&nbsp;job
              </div>
            </div>

            <div className="space-y-2 text-left items-start align-">
              <div className="px-2 text-base font-semibold text-gray-600">
                Job Title
              </div>
              <input
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Write Question title"
                className="bg-gray-200 px-5 py-3 w-full rounded-full focus:outline-none"
              />
            </div>
            <div>
              <div className="px-2 text-base py-3 font-semibold text-gray-600">
                Job Description
              </div>
              <div>
                <div>
                  <Editor
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
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 py-3">
                  {/* required experience */}
                  <div className="space-y-2 text-left items-start align-">
                    <div className="px-2 text-base font-semibold text-gray-600">
                      Experience
                    </div>
                    <input
                      onChange={(e) => setExperience(e.target.value)}
                      placeholder="Required experience"
                      className="bg-gray-200 px-5 py-3 w-full rounded-full focus:outline-none"
                    />
                  </div>

                  {/* required salary */}
                  <div className="space-y-2 text-left items-start align-">
                    <div className="px-2 text-base font-semibold text-gray-600">
                      Salary
                    </div>
                    <input
                      onChange={(e) => setSalary(e.target.value)}
                      placeholder="Salary"
                      className="bg-gray-200 px-5 py-3 w-full rounded-full focus:outline-none"
                    />
                  </div>

                  {/* required salary */}
                  <div className="space-y-2 text-left items-start align-">
                    <div className="px-2 text-base font-semibold text-gray-600">
                      Requirements
                    </div>
                    <input
                      onChange={(e) => setRequirements(e.target.value)}
                      placeholder="Add your requirement"
                      className="bg-gray-200 px-5 py-3 w-full rounded-full focus:outline-none"
                    />
                  </div>

                  {/* required job type */}
                  <div className="space-y-2 text-left items-start align-">
                    <div className="px-2 text-base font-semibold text-gray-600">
                      Job Type
                    </div>
                    <input
                      onChange={(e) => setJobType(e.target.value)}
                      placeholder="Job type"
                      className="bg-gray-200 px-5 py-3 w-full rounded-full focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(JobPost);
