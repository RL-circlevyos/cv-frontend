import React, { useCallback, useState } from "react";

import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./Editor";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import edjsHTML from "editorjs-html";
import { useDispatch } from "react-redux";
import { blogSliceAction } from "../../../store/apps/blogs/blog-slice";
import { useSelector } from "react-redux";

const edjsParser = edjsHTML();

const Create = ({ data }) => {
  const instanceRef = React.useRef(null);
  const [show, setShow] = useState();
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const limit = 200;
  const setTitleContent = useCallback(
    (text) => {
      setTitle(text.slice(0, limit));
    },
    [setTitle]
  );
  async function handleSave() {
    const savedData = await instanceRef.current.save();

    console.log("savedData", savedData);
    console.log("savedtitle", title);

    const newBlogItem = {
      title: title,
      content: savedData,
    };

    dispatch(
      blogSliceAction.newBlogContent({
        newBlogItem,
      })
    );
    const HTML = edjsParser.parse(savedData);
    const string = HTML;
    const parse = string.join(" ");

    setShow(parse);
  }
  function createMarkup() {
    return { __html: show };
  }

  return (
    <>
      <div className="pb-3 mt-2">
        <div className="text-lg font-medium uppercase text-primary flex justify-between items-start px-3 ">
          <Link to="/">
            <ArrowLeftIcon className="h-5 w-5 mr-4" />{" "}
          </Link>
          <span className="lg:text-2xl text-base">Create BLOG</span>
          <span></span>
        </div>
        <div className="w-full flex justify-center items-center px-4 mt-5">
          <div className="max-w-7xl w-full">
            <label className="ml-4 text-xs uppercase font-bold">title</label>
            <span className=" w-full text-sm flex items-center border rounded-xl px-1 py-1 hover:border-primary border-gray-300 bg-white ">
              <input
                type="text"
                required
                placeholder="Title of Blog"
                className="font-medium w-full px-1 ml-2 py-2 focus:outline-none form-control "
                value={title}
                onChange={(e) => setTitleContent(e.target.value)}
              />
            </span>
            <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
              {title.length}/{limit}
            </p>
          </div>
        </div>
        <div className="italic lg:mt-3 mt-5 px-4 text-sm lg:text-base">
          Write Down Something Interesting................
        </div>
      </div>
      <div className="border border-gray-300 px-4">
        <EditorJs
          instanceRef={(instance) => (instanceRef.current = instance)}
          tools={EDITOR_JS_TOOLS}
        />
      </div>
      <div className="float-right p-3">
        <button
          className="uppercase flex text-sm md:text-base font-semibold items-center py-1 lg:py-2 px-2 rounded-sm transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900
        dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          onClick={handleSave}
        >
          Save Blog
        </button>
        <Link to="/blog-details">
          <button
            className="uppercase mt-3 flex text-sm md:text-base font-semibold items-center py-1 lg:py-2 px-2 rounded-sm transition duration-200 
          bg-gray-100 text-primary focus:bg-cyan-900
        dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
            onClick={handleSave}
          >
            NEXT
          </button>
        </Link>
      </div>
      <div
        className="px-4 py-3 space-y-4"
        dangerouslySetInnerHTML={createMarkup()}
      />
    </>
  );
};
export default Create;
