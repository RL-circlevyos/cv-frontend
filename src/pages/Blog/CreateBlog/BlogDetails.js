import { LocationMarkerIcon, UploadIcon, XIcon } from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const TagsInput = (props) => {
  const [tags, setTags] = useState(props.tags);
  const removeTags = useCallback(
    (indexToRemove) => {
      setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    },
    [tags]
  );
  const addTags = useCallback(
    (event) => {
      if (event.target.value !== "") {
        setTags([...tags, event.target.value]);
        props.selectedTags([...tags, event.target.value]);
        event.target.value = "";
      }
    },
    [props, tags]
  );
  return (
    <div className=" flex flex-wrap items-start px-2 py-2 border w-full border-gray-100 rounded-lg lowercase">
      <ul className="flex flex-wrap items-center gap-2 lowercase">
        {tags &&
          tags.map((tag, index) => (
            <li
              key={index}
              className="tag flex items-center justify-center text-white px-2 py-1 list-none rounded-lg bg-teal-500 lowercase"
            >
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon block ml-1"
                onClick={() => removeTags(index)}
              >
                <XIcon className="h-5 w-5 cursor-pointer" />
              </span>
            </li>
          ))}
      </ul>
      <input
        className="border-0 focus:outline-transparent flex w-full lowercase"
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Press enter to add tags"
      />
    </div>
  );
};

const BlogDetails = () => {
  const [coverImage, setCoverImage] = useState();
  const [location, setLocation] = useState("");
  const coverImageChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverImage(e.target.files[0]);
    }
  }, []);
  const removecoverImage = useCallback(() => {
    setCoverImage();
  }, []);

  const [blogAudio, setBlogAudio] = useState();

  const blogAudioChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setBlogAudio(e.target.files[0]);
    }
  }, []);
  const removeBlogAudio = useCallback(() => {
    setBlogAudio();
  }, []);
  const selectedTags = (tags) => {
    console.log(tags);
  };
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
              !blogAudio &&
              "border border-gray-200 shadow rounded-lg px-3 py-2 flex w-full justify-center h-30 mt-6 items-center cursor-pointer"
            } w-full`}
          >
            {!blogAudio && (
              <>
                <span className="text-sm font-bold lg:text-base uppercase">
                  blog audio
                </span>
                <UploadIcon className="w-7 h-7 ml-2" />
              </>
            )}
            <input
              accept="audio/*"
              type="file"
              onChange={blogAudioChange}
              className="invisible hidden"
            />
          </label>

          {blogAudio && (
            <>
              <div className="w-full h-30 pb-3 mt-8">
                <audio
                  className="w-full"
                  controls
                  src={URL.createObjectURL(blogAudio)}
                />

                <button
                  className="text-xs font-bold bg-gray-200 px-2 py-1 rounded-md mt-1"
                  onClick={removeBlogAudio}
                >
                  Remove This Audio
                </button>
              </div>
            </>
          )}
        </div>
        <div className="w-full mt-6">
          <label className="ml-4 text-xs uppercase font-bold">Location</label>
          <span className=" w-full text-sm flex items-center border rounded-xl mt-2 px-1 py-1 hover:border-primary border-gray-300 bg-white ">
            <LocationMarkerIcon className="h-7 w-7 text-primary" />{" "}
            <input
              type="text"
              required
              placeholder="Add Location"
              className="font-medium w-full px-1 ml-2 py-2 focus:outline-none form-control "
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </span>
        </div>

        <div className="w-full mt-6 border border-gray-300 flex flex-wrap">
          <TagsInput selectedTags={selectedTags} tags={["yourTag"]} />
        </div>
        <div className="flex justify-center items-center space-x-5 w-full mt-8 lg:mt-20">
          {" "}
          <button
            className="uppercase  flex text-sm md:text-base font-semibold items-center py-1 lg:py-3 px-3 rounded-md transition 
            duration-200 bg-gray-200 text-primary focus:bg-cyan-900
        dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            Save Draft
          </button>{" "}
          <button
            className="uppercase  flex text-sm md:text-base font-semibold items-center py-1 lg:py-3 px-3 rounded-md transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900
        dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
            //onClick={handleSave}
          >
            Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BlogDetails);
