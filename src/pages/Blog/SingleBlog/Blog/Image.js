import React from "react";

const Image = ({ img }) => {
  let src1;
  if (img) {
    src1 = `https://storage.googleapis.com/niketan-dev-mode.appspot.com/${img}`;
  }
  return (
    <div className="lg:w-8/12 w-full lg:h-96 rounded-md">
      <img
        src={src1}
        alt="blog"
        className="w-full h-full rounded-md shadow object-contain"
      />
    </div>
  );
};

export default Image;
