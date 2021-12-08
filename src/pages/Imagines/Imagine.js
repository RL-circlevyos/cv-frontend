import React from "react";
import { useSelector } from "react-redux";

import Nav from "./Nav";
import ImagineSlider from "./Slider";

const Imagine = () => {
  const posts = useSelector((state) => state.createImagine.posts);
  return (
    <div className="space-y-2 md:grid md:place-items-center block">
      <Nav />

      <div className="md:max-w-7xl w-full">
        <ImagineSlider posts={posts} />
      </div>
    </div>
  );
};

export default Imagine;
