import React, { useCallback, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { generalImagineCreateAction } from "../../../store/apps/imagines/imagine-action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import data from "../../../components/Category.json";

const GeneralUpdate = () => {
  const imagineData = useSelector((state) => state.imagine.singleImagine);
  const { iTitle, iIntro, iGenre, iOutro } = imagineData;

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorsState) => {
    setEditorState(editorsState);

    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  let navigate = useNavigate();
  //   const [title, setTitle] = useState(iTitle);
  //   const [intro, setIntro] = useState(iIntro);
  //   const [isChecked, setIsChecked] = useState(iGenre);
  //   const [outro, setOutro] = useState(iOutro);
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [isChecked, setIsChecked] = useState("");
  const [outro, setOutro] = useState("");

  const dispatch = useDispatch();
  const formdata = new FormData();

  formdata.append("title", title);
  formdata.append("intro", intro);
  formdata.append("outro", outro);
  formdata.append("genre", isChecked);
  formdata.append(
    "main",
    draftToHtml(convertToRaw(editorState.getCurrentContent()))
  );

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

  const handleSingleCheck = useCallback((e) => {
    setIsChecked({ [e.target.name]: e.target.checked });
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(generalImagineCreateAction(formdata));
      toast.success("Updated successfully");
      navigate("/");
    },

    [dispatch, formdata, navigate]
  );
  return (
    <div className="flex justify-center items-center flex-col font-Mulish">
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
                <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
                  {title.length}/80
                </p>
              </span>
            </div>
            <div className="flex items-start justify-start w-full flex-wrap lg:flex-nowrap pt-2 lg:pt-0 space-y-4 lg:space-y-0 lg:space-x-5">
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
                <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right ">
                  {intro.length}/{limit}
                </p>
              </span>
            </div>
            <div>
              <Editor
                editorState={editorState}
                toolbarClassName="flex justify-center mx-auto w-full"
                editorClassName="mt-6 bg-white shadow py-6 px-3"
                onEditorStateChange={onEditorStateChange}
              />
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
                <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
                  {outro.length}/{limit}
                </p>
              </span>
            </div>
            <div
              className="flex items-center flex-col justify-center w-full flex-wrap lg:flex-nowrap pt-10 
          space-y-4 lg:space-y-0 lg:space-x-5"
            >
              <label className="text-base uppercase font-bold mb-10">
                Select imagine genre
              </label>
              <div className="flex flex-wrap items-start justify-center gap-x-3 lg:gap-x-6 px-3">
                {data.map((d) => {
                  return (
                    <div className="mb-7" key={d.id}>
                      <input
                        className="border-gray-600 w-5 h-5 border cursor-pointer"
                        type="radio"
                        name={d.name}
                        checked={isChecked[`${d.name}`]}
                        onChange={handleSingleCheck}
                      />
                      <label className="ml-1 text-lg text-gray-600">
                        {d.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end items-center pt-2 mb-4 ">
              <div className="flex items-center space-x-2 ">
                {!title || !intro ? (
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

export default React.memo(GeneralUpdate);
