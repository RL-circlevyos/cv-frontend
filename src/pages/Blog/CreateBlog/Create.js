import React from "react";

import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./Editor";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Create = () => {
  const instanceRef = React.useRef(null);

  async function handleSave() {
    const savedData = await instanceRef.current.save();

    console.log("savedData", savedData);
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
        {" "}
        <button
          className="uppercase flex text-sm md:text-base font-semibold items-center py-1 lg:py-2 px-2 rounded-sm transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 
        dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          onClick={handleSave}
        >
          Save Blog
        </button>
      </div>
    </>
  );
};
export default Create;
