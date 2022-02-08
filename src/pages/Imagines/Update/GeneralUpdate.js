import React, { useCallback, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { generalImagineUpdateAction } from "../../../store/apps/imagines/imagine-action";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import draftToHtml from "draftjs-to-html";

const GeneralUpdate = () => {
  const dispatch = useDispatch();
  const imagineid = useParams();

  const imagine = useSelector((state) => state.imagine);
  const { title, intro, outro, main } = imagine?.singleImagine?.singleImagine;
  console.log(imagine?.singleImagine?.singleImagine);

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(main))
    )
  );

  const onEditorStateChange = (editorsState) => {
    setEditorState(editorsState);

    console.log(
      draftToHtml(convertToRaw(editorState.getCurrentContent())).length
    );
  };
  const count = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    .length;
  const MAX_LENGTH = 3000;

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

  let navigate = useNavigate();

  const [titleUpdate, setTitleUpdate] = useState(title);
  const [introUpdate, setIntroUpdate] = useState(intro);
  const [outroUpdate, setOutroUpdate] = useState(outro);

  const formdata = new FormData();

  formdata.append("title", titleUpdate);
  /** formdata.append("intro", introUpdate);
  formdata.append("outro", outroUpdate);*/

  formdata.append(
    "main",
    draftToHtml(convertToRaw(editorState.getCurrentContent()))
  );

  const limit = 300;
  const setTitleContent = useCallback(
    (text) => {
      setTitleUpdate(text.slice(0, 80));
    },
    [setTitleUpdate]
  );
  const setIntroContent = useCallback(
    (text) => {
      setIntroUpdate(text.slice(0, limit));
    },
    [setIntroUpdate]
  );

  const setOutroContent = useCallback(
    (text) => {
      setOutroUpdate(text.slice(0, limit));
    },
    [setOutroUpdate]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(generalImagineUpdateAction(formdata, imagineid.id));
      toast.success("Updated successfully");
      navigate(`/${imagineid.id}`);
    },

    [dispatch, formdata, navigate, imagineid]
  );
  return (
    <div className="flex justify-center items-center flex-col font-Mulish">
      <div className="max-w-4xl w-full flex justify-center items-center flex-col mx-3 lg:mx-0">
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="px-3 lg:px-6 py-2 space-y-1 text-base font-Mulish pb-6 "
          >
            <div className="px-4 py-2 text-xl text-primary flex font-bold pb-6 justify-center">
              Edit your imagine
            </div>
            <div>
              {" "}
              <span className="w-full ">
                <label className="ml-4 text-xs uppercase font-bold text-pink-500 flex items-center">
                  title <p className="ml-3 text-xxs lowercase">required*</p>
                </label>
                <span className=" w-full text-sm flex items-center border rounded-xl lg:px-4 py-2 hover:border-primary border-gray-300 bg-white ">
                  <input
                    type="text"
                    required
                    placeholder="Title of Imagine"
                    className="font-medium w-full lg:px-4 px-1 ml-2 py-2 focus:outline-none form-control "
                    value={titleUpdate}
                    onChange={(e) => setTitleContent(e.target.value)}
                  />
                </span>
                <p className="mr-4 text-sm uppercase font-bold text-blue-700 float-right">
                  {" "}
                  {/* {titleUpdate.length}/80 */}
                </p>
              </span>
            </div>
            <div className="flex items-start justify-start w-full flex-wrap lg:flex-nowrap pt-2 lg:pt-0 space-y-4 lg:space-y-0 lg:space-x-5">
              {/* <span className="w-full">
                <label className="ml-4 text-xs uppercase font-bold">
                  intro
                </label>
                <span className="w-full flex items-center border rounded-xl px-2 py-1 hover:border-primary border-gray-300 bg-white ">
                  <textarea
                    rows="4"
                    type="text"
                    placeholder="intro of Imagine"
                    className="font-medium w-full lg:px-4 ml-2 py-1 lg:text-base text-sm focus:outline-none "
                    value={introUpdate}
                    onChange={(e) => setIntroContent(e.target.value)}
                  />
                </span>
                <p className="mr-4 text-sm uppercase font-bold text-blue-700 float-right ">
                  {" "}
                  {/* {introUpdate.length}/{limit} /}
                </p>
              </span> */}
            </div>
            <div>
              <label className="ml-4 text-xs uppercase font-bold">
                Content
              </label>
              <Editor
                editorState={editorState}
                toolbarClassName="flex justify-center mx-auto w-full"
                editorClassName="mt-6 bg-white shadow py-6 px-3"
                onEditorStateChange={onEditorStateChange}
                handleBeforeInput={handleBeforeInput}
                handlePastedText={handlePastedText}
                toolbar={{
                  options: [
                    "inline",
                    // "blockType",
                    "emoji",
                    "colorPicker",
                    //"list",
                    "link",
                    //"textAlign",
                    //"history",
                  ],
                }}
              />
              <p className="mr-4 text-sm uppercase font-bold text-teal-700 float-right">
                {count - 8}
              </p>
            </div>
            {/* <div className="flex items-start justify-center flex-wrap lg:flex-nowrap w-full pb-2 lg:space-x-4">
              <span className="w-full ">
                <label className="ml-4 text-xs uppercase font-bold">
                  outro
                </label>
                <span className="w-full flex items-center border rounded-xl px-2 py-2 hover:border-primary border-gray-300 bg-white ">
                  <textarea
                    rows="3"
                    type="text"
                    placeholder="outro of Imagine"
                    className="font-medium w-full lg:px-4 px-1 ml-2 lg:py-2 lg:text-base text-sm focus:outline-none "
                    value={outroUpdate}
                    onChange={(e) => setOutroContent(e.target.value)}
                  />
                </span>
                <p className="mr-4 text-sm uppercase font-bold text-blue-700 float-right">
                  {" "}
                  {/* {outroUpdate.length}/{limit} /}
                </p>
              </span>
            </div> */}

            <div className="flex justify-end items-center pt-8 mb-4 ">
              <div className="flex items-center space-x-2 ">
                <Link
                  to="/"
                  className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm lg:text-base transition duration-200 bg-gray-200 text-gray-700 "
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm lg:text-base transition duration-200 bg-primary text-gray-50 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(GeneralUpdate);
