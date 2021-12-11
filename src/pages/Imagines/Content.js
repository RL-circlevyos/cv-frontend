import React from "react";

const Content = ({ post }) => {
  return (
    <div className="mt-3 space-y-2 block text-xs flex-initial md:text-sm text-gray-900 font-Mulish leading-relaxed min-w-min">
      <div className="text-base md:text-lg font-bold px-5">{post.title}</div>
      <div className="flex items-start justify-center gap-2 px-4 font-medium">
        {post.introImg && (
          <img src={post.introImg} alt="firstpic" className="w-32 h-28" />
        )}
        <span className="w-full text-left">{post.intro}</span>
      </div>
      <div className="font-medium px-4 text-justify">
        <span>{post.body}</span>
      </div>
      <div className="flex font-medium items-start justify-center gap-2 px-4 pb-4">
        <span className="w-full text-left">{post.outro}</span>{" "}
        {post.outroImg && (
          <img src={post.outroImg} alt="firstpic" className="w-32 h-28" />
        )}
      </div>
    </div>
  );
};

export default React.memo(Content);
