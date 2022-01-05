import { UploadIcon } from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Header from "./Header";
// import { createImagineAction } from "../../../../store/apps/imagines/imagine-action";
import { useDispatch } from "react-redux";
import { generalImagineCreateAction } from "../../../../store/apps/imagines/imagine-action";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateImagines = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [introImage, setIntroImage] = useState();
  const [intro, setIntro] = useState("");
  const [body, setBody] = useState("");
  const [outro, setOutro] = useState("");
  const [outroImage, setOutroImage] = useState();
  const [audio, setAudio] = useState();
  const [draft, setDraft] = useState(false);
  const dispatch = useDispatch();
  const formdata = new FormData();

  function saveAsDraft() {
    setDraft(true);
  }

  formdata.append("title", title);
  formdata.append("intro", intro);
  formdata.append("outro", outro);
  formdata.append("introImage", introImage);
  formdata.append("outroImage", outroImage);
  formdata.append("content", body);
  formdata.append("audio", audio);

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
  const setBodyContent = useCallback(
    (text) => {
      setBody(text.slice(0, 900));
    },
    [setBody]
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

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(generalImagineCreateAction(formdata));
      toast.success("posted successfully");
      navigate("/general-imagines/myimagines");
    },

    [dispatch, formdata, navigate]
  );
  return (
    <div className="flex justify-center items-center flex-col font-Mulish">
      <div className="w-full max-w-7xl">
        <Header />
      </div>
      <div className=" max-w-4xl w-full flex justify-center items-center flex-col mx-3 lg:mx-0">
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
            <div className="flex items-center justify-center w-full flex-wrap lg:flex-nowrap pt-2 lg:pt-0 space-y-4 lg:space-y-0 lg:space-x-5">
              <div className="grid place-items-center">
                <label
                  className={`${
                    !introImage &&
                    "border border-gray-300 rounded-md px-3 py-2 flex items-center cursor-pointer"
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
                  <div className="w-36 h-28 pb-3">
                    <img
                      src={URL.createObjectURL(introImage)}
                      alt="Thumb"
                      className="w-full h-full object-cover border border-gray-400"
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
                    rows="3"
                    type="text"
                    placeholder="intro of Imagine"
                    className="font-medium w-full lg:px-4 ml-2 py-1 lg:text-base text-sm focus:outline-none "
                    value={intro}
                    onChange={(e) => setIntroContent(e.target.value)}
                  />
                </span>
                <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
                  {intro.length}/{limit}
                </p>
              </span>
            </div>
            <div>
              {" "}
              <span className="w-full ">
                <label className="ml-4 text-xs uppercase font-bold">body</label>
                <span className="w-full flex items-center border rounded-xl px-2 py-1 hover:border-primary border-gray-300 bg-white ">
                  <textarea
                    required
                    rows="4"
                    type="text"
                    placeholder="body of Imagine"
                    className="font-medium w-full px-1 ml-2 py-1 focus:outline-none lg:text-base text-sm  form-control"
                    value={body}
                    onChange={(e) => setBodyContent(e.target.value)}
                  />
                </span>
                <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
                  {body.length}/900
                </p>
              </span>
            </div>
            <div className="flex items-center justify-center flex-wrap lg:flex-nowrap w-full pb-2 lg:space-x-4">
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
              <div>
                <label
                  className={`${
                    !outroImage &&
                    "border border-gray-300 rounded-md px-3 py-2 flex items-center"
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
                  <div className="w-36 h-28 pb-3">
                    <img
                      src={URL.createObjectURL(outroImage)}
                      alt="Thumb"
                      className="w-full h-full object-cover border border-gray-400"
                    />
                    <button className="text-xs" onClick={removeOutroImage}>
                      Remove This Image
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full max-2xl">
              <label
                className={`${
                  !audio &&
                  "border border-gray-200 shadow rounded-lg px-3 py-2 flex w-full justify-center h-30 mt-6 items-center cursor-pointer"
                } w-full`}
              >
                {!audio && (
                  <>
                    <span className="text-sm font-bold lg:text-base uppercase">
                      Imagine audio
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
            <div className="flex justify-between items-center pt-2 mb-4 ">
              <div></div>
              <div className="flex items-center space-x-2 ">
                <Link
                  to="/imagine-details"
                  className="py-1.5 lg:py-2 lg:px-3 font-bold px-2 rounded-sm text-sm lg:text-base transition duration-200 bg-gray-200 text-primary focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                >
                  Next
                </Link>
                <button
                  type="submit"
                  className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm lg:text-base transition duration-200 bg-primary text-gray-50 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                >
                  Publish
                </button>
              </div>
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CreateImagines);
