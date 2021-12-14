import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import CommentBox from "./Comment/CommentBox";
import ImagineSlider from "./Slider";
import StoryImagine from "./StoryImagines/StoryImagine";
import Nav from "./Nav";

const Imagine = () => {
  const [showBox, setShowBox] = useState(false);
  const openCommentBox = () => {
    setShowBox(true);
  };
  const closeCommentBox = () => {
    setShowBox(false);
  };
  const posts = useSelector((state) => state.createImagine.posts);
  return (
    <div className="w-full flex flex-col justify-between items-start h-screen lg:fixed">
      <Nav />
      <div className="flex justify-between items-start ">
        <div></div>
        <div className="h-screen flex items-start justify-center max-w-5xl">
          <div
            className={`${
              showBox &&
              "bg-gradient-to-t from-gray-500 via-gray-400 to-gray-300 "
            }md:max-w-5xl w-full opacity-100`}
          >
            {" "}
            <ImagineSlider posts={posts} openCommentBox={openCommentBox} />
          </div>
          <div>
            <CommentBox showBox={showBox} closeCommentBox={closeCommentBox} />
          </div>
        </div>
        <div className="lg:block max-w-lg hidden pb-4">
          <Scrollbars
            autoHide
            thumbSize={1}
            autoHeight
            autoHeightMin={700}
            style={{ width: "100%" }}
          >
            {" "}
            <StoryImagine />
          </Scrollbars>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Imagine;
