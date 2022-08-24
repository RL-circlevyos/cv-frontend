import { LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import {
  createVideoAction,
  getSectionVideoAction,
} from "../../../store/apps/myresources/myresource-action";

function SingleSection() {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  const formData = new FormData();
  const [videoName, setVideoName] = useState();
  const [sectionVideo, setSectionVideo] = useState();
  const { token } = useSelector((state) => state.auth);
  const { sectionVideos, isCreating } = useSelector(
    (state) => state.myresource
  );
  const { sectionid } = useParams();

  formData.append("videoname", videoName);
  formData.append("sectionvideo", sectionVideo);

  const videoHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSectionVideo(e.target.files[0]);
    }
  };

  const uploadVideoHandler = (e) => {
    e.preventDefault();

    dispatch(createVideoAction(token, formData, sectionid));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getSectionVideoAction(token, sectionid));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, token, sectionid]);

  console.log(sectionVideos?.videos);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50">
          <div className="flex justify-between mx-4 my-3">
            <div className="text-lg text-purple-600 font-semibold">
              Your Videos
            </div>
            <div
              onClick={() => setShowModal(true)}
              className="bg-purple-600 hover:bg-purple-700 px-2 py-1 rounded-lg cursor-pointer text-white"
            >
              Upload video
            </div>
            {showModal ? (
              <>
                <div className="ease-in justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Section name</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto space-y-2">
                        <div>
                          <div className="text-lg font-medium text-gray-400">
                            Video Name:{" "}
                          </div>
                          <input
                            onChange={(e) => setVideoName(e.target.value)}
                            type="text"
                            className="px-2 rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                          />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-gray-400">
                            Upload video
                          </div>
                          <input
                            onChange={videoHandler}
                            type="file"
                            accept="video/*"
                            className="px-2 rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                          />
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={uploadVideoHandler}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
          {isCreating && (
            <span className="text-lg text-primary block mt-4 mb-4 w-full">
              {" "}
              <LinearProgress color="success" />
              <span className="text-base leading-relaxed italic font-semibold flex justify-center items-center">
                Uploading...
              </span>
            </span>
          )}
          <div className="grid grid-cols-3 gap-5">
            {sectionVideos?.videos?.map((video) => (
              <>
                <div className="my-2 mx-2">
                  <video
                    src={video?.sectionvideo?.secure_url}
                    width="300"
                    height="300"
                    className=" object-fit rounded-md "
                    controls
                  ></video>
                  <p className="font-semibold">{video?.videoname}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleSection);
