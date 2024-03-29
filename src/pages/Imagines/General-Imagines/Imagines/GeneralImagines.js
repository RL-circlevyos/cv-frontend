import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import CommentList from "../../Comment/List";
import Recommendation from "../../Home/General/Recommendation/Recommendation";
import Nav from "./Nav";
import Navbar from "../../../../components/Navbar";
import Card from "./Card";

import { useDispatch, useSelector } from "react-redux";
import {
  appriciateIdListAction,
  commentFetchAction,
  generalImagineSingleFetchAction,
} from "../../../../store/apps/imagines/imagine-action";
import { useParams } from "react-router-dom";
import { useSocket } from "../../../../hooks/socketHook";
import { ToastContainer } from "react-toastify";
import { appriciateListAction } from "./../../../../store/apps/imagines/imagine-action";
import { Helmet } from "react-helmet";
import { LinearProgress } from "@mui/material";

const GeneralImagines = () => {
  const imagineid = useParams();
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const socket = useSocket();

  useEffect(() => {
    dispatch(generalImagineSingleFetchAction(imagineid.id, auth.token));
    dispatch(appriciateListAction(imagineid.id, auth.token));
    dispatch(appriciateIdListAction(imagineid.id, auth.token));
    dispatch(commentFetchAction(imagineid.id, auth.token));

    socket.on("create-comment", () => {
      dispatch(commentFetchAction(imagineid.id, auth.token));
    });

    socket.on("appriciate", () => {
      dispatch(appriciateIdListAction(imagineid.id, auth.token));

      dispatch(appriciateListAction(imagineid.id, auth.token));
    });

    socket.on("update-imagine", (data) => {
      dispatch(generalImagineSingleFetchAction(imagineid.id, auth.token));
    });
  }, [dispatch, imagineid.id, socket, auth.token]);

  const imagine = useSelector((state) => state.imagine);
  const title = imagine?.singleImagine?.singleImagine?.title;
  const mains = imagine?.singleImagine?.singleImagine?.main;
  // const img = imagine?.singleImagine?.singleImagine?.introImage.secure_url;
  // const imgContent = img
  //   ? img
  //   : "https://www.risingleafs.com/img/circlevyos%20logo.svg";

  return (
    <>
      {/* web mode */}
      <div className="w-full lg:flex flex-col justify-content items-start h-screen hidden lg:fixed">
        {/* meta tags */}
        <Helmet>
          <title>{title}</title>
          <meta
            name="description"
            //dangerouslySetInnerHTML={{ __html: `<strong>${mains}</strong>` }}
            content={mains ? mains : "no description"}
          />
          <meta
            property="og:image"
            content={
              imagine?.singleImagine?.singleImagine?.introImage
                ? imagine?.singleImagine?.singleImagine?.introImage
                : ""
            }
          />
        </Helmet>
        {/* meta tags */}

        <Nav />
        {imagine.isUploading && (
          <span className="text-lg text-primary block mt-4 mb-4 w-full">
            {" "}
            <LinearProgress color="success" />
            <span className="text-base leading-relaxed italic font-semibold flex justify-center items-center">
              Updading...
            </span>
          </span>
        )}
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
      {/* web mode */}

      {/* mobile mode */}
      <div className="w-full h-screen lg:hidden">
        <Navbar />
        {imagine.isUploading && (
          <span className="text-lg text-primary block mt-4 mb-4 w-full">
            {" "}
            <LinearProgress color="success" />
            <span className="text-base leading-relaxed italic font-semibold flex justify-center items-center">
              Updading...
            </span>
          </span>
        )}
        <div className="w-full flex flex-col justify-content items-start">
          <Nav />
          <div className={`md:max-w-5xl w-full`}>
            {/* <ImagineSlider openCommentBox={openCommentBox} /> */}
            <div>
              <div className=" mb-10 w-full min-w-full">
                <Card post={imagine} styles="max-w-base px-4 mt-2" />
              </div>
              <div className="w-full px-3 py-1 mt-3">
                <CommentList />
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
      {/* mobile mode */}
    </>
  );
};

export default React.memo(GeneralImagines);
