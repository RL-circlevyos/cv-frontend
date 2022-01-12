import { UploadIcon } from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

const CreateSeries = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState();
  const [audio, setAudio] = useState();

  const dispatch = useDispatch();
  const formdata = new FormData();

  formdata.append("title", title);
  formdata.append("content", coverImage);

  formdata.append(
    "content",
    draftToHtml(convertToRaw(editorState.getCurrentContent()))
  );
  formdata.append("audio", audio);

  const coverImageChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverImage(e.target.files[0]);
    }
  }, []);
  const removecoverImage = useCallback(() => {
    setCoverImage();
  }, []);

  const setTitleContent = useCallback(
    (text) => {
      setTitle(text.slice(0, 80));
    },
    [setTitle]
  );

  const audioChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAudio(e.target.files[0]);
    }
  }, []);
  const removeAudio = useCallback(() => {
    setAudio();
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formdata);
      // dispatch(generalImagineCreateAction(formdata));

      navigate("/series/storyname/:id");
    },

    [formdata, navigate]
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
                    placeholder="Part name"
                    className="font-medium w-full px-2 py-2 focus:outline-none form-control "
                    value={title}
                    onChange={(e) => setTitleContent(e.target.value)}
                  />
                </span>
                <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
                  {title.length}/100
                </p>
              </span>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 mt-5">
              <div className="w-full px-5">
                <label
                  className={`${
                    !coverImage &&
                    "border border-gray-200 shadow rounded-lg px-3 py-2 flex w-full justify-center h-56 mt-6 items-center cursor-pointer"
                  } w-full`}
                >
                  {!coverImage && (
                    <>
                      <span className="text-sm font-bold lg:text-base uppercase">
                        cover image
                      </span>
                      <UploadIcon className="w-7 h-7 ml-2" />
                    </>
                  )}
                  <input
                    accept="image/*"
                    required
                    type="file"
                    onChange={coverImageChange}
                    className="invisible hidden"
                  />
                </label>

                {coverImage && (
                  <div className="w-full h-56 pb-3 mt-8">
                    <img
                      src={URL.createObjectURL(coverImage)}
                      alt="Thumb"
                      className="w-full h-full object-contain border border-gray-100 shadow"
                    />
                    <button
                      className="text-xs font-bold bg-gray-200 px-2 py-1 rounded-md mt-1"
                      onClick={removecoverImage}
                    >
                      Remove This Image
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="pt-5">
              <Editor
                editorState={editorState}
                toolbarClassName="flex justify-center mx-auto w-full"
                editorClassName="mt-6 bg-white shadow py-6 px-3"
                onEditorStateChange={onEditorStateChange}
              />
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
                      audio
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
                <button
                  type="submit"
                  className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm lg:text-base transition duration-200 bg-primary text-gray-50 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CreateSeries);
