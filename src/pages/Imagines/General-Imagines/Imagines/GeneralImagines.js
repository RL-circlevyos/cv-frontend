import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import CommentList from "../../Comment/List";
import Recommendation from "../../Home/General/Recommendation/Recommendation";
import Nav from "./Nav";
import Navbar from "../../../../components/Navbar";
import Card from "./Card";

import { useDispatch, useSelector } from "react-redux";
import { generalImagineSingleFetchAction } from "../../../../store/apps/imagines/imagine-action";
import { useParams } from "react-router-dom";
import { useSocket } from "../../../../hooks/socketHook";
import { ToastContainer } from "react-toastify";

const GeneralImagines = ({ i }) => {
  const imagine = useSelector((state) => state.imagine);
  const imagineid = useParams();

  const dispatch = useDispatch();
  const socket = useSocket();

  console.log(imagine?.singleImagine?.singleImagine);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(generalImagineSingleFetchAction(imagineid.id));
      socket.on("create-comment", () => {
        dispatch(generalImagineSingleFetchAction(imagineid.id));
      });
      socket.on("delete-comment", () => {
        dispatch(generalImagineSingleFetchAction(imagineid.id));
      });
      socket.on("appriciate", () => {
        dispatch(generalImagineSingleFetchAction(imagineid.id));
      });
      socket.on("update-imagine", (data) => {
        console.log("socket call");
        dispatch(generalImagineSingleFetchAction(imagineid.id));
      });
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, imagineid.id, socket]);

  return (
    <>
      <div className="w-full lg:flex flex-col justify-content items-start h-screen hidden lg:fixed">
        <Nav />
        <div className="grid place-items-center w-full">
          <div className="flex justify-center items-start w-full">
            {" "}
            <div className="flex items-start justify-center w-full max-w-5xl">
              <Scrollbars
                autoHide
                thumbSize={1}
                autoHeight
                autoHeightMin={"90vh"}
                autoHeightMax={"90vh"}
                style={{ width: "100%" }}
              >
                <div className={`md:max-w-5xl min-h-screen w-full`}>
                  {" "}
                  {/* <ImagineSlider openCommentBox={openCommentBox} /> */}
                  <div>
                    <div className=" mb-10 w-full min-w-full">
                      <Card styles="max-w-base px-4 mt-2" />
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
              </Scrollbars>
            </div>
            <div>
              <Scrollbars
                autoHide
                thumbSize={1}
                autoHeight
                autoHeightMax={"90vh"}
                style={{ width: "100%" }}
              >
                <div className="block max-w-xs pb-4 ">
                  <Recommendation />
                </div>
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen lg:hidden">
        <Navbar />
        <div className="w-full flex flex-col justify-content items-start">
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
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};

export default React.memo(GeneralImagines);
