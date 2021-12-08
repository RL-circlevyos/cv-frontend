import React, { useState } from "react";
import { useSelector } from "react-redux";

import Nav from "./Nav";
import ImagineSlider from "./Slider";
import CommentBox from "./Comment/CommentBox";

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
    <div className="h-screen fixed w-full">
      <div className="space-y-2 md:grid md:place-items-center block ">
        <Nav />
        <div className="md:max-w-7xl w-full">
          <ImagineSlider posts={posts} openCommentBox={openCommentBox} />
        </div>
        <div>
          <CommentBox showBox={showBox} closeCommentBox={closeCommentBox} />
        </div>
      </div>
    </div>
  );
};

export default Imagine;
