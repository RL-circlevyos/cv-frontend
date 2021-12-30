import React from "react";
import edjsHTML from "editorjs-html";
import { useSelector } from "react-redux";

const Text = ({ title }) => {
  // console.log(content);
  const loading = {
    time: 1640678466516,
    blocks: [
      {
        id: "cdc7XwykjG",
        type: "header",
        data: {
          text: "Loading ...",
          level: 3,
        },
      },
    ],
    version: "2.22.2",
  };
  const blog = useSelector((state) => state.blog);
  const ui = useSelector((state) => state.ui);
  let content = blog?.blogPostItem?.content
    ? blog?.blogPostItem?.content
    : loading;
  console.log(content);
  const edjsParser = edjsHTML();
  let show;
  const HTML = edjsParser.parse(content);
  const string = HTML;
  const parse = string.join(" ");

  function createMarkup() {
    return { __html: parse };
  }

  return (
    <div className="text-gray-900 font-Mulish text-base w-11/12 text-justify mt-4">
      <div className="text-2xl font-extrabold pb-3">
        {title ? title : "loading..."}
      </div>
      <div
        className="text-base mt-1  "
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
    </div>
  );
};

export default Text;
