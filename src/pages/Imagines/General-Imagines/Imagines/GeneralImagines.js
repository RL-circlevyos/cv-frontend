import React, { useCallback, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import CommentBox from "../../Comment/CommentBox";
import ImagineSlider from "./Slider";
import Recommendation from "../../Recommendation/Recommendation";
import Nav from "./Nav";
import posts from "../../Demo.json";

const GeneralImagines = () => {
  const [showBox, setShowBox] = useState(false);
  const openCommentBox = useCallback(() => {
    setShowBox(true);
  }, []);
  const closeCommentBox = useCallback(() => {
    setShowBox(false);
  }, []);
  // const posts = useSelector((state) => state.createImagine.posts);
  return (
    <>
      <div className="w-full lg:flex flex-col justify-content items-start h-screen hidden lg:fixed">
        <Nav />
        <div className="grid place-items-center w-full">
          <div className="flex justify-center items-start w-full">
            {" "}
            <div className="flex items-start justify-center w-full max-w-5xl">
              <div
                className={`${
                  showBox &&
                  "bg-gradient-to-t from-gray-500 via-gray-400 to-gray-300 "
                }md:max-w-5xl w-full`}
              >
                {" "}
                <ImagineSlider posts={posts} openCommentBox={openCommentBox} />
              </div>
              <div>
                <CommentBox
                  showBox={showBox}
                  closeCommentBox={closeCommentBox}
                />
              </div>
            </div>
            <div>
              <Scrollbars
                autoHide
                thumbSize={1}
                autoHeight
                autoHeightMax={"90vh"}
                style={{ width: "100%" }}
              >
                <div className="block max-w-lg pb-4 ">
                  <Recommendation />
                </div>
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-content items-start h-screen lg:hidden">
        <Nav />
        <div
          className={`${
            showBox &&
            "bg-gradient-to-t from-gray-500 via-gray-400 to-gray-300 "
          }md:max-w-5xl w-full`}
        >
          <ImagineSlider posts={posts} openCommentBox={openCommentBox} />
        </div>
        <div>
          <CommentBox showBox={showBox} closeCommentBox={closeCommentBox} />
        </div>
      </div>
    </>
  );
};

export default React.memo(GeneralImagines);
