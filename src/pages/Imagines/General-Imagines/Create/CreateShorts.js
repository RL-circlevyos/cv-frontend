import { UploadIcon } from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import Header from "./Header";

import { useDispatch } from "react-redux";
import {
  generalImagineCreateAction,
  imaginePostAction,
} from "../../../../store/apps/imagines/imagine-action";
import { useNavigate } from "react-router-dom";
import colorSet from "./Color.json";

const CreateShorts = () => {
  let navigate = useNavigate();
  // const [title, setTitle] = useState("");
  const [introImage, setIntroImage] = useState();
  const [content, setContent] = useState("");
  const [outroImage, setOutroImage] = useState();
  const [audio, setAudio] = useState();
  const [color, setColor] = useState();
  const [colorText, setColorText] = useState();
  const [show, setShow] = useState(true);

  const dispatch = useDispatch();
  const formdata = new FormData();

  //formdata.append("title", title);
  formdata.append("content", content);
  formdata.append("introImage", introImage);
  formdata.append("outroImage", outroImage);
  formdata.append("audiovoice", audio);
  formdata.append("background", color);
  formdata.append("textcolor", colorText);

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
  const limit = 600;
  //   const setTitleContent = useCallback(
  //     (text) => {
  //       setTitle(text.slice(0, 80));
  //     },
  //     [setTitle]
  //   );
  //const [wordCount, setWordCount] = useState(0);
  //   const setBodyContent = useCallback(
  //     (text) => {
  //       let words = text.split(" ").filter(Boolean);
  //       console.log(words);
  //       if (words.length > limit) {
  //         setWordCount(words.slice(0, limit));
  //       } else {
  //         setContent(text);
  //         setWordCount(words.length);
  //       }
  //     },
  //     [limit, setContent]
  //   );*/
  const setBodyContent = useCallback(
    (text) => {
      setContent(text.slice(0, limit));
    },
    [setContent]
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

      //dispatch(generalImagineCreateAction(formdata));

      //navigate("/");
    },

    [dispatch, formdata, navigate]
  );

  return (
    <div className="flex justify-center items-center flex-col font-Mulish">
      <form
        className="flex justify-center items-center flex-col w-full"
        onSubmit={handleSubmit}
      >
        <div className="w-full pb-5">
          <Header title={content} name="short blocks" />
        </div>
        <div className="max-w-4xl w-full flex justify-center items-center flex-col pt-10 mx-3 lg:mx-0">
          <div className="w-full">
            <div className="px-3 lg:px-6 py-2 space-y-1 text-base font-Mulish pb-6 w-full">
              {/* <div className="w-full">
                {" "}
                <span className="w-full ">
                  <span className=" w-full text-sm flex items-center border rounded-xl lg:px-4 py-2 hover:border-primary border-gray-300 bg-white ">
                    <input
                      type="text"
                      placeholder="title"
                      className="font-medium w-full lg:px-4 lg:text-base px-1 ml-2 py-2 focus:outline-none form-control "
                      value={title}
                      onChange={(e) => setTitleContent(e.target.value)}
                    />
                  </span>
                  <p className="mr-4 text-sm uppercase font-bold text-blue-700 float-right">
                    {title.length}/80
                  </p>
                </span>
              </div> */}
              <div className="flex flex-wrap w-full items-center">
                {colorSet.map((colors) => (
                  <>
                    <button
                      className="border border-gray-300 ml-2 mt-2"
                      style={{
                        background: `${colors.colorName}`,
                        padding: "1rem",
                      }}
                      onClick={() => {
                        setColor(colors.colorName);
                        setColorText(colors.text);
                        setShow(false);
                      }}
                    ></button>
                  </>
                ))}{" "}
                <button
                  className="bg-white text-primary border border-gray-300 font-bold px-3 py-1 rounded-md ml-2 mt-2"
                  onClick={() => {
                    setShow(true);
                    setColor("white");
                    setColorText("black");
                  }}
                >
                  No color
                </button>
              </div>
              <div className="flex items-start justify-center w-full flex-wrap px-3 lg:flex-nowrap pt-2 space-y-4 lg:space-y-0 lg:space-x-5 pb-7">
                <span className="w-full">
                  <label className="ml-4 text-xs uppercase font-bold">
                    Content
                  </label>
                  <span
                    className="w-full flex items-center text-gray-900 border rounded-xl hover:border-primary 
                  border-gray-300 "
                  >
                    <textarea
                      style={{
                        background: `${color}`,
                        padding: "1rem",
                        color: `${colorText}`,
                      }}
                      rows="7"
                      type="text"
                      placeholder="type your content here"
                      className={`${color}${colorText} font-medium w-full px-4 py-1 lg:text-base text-sm focus:outline-none rounded-xl`}
                      value={content}
                      onChange={(e) => setBodyContent(e.target.value)}
                    />
                  </span>
                  <p className="mr-4 text-sm uppercase font-bold text-blue-700 float-right ">
                    {content.length}/{limit}
                  </p>
                </span>
              </div>

              {show && (
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
              )}
              <div
                className="flex items-center flex-col justify-center w-full flex-wrap lg:flex-nowrap pt-10 
          space-y-4 lg:space-y-0 lg:space-x-5"
              >
                {/* <div className="flex flex-wrap items-start justify-center gap-x-3 lg:gap-x-6 px-3">
                  <RadioBtn value={value} handleChange={handleChange} />
                </div> */}
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

export default React.memo(CreateShorts);
