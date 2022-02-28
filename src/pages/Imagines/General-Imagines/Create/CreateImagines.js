import { UploadIcon } from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import Header from "./Header";

import { useDispatch } from "react-redux";
import {
  generalImagineCreateAction,
  imaginePostAction,
} from "../../../../store/apps/imagines/imagine-action";
import { useNavigate } from "react-router-dom";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import data from "./Categories.json";
import Navbar from "../../../../components/Navbar";
import { useSelector } from "react-redux";

const CreateImagines = () => {
  const auth = useSelector((state) => state.auth);
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

  const [category, setCategory] = React.useState("");

  const handleChangeSelect = (event) => {
    setCategory(event.target.value);
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
  /**formdata.append("intro", intro);
  formdata.append("outro", outro);*/
  formdata.append("introImage", introImage);
  formdata.append("outroImage", outroImage);
  formdata.append("category", category);
  formdata.append(
    "main",
    draftToHtml(convertToRaw(editorState.getCurrentContent()))
  );
  formdata.append("audiovoice", audio);
  formdata.append("imaginetype", "mega");

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
      dispatch(generalImagineCreateAction(formdata, auth.token));

      navigate("/");
    },

    [dispatch, formdata, navigate, auth.token]
  );
  return (
    <div className="flex justify-center items-center flex-col font-Mulish">
      <form
        className="flex justify-center items-center flex-col w-full"
        onSubmit={handleSubmit}
      >
        <div className="w-full pb-5">
          <Header name="Mega" title={title} />
        </div>
        <div className="max-w-4xl w-full flex justify-center items-center flex-col  mx-3 lg:mx-0">
          <div className="w-full">
            <div className="px-3 lg:px-6 py-2 space-y-1 text-base font-Mulish pb-6 pt-14 w-full">
              <div className="w-full">
                {" "}
                <span className="w-full ">
                  <label className="ml-4 text-xs uppercase font-bold text-pink-500 flex items-center">
                    title <p className="text-xss lowercase ml-3">*required</p>
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
                  <p className="mr-4 text-sm uppercase font-bold text-blue-700 float-right">
                    {title.length}/80
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
                {/* <p className="mr-4 text-sm uppercase font-bold text-blue-700 float-right">
                  {count - 8}
                </p> */}
              </div>
              <div className="flex items-start justify-center flex-wrap lg:flex-nowrap w-full pb-2 space-x-2 lg:space-x-4">
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
                {/* <div className="flex flex-wrap items-start justify-center gap-x-3 lg:gap-x-6 px-3">
                  <RadioBtn value={value} handleChange={handleChange} />
                </div> */}
                <label className="ml-4 text-xs uppercase font-bold">
                  Imagine Category
                </label>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChangeSelect}
                  >
                    {data.map((categories) => {
                      return (
                        <MenuItem key={categories.id} value={categories.name}>
                          {categories.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
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
                        audio or voice
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
              <div className="flex justify-end items-center pt-2 mb-4 "></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(CreateImagines);
