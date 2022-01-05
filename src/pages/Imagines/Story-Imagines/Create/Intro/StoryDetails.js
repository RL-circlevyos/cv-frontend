import { LocationMarkerIcon, UploadIcon, XIcon } from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const StoryDetails = () => {
  let navigate = useNavigate();
  const [coverImage, setCoverImage] = useState();

  const coverImageChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverImage(e.target.files[0]);
    }
  }, []);
  const removecoverImage = useCallback(() => {
    setCoverImage();
  }, []);

  const [storyAudio, setStoryAudio] = useState();

  const storyAudioChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setStoryAudio(e.target.files[0]);
    }
  }, []);
  const removestoryAudio = useCallback(() => {
    setStoryAudio();
  }, []);

  const publish = useCallback(() => {
    const newPost = {
      audio: storyAudio,
      cover: coverImage,
    };

    console.log(newPost);
    toast.success("posted successfully");
    setCoverImage();
    setStoryAudio();

    navigate("/story-imagines/myimagines");
  }, [storyAudio, coverImage, navigate]);
  return (
    <div className="w-full flex justify-center flex-col items-center font-Mulish">
      <div className="max-w-4xl w-full px-4">
        <div className="flex justify-between items-center space-x-5 w-full mt-8 ">
          <Link to="/createblog">
            {" "}
            <button
              className="uppercase  flex text-sm font-semibold items-center py-1 px-2 rounded-md transition duration-200
             bg-gray-200 text-primary focus:bg-cyan-900
        dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
            >
              Back
            </button>{" "}
          </Link>
          <span></span>
        </div>
        <div className="w-full">
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
        <div className="w-full max-2xl">
          <label
            className={`${
              !storyAudio &&
              "border border-gray-200 shadow rounded-lg px-3 py-2 flex w-full justify-center h-30 mt-6 items-center cursor-pointer"
            } w-full`}
          >
            {!storyAudio && (
              <>
                <span className="text-sm font-bold lg:text-base uppercase">
                  Story audio
                </span>
                <UploadIcon className="w-7 h-7 ml-2" />
              </>
            )}
            <input
              accept="audio/*"
              type="file"
              onChange={storyAudioChange}
              className="invisible hidden"
            />
          </label>

          {storyAudio && (
            <>
              <div className="w-full h-30 pb-3 mt-8">
                <audio
                  className="w-full"
                  controls
                  src={URL.createObjectURL(storyAudio)}
                />

                <button
                  className="text-xs font-bold bg-gray-200 px-2 py-1 rounded-md mt-1"
                  onClick={removestoryAudio}
                >
                  Remove This Audio
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center items-center space-x-5 w-full mt-8 lg:mt-20">
          <button
            className="uppercase  flex text-sm md:text-base font-semibold items-center py-1 lg:py-3 px-3 rounded-md transition 
            duration-200 bg-gray-200 text-primary focus:bg-cyan-900
        dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            Save Draft
          </button>{" "}
          {!coverImage ? (
            <button className="uppercase  flex text-sm md:text-base font-semibold items-center py-1 lg:py-3 px-3 rounded-md transition duration-200 bg-gray-100 text-gray-300 ">
              Publish
            </button>
          ) : (
            <button
              className="uppercase  flex text-sm md:text-base font-semibold items-center py-1 lg:py-3 px-3 rounded-md transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900
        dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
              onClick={publish}
            >
              Publish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(StoryDetails);
