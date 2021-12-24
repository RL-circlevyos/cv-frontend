import React from "react";

const Content = ({ post }) => {
  return (
    <div className="mt-3 space-y-2 block text-tiny md:text-sm xl:text-base flex-initial text-gray-900 font-Mulish leading-relaxed">
      <div className="text-base md:text-lg font-bold px-5">{post.title}</div>
      <div className="flex flex-wrap md:flex-nowrap items-start justify-center gap-2 px-4 font-medium">
        {post.introImg && (
          <span className="w-full md:w-96 h-32">
            <img
              src={post.introImg}
              alt="firstpic"
              className="w-full h-full object-cover"
            />
          </span>
        )}
        <span className="w-full text-left">{post.intro}</span>
      </div>
      <div className="font-medium px-4 text-justify">
        <span>{post.body}</span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap font-medium items-start justify-center gap-2 px-4 pb-4">
        <span className="w-full text-left">{post.outro}</span>{" "}
        {post.outroImg && (
          <span className="w-full md:w-96 h-32">
            <img
              src={post.outroImg}
              alt="lastpic"
              className="w-full h-full object-cover"
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default React.memo(Content);
