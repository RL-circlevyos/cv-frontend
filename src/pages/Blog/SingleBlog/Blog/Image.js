import React from "react";

const Image = ({ img }) => {
  let src1;
  if (img) {
    src1 = `https://storage.googleapis.com/niketan-dev-mode.appspot.com/${img}`;
  }
  return (
    <div className="w-8/12 h-96">
      <img src={src1} alt="blog" className="w-full h-full object-cover" />
    </div>
  );
};

export default Image;
