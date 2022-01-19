import { UploadIcon } from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import Header from "./Header";

import { useDispatch } from "react-redux";
import { generalImagineCreateAction } from "../../../../store/apps/imagines/imagine-action";
import { useNavigate } from "react-router-dom";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import RadioBtn from "./Radio";

const CreateImagines = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
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
  const [title, setTitle] = useState("");
  const [introImage, setIntroImage] = useState();
  const [intro, setIntro] = useState("");
  const [value, setValue] = useState([]);
  const [outro, setOutro] = useState("");
  const [outroImage, setOutroImage] = useState();
  const [audio, setAudio] = useState();

  const dispatch = useDispatch();
  const formdata = new FormData();

  formdata.append("title", title);
  formdata.append("intro", intro);
  formdata.append("outro", outro);
  formdata.append("introImage", introImage);
  formdata.append("outroImage", outroImage);
  formdata.append("category", value);
  formdata.append(
    "main",
    draftToHtml(convertToRaw(editorState.getCurrentContent()))
  );
  formdata.append("audiovoice", audio);
  console.log(value);

  const introImageChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setIntroImage(e.target.files[0]);
    }
  }, []);
  const removeIntroImage = useCallback(() => {
    setIntroImage();
  }, []);

  const outroImageChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setOutroImage(e.target.files[0]);
    }
  }, []);
  const removeOutroImage = useCallback(() => {
    setOutroImage();
  }, []);
  const limit = 300;
  const setTitleContent = useCallback(
    (text) => {
      setTitle(text.slice(0, 80));
    },
    [setTitle]
  );
  const setIntroContent = useCallback(
    (text) => {
      setIntro(text.slice(0, limit));
    },
    [setIntro]
  );

  const setOutroContent = useCallback(
    (text) => {
      setOutro(text.slice(0, limit));
    },
    [setOutro]
  );

  const audioChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAudio(e.target.files[0]);
    }
  }, []);
  const removeAudio = useCallback(() => {
    setAudio();
  }, []);

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(generalImagineCreateAction(formdata));

      navigate("/");
    },

    [dispatch, formdata, navigate]
  );
  return (
    <div className="flex justify-center items-center flex-col font-Mulish">
      <div className="w-full max-w-7xl">
        <Header />
      </div>
      <div className="max-w-4xl w-full flex justify-center items-center flex-col mx-3 lg:mx-0">
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="px-3 lg:px-6 py-2 space-y-1 text-base font-Mulish pb-6 "
          >
            <div>
              {" "}
              <span className="w-full ">
                <label className="ml-4 text-xs uppercase font-bold">
                  title
                </label>
                <span className=" w-full text-sm flex items-center border rounded-xl lg:px-4 py-2 hover:border-primary border-gray-300 bg-white ">
                  <input
                    type="text"
                    required
                    placeholder="Title of Imagine"
                    className="font-medium w-full lg:px-4 px-1 ml-2 py-2 focus:outline-none form-control "
                    value={title}
                    onChange={(e) => setTitleContent(e.target.value)}
                  />
                </span>
                <p className="mr-4 text-sm uppercase font-bold text-teal-700 float-right">
                  {title.length}/80
                </p>
              </span>
            </div>
            <div className="flex items-start justify-start w-full flex-wrap lg:flex-nowrap pt-2 lg:pt-0 space-y-4 lg:space-y-0 lg:space-x-5">
              <div className="grid place-items-center">
                <label
                  className={`${
                    !introImage &&
                    "border border-gray-300 rounded-md w-full mt-6 px-8 py-8 flex items-center cursor-pointer"
                  } p-2`}
                >
                  {!introImage && (
                    <>
                      <span className="text-xs font-bold lg:text-base">
                        intro image
                      </span>
                      <UploadIcon className="w-7 h-7" />
                    </>
                  )}
                  <input
                    accept="image/*"
                    type="file"
                    onChange={introImageChange}
                    className="invisible hidden"
                  />
                </label>

                {introImage && (
                  <div className="w-full h-56 pb-3">
                    <img
                      src={URL.createObjectURL(introImage)}
                      alt="Thumb"
                      className="w-full h-full object-contain border border-gray-400"
                    />
                    <button
                      className="text-xs font-bold"
                      onClick={removeIntroImage}
                    >
                      Remove This Image
                    </button>
                  </div>
                )}
              </div>

              <span className="w-full">
                <label className="ml-4 text-xs uppercase font-bold">
                  intro
                </label>
                <span className="w-full flex items-center border rounded-xl px-2 py-1 hover:border-primary border-gray-300 bg-white ">
                  <textarea
                    rows="4"
                    type="text"
                    placeholder="intro of Imagine"
                    className="font-medium w-full lg:px-4 ml-2 py-1 lg:text-base text-sm focus:outline-none "
                    value={intro}
                    onChange={(e) => setIntroContent(e.target.value)}
                  />
                </span>
                <p className="mr-4 text-sm uppercase font-bold text-teal-700 float-right ">
                  {intro.length}/{limit}
                </p>
              </span>
            </div>
            <div>
              <Editor
                editorState={editorState}
                placeholder="Type your main content"
                toolbarClassName="flex justify-center mx-auto w-full"
                editorClassName="mt-6 bg-white shadow py-5 px-3"
                onEditorStateChange={onEditorStateChange}
                handleBeforeInput={handleBeforeInput}
                handlePastedText={handlePastedText}
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "emoji",
                    "colorPicker",
                    "list",
                    "link",
                    "textAlign",
                    "history",
                  ],
                }}
              />
              <p className="mr-4 text-sm uppercase font-bold text-teal-700 float-right">
                {count - 8}
              </p>
            </div>
            <div className="flex items-start justify-center flex-wrap lg:flex-nowrap w-full pb-2 lg:space-x-4">
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
                    value={outro}
                    onChange={(e) => setOutroContent(e.target.value)}
                  />
                </span>
                <p className="mr-4 text-sm uppercase font-bold text-teal-700 float-right">
                  {outro.length}/{limit}
                </p>
              </span>
              <div>
                <label
                  className={`${
                    !outroImage &&
                    "border border-gray-300 rounded-md w-full mt-6 px-8 py-8 flex items-center cursor-pointer"
                  }p-2`}
                >
                  {!outroImage && (
                    <>
                      <span className="text-xs font-bold lg:text-base">
                        outro image
                      </span>
                      <UploadIcon className="w-7 h-7" />
                    </>
                  )}
                  <input
                    accept="image/*"
                    type="file"
                    onChange={outroImageChange}
                    className="invisible hidden"
                  />
                </label>

                {outroImage && (
                  <div className="w-full h-56 pb-3 mt-6">
                    <img
                      src={URL.createObjectURL(outroImage)}
                      alt="Thumb"
                      className="w-full h-full object-cover border border-gray-400"
                    />
                    <button
                      className="text-xs font-bold"
                      onClick={removeOutroImage}
                    >
                      Remove This Image
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div
              className="flex items-center flex-col justify-center w-full flex-wrap lg:flex-nowrap pt-10 
          space-y-4 lg:space-y-0 lg:space-x-5"
            >
              <div className="flex flex-wrap items-start justify-center gap-x-3 lg:gap-x-6 px-3">
                <RadioBtn value={value} handleChange={handleChange} />
              </div>
            </div>
            <div className="w-full max-2xl">
              <label
                className={`${
                  !audio &&
                  "border border-gray-200 shadow rounded-lg px-3 py-3 flex w-full justify-center h-30 mt-3 items-center cursor-pointer"
                } w-full`}
              >
                {!audio && (
                  <>
                    <span className="text-sm font-bold lg:text-base uppercase">
                      Imagine audio or voice
                    </span>
                    <UploadIcon className="w-7 h-7 ml-2" />
                  </>
                )}
                <input
                  accept="audio/*"
                  type="file"
                  onChange={audioChange}
                  className="invisible hidden"
                />
              </label>

              {audio && (
                <>
                  <div className="w-full h-30 pb-3 mt-8">
                    <audio
                      className="w-full"
                      controls
                      src={URL.createObjectURL(audio)}
                    />

                    <button
                      className="text-xs font-bold bg-gray-200 px-2 py-1 rounded-md mt-1"
                      onClick={removeAudio}
                    >
                      Remove This Audio
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="flex justify-end items-center pt-2 mb-4 ">
              <div className="flex items-center space-x-2 ">
                {!title || !value ? (
                  <button className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm lg:text-base transition duration-200 bg-gray-300 text-white ">
                    Publish
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm lg:text-base transition duration-200 bg-primary text-gray-50 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                  >
                    Publish
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CreateImagines);
