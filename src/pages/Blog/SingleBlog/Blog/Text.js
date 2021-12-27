import React from "react";
import edjsHTML from "editorjs-html";

const Text = ({ content, title }) => {
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
