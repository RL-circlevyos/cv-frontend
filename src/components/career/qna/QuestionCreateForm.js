import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "draft-js/dist/Draft.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createPrivateQuestionAction,
  questionCreateAction,
} from "../../../store/apps/qna/qna-action";

function QuestionCreateForm({ isPrivate, isPublic }) {
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
  const { allMentors } = useSelector((state) => state.user);

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
  const [mentorId, setMentorId] = useState();

  let navigate = useNavigate();

  formdata.append("title", title);
  formdata.append("selectedMentor", mentorId);
  formdata.append(
    "body",
    draftToHtml(convertToRaw(editorState.getCurrentContent()))
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(questionCreateAction(formdata, token));

    navigate("/career-guide/qna");
  };

  const handleSubmitPrivate = (e) => {
    e.preventDefault();

    dispatch(createPrivateQuestionAction(formdata, token));
  };

  return (
    <form className="grow bg-gray-50 h-screen px-60 py-5">
      <div className="flex items-center justify-between pb-5">
        <Link to="/career-guide/qna">
          <ArrowCircleLeftIcon className="h-10 w-10 text-gray-700 hover:text-gray-500 cursor-pointer" />
        </Link>
        {isPublic && (
          <div
            onClick={handleSubmit}
            className="bg-primary px-5 py-2 rounded-lg text-white font-semibold w-min cursor-pointer hover:bg-teal-700"
          >
            Post
          </div>
        )}
        {isPrivate && (
          <div
            onClick={handleSubmitPrivate}
            className="bg-primary px-5 py-2 rounded-lg text-white font-semibold w-min cursor-pointer hover:bg-teal-700"
          >
            Pay&nbsp;&&nbsp;Post
          </div>
        )}
      </div>

      <div className="space-y-2 text-left items-start align-">
        <div className="px-2 text-base font-semibold text-gray-600">Title</div>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write Question title"
          className="bg-gray-200 px-5 py-3 w-full rounded-full focus:outline-none"
        />
      </div>
      <div>
        <div className="px-2 text-base py-3 font-semibold text-gray-600">
          Body
        </div>
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
        <select
          name="current_status"
          id="current_status"
          className="w-80 bg-gray-100 px-2 py-2 my-4 shadow-md rounded-full "
          onChange={(e) => {
            setMentorId(e.target.value);
          }}
        >
          <option value="select">selete mentors</option>
          {allMentors?.mentors?.map((mentor) => (
            <>
              <option value={mentor?._id}>{mentor?.name}</option>
            </>
          ))}
        </select>
      </div>
    </form>
  );
}

export default React.memo(QuestionCreateForm);
