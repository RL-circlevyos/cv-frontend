import React, { useCallback, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import CommentList from "../../Comment/List";
import Recommendation from "../../Recommendation/Recommendation";
import Nav from "./Nav";

import Card from "./Card";

import { useDispatch, useSelector } from "react-redux";
import { generalImagineFetchAction } from "../../../../store/apps/imagines/imagine-action";

const GeneralImagines = ({ i }) => {
  const imagine = useSelector((state) => state.imagine);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(generalImagineFetchAction());
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <>
      <div className="w-full lg:flex flex-col justify-content items-start h-screen hidden lg:fixed">
        <Nav />
        <div className="grid place-items-center w-full">
          <div className="flex justify-center items-start w-full">
            {" "}
            <div className="flex items-start justify-center w-full max-w-5xl">
              <div className={`md:max-w-5xl w-full`}>
                {" "}
                {/* <ImagineSlider openCommentBox={openCommentBox} /> */}
                <div>
                  <div className=" mb-10 w-full min-w-full">
                    <Card post={imagine} styles="max-w-base px-4 mt-2" />
                  </div>
                </div>
                <div className="w-full px-3 py-1 mt-3">
                  {" "}
                  <CommentList />
                </div>
              </div>
              <div>
                {/* <CommentBox
                  showBox={showBox}
                  closeCommentBox={closeCommentBox}
                /> */}
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
        <div className={`md:max-w-5xl w-full`}>
          {/* <ImagineSlider openCommentBox={openCommentBox} /> */}
          <div>
            <div className=" mb-10 w-full min-w-full">
              <Card post={imagine} styles="max-w-base px-4 mt-2" />
            </div>
            <div className="w-full px-3 py-1 mt-3">
              {" "}
              <CommentList />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default React.memo(GeneralImagines);
