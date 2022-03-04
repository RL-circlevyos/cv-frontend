import React, { useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  appriciateIdListAction,
  appriciateListAction,
  commentFetchAction,
  generalImagineSingleFetchAction,
  generalImagineUpdateAction,
} from "../../../store/apps/imagines/imagine-action";
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
import { imagineSliceAction } from "../../../store/apps/imagines/imagine-slice";
import { UploadIcon } from "@heroicons/react/solid";
import { LinearProgress } from "@mui/material";

const GeneralUpdate = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const auth = useSelector((state) => state.auth);
  const imagine = useSelector((state) => state.imagine);
  const ui = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(generalImagineSingleFetchAction(id.id, auth.token));
  }, [dispatch, id.id, auth.token]);

  console.log(imagine.singleImagine);
  const { title, intro, outro, main, imaginetype } =
    imagine?.singleImagine?.singleImagine;
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
  const count = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  ).length;
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

  // image
  const [introImage, setIntroImage] = useState(
    imagine?.singleImagine?.singleImagine.introImage
  );
  const [outroImage, setOutroImage] = useState(
    imagine?.singleImagine?.singleImagine.outroImage
  );

  const [isintroImageUpdate, setisintroImageUpdate] = useState(false);
  const [isOutroImageUpdate, setisOutroImageUpdate] = useState(false);

  const introImageChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setIntroImage(e.target.files[0]);
      setisintroImageUpdate(true);
    }
  }, []);

  const removeIntroImage = useCallback(() => {
    setIntroImage();
  }, []);

  // for outro image
  const outroImageChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setOutroImage(e.target.files[0]);
      setisOutroImageUpdate(true);
    }
  }, []);

  const removeOutroImage = useCallback(() => {
    setOutroImage();
  }, []);

  let navigate = useNavigate();

  const [titleUpdate, setTitleUpdate] = useState(title);
  const [introUpdate, setIntroUpdate] = useState(intro);
  const [outroUpdate, setOutroUpdate] = useState(outro);
  const [content, setContent] = useState(main);
  const setBodyContent = useCallback(
    (text) => {
      setContent(text.slice(0, limit));
    },
    [setContent]
  );
  const formdata = new FormData();
  const formdataNano = new FormData();

  formdata.append("title", titleUpdate);
  /** formdata.append("intro", introUpdate);
  formdata.append("outro", outroUpdate);*/

  formdata.append(
    "main",
    draftToHtml(convertToRaw(editorState.getCurrentContent()))
  );

  isintroImageUpdate && formdata.append("introImage", introImage);

  isOutroImageUpdate && formdata.append("outroImage", outroImage);

  formdataNano.append("main", content);

  isintroImageUpdate && formdataNano.append("introImage", introImage);

  isOutroImageUpdate && formdataNano.append("outroImage", outroImage);

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

      dispatch(generalImagineUpdateAction(formdata, id.id, auth.token));
      toast.success("Updated successfully");
      !ui.isLoading && navigate(`/${id.id}`);
    },

    [dispatch, formdata, navigate, id, auth.token, ui.isLoading]
  );

  const handleSubmitNano = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(generalImagineUpdateAction(formdataNano, id.id, auth.token));
      toast.success("Updated successfully");
      navigate(`/${id.id}`);
    },

    [dispatch, formdataNano, navigate, id, auth.token]
  );
  return (
    <div className="flex justify-center items-center flex-col font-Mulish">
      <div className="max-w-4xl w-full flex justify-center items-center flex-col mx-3 lg:mx-0">
        {ui.isLoading && (
          <span className="text-lg text-primary block mt-4 mb-4 w-full">
            {" "}
            <LinearProgress color="success" />
            <span className="text-base leading-relaxed italic font-semibold flex justify-center items-center">
              Updading...
            </span>
          </span>
        )}
        <div className="w-full">
          <form
            onSubmit={imaginetype === "nano" ? handleSubmitNano : handleSubmit}
            className="px-3 lg:px-6 py-2 space-y-1 text-base font-Mulish pb-6 "
          >
            <div className="px-4 py-2 text-xl text-primary flex font-bold pb-6 justify-center">
              Edit your imagine
            </div>
            <div>
              {" "}
              {imaginetype === "mega" && (
                <span className="w-full ">
                  <label className="ml-4 text-xs uppercase font-bold text-pink-500 flex items-center">
                    title <p className="ml-3 text-xxs lowercase">required*</p>
                  </label>
                  <span className=" w-full text-sm flex items-center border rounded-xl lg:px-4 py-2 hover:border-primary border-gray-300 bg-white ">
                    <input
                      type="text"
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
              )}
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
              {imaginetype === "mega" && (
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
              )}
              {imaginetype === "mega" && (
                <p className="mr-4 text-sm uppercase font-bold text-teal-700 float-right">
                  {count - 8}
                </p>
              )}
              {imaginetype === "nano" && (
                <span
                  className="w-full flex items-center text-gray-900 border rounded-xl hover:border-primary 
               border-gray-300 "
                >
                  <textarea
                    style={{
                      padding: "1rem",

                      fontSize: "1.5rem",
                    }}
                    rows="7"
                    type="text"
                    placeholder="type your content here"
                    className={` font-medium w-full px-4 py-1 lg:text-base text-sm focus:outline-none rounded-xl`}
                    value={content}
                    onChange={(e) => setBodyContent(e.target.value)}
                  />
                </span>
              )}
            </div>

            <div className="flex items-start justify-center flex-wrap lg:flex-nowrap w-full pb-2 space-x-2 lg:space-x-4">
              {imagine?.singleImagine?.singleImagine.introImage && (
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
                          first image
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
                    <div className="w-full h-56 pb-4">
                      <img
                        // src={URL.createObjectURL(introImage)}
                        src={
                          introImage.secure_url
                            ? introImage.secure_url
                            : URL.createObjectURL(introImage)
                        }
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
              )}

              {/* for outro image */}
              {imagine?.singleImagine?.singleImagine.outroImage && (
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
                          last image
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
                    <div className="w-full h-56 pb-4 mt-6">
                      <img
                        src={
                          outroImage.secure_url
                            ? outroImage.secure_url
                            : URL.createObjectURL(outroImage)
                        }
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
              )}
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
