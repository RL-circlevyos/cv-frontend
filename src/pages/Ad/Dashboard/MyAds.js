import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Ad from "./Ad";

const MyAds = () => {
  return (
    <div>
      <Scrollbars
        thumbSize={1}
        autoHide
        style={{ width: "100%", height: "90vh" }}
      >
        <div className="w-full">
          <Ad />
        </div>
      </Scrollbars>
    </div>
  );
};

export default MyAds;
