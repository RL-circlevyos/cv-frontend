import { LocationMarkerIcon, UploadIcon, XIcon } from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { blogCreateAction } from "../../../store/apps/blogs/blog-action";

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

const Share = () => {
  const [coverImage, setCoverImage] = useState();
  const [location, setLocation] = useState("");
  const formData = new FormData();
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.blog);
  console.log(blog.newBlogItem.content);

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

  const [draft, setDraft] = useState(false);

  formData.append("title", blog.newBlogItem.title);
  formData.append("content", JSON.stringify(blog.newBlogItem.content));
  formData.append("coverImage", coverImage);
  formData.append("audio", blogAudio);
  formData.append("draft", draft);
  // formData.append("keywords",)

  const saveAsDraft = () => {
    setDraft(true);
  };

  const publish = () => {
    console.log(formData);
    //dispatch(blogCreateAction(formData));
  };

  return (
    <div className="w-full flex justify-center flex-col items-center font-Mulish">
      <div className="max-w-4xl w-full px-4">
        <div className="flex flex-col justify-center items-center w-full mt-10 lg:mt-20">
          <button
            className="uppercase w-full flex text-sm md:text-base font-semibold justify-center items-center py-1 lg:py-3 px-3 rounded-md transition 
            duration-200 bg-primary text-gray-200"
          >
            Your imagine is successfully posted.
          </button>{" "}
          <div className=" w-full mt-8 lg:mt-20">
            <button
              className="uppercase  flex text-sm md:text-base font-semibold items-center py-1 lg:py-3 px-3 rounded-md transition 
            duration-200 bg-gray-200 text-primary focus:bg-cyan-900
        dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
              onSubmit={saveAsDraft}
            >
              Save Draft
            </button>{" "}
            <button
              className="uppercase  flex text-sm md:text-base font-semibold items-center py-1 lg:py-3 px-3 rounded-md transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900
        dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
              onClick={publish}
            >
              Publish Imagine
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Share);
