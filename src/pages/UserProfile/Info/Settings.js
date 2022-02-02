import React, { useCallback, useState } from "react";

import dp from "../../../assets/person.png";
import { PencilIcon, UploadIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsUpdateAction } from "../../../store/apps/auth/auth-action";
import Navbar from "../../../components/Navbar";
import { ToastContainer } from "react-toastify";

const Settings = () => {
  const auth = useSelector((state) => state.auth);
  const user = auth.userid;
  const [userName, setUserName] = useState(auth?.userDetails?.name);
  const [showName, setShowName] = useState(false);
  const changeName = () => {
    setShowName(!showName);
  };

  const [userBio, setUserBio] = useState(auth?.userDetails?.bio);
  const [showBio, setShowBio] = useState(false);
  const changeBio = () => {
    setShowBio(!showBio);
  };
  const [userImage, setuserImage] = useState();
  const userImageChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setuserImage(e.target.files[0]);
    }
  }, []);
  const removeIntroImage = useCallback(() => {
    setuserImage();
  }, []);

  const formdata = new FormData();
  const dispatch = useDispatch();

  formdata.append("name", userName);
  formdata.append("bio", userBio);
  formdata.append("photo", userImage);

  const profileUpdateHandler = useCallback(() => {
    dispatch(userDetailsUpdateAction(formdata));
    setShowBio(false);
    setShowName(false);
    setuserImage();
  }, [dispatch, formdata]);

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center">
        <div
          className="w-full max-w-4xl bg-white mt-4 py-4 shadow rounded-xl mb-3 flex justify-center flex-col 
      items-center font-Mulish text-gray-600 border border-gray-100"
        >
          <div className="flex justify-between items-end w-full px-5">
            <Link
              to="/"
              className="bg-white text-primary px-4 py-2 rounded shadow uppercase font-semibold"
            >
              Back
            </Link>
            <button
              className="bg-primary text-white px-4 py-2 rounded shadow font-semibold"
              onClick={profileUpdateHandler}
            >
              Save Changes
            </button>
          </div>
          <div className="flex justify-center items-center gap-x-8 w-full">
            <div className="mt-6 flex justify-center flex-col items-center">
              <div className="w-28 h-28">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={
                    auth?.userDetails?.photo?.secure_url
                      ? auth?.userDetails?.photo?.secure_url
                      : dp
                  }
                  alt="dp"
                />
              </div>
              <span>current pic</span>
            </div>
            <div>
              {" "}
              <div className="ml-4">
                <label
                  className={`${
                    !userImage &&
                    "border border-gray-300 rounded-full w-28 h-28 mt-6 px-8 py-8 flex items-center justify-center cursor-pointer"
                  } p-2`}
                >
                  {!userImage && (
                    <>
                      <UploadIcon className="w-7 h-7" />
                    </>
                  )}
                  <input
                    accept="image/*"
                    type="file"
                    onChange={userImageChange}
                    className="invisible hidden"
                  />
                </label>
                <span className="text-xs font-bold lg:text-base">
                  preview image
                </span>

                {userImage && (
                  <div className="w-28 h-32 pb-3">
                    <img
                      src={URL.createObjectURL(userImage)}
                      alt="Thumb"
                      className="w-full h-full object-cover rounded-full border border-gray-400"
                    />
                    <button
                      className="text-xs font-bold"
                      onClick={removeIntroImage}
                    >
                      Remove This Image
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <span className="text-2xl font-bold pt-4">
            {auth?.userDetails?.name}
          </span>
          {/**  {!showName ? (
            <div className="flex items-center mt-6">
              <span className="cursor-pointer" onClick={changeName}>
                <PencilIcon className="h-6 w-6 mr-2 " />
              </span>
              <span className="text-2xl font-bold mt-2">
                {auth?.userDetails?.name}
              </span>
            </div>
          ) : (
            <span className="w-full px-7 mt-6">
              <label
                onClick={changeName}
                className="ml-4 text-xs w-24 uppercase font-bold bg-gray-200 px-1 py-1 mb-2 cursor-pointer flex items-center justify-center rounded-md"
              >
                Dismiss <XIcon className="h-5 w-5 ml-1" />
              </label>
              <span
                className=" w-full mt-2 text-base flex items-center border-b-2 lg:px-4 py-2 hover:border-primary 
            border-gray-300 bg-white "
              >
                <input
                  type="text"
                  placeholder="your name"
                  className="font-medium w-full lg:px-4 px-1 ml-2 py-2 focus:outline-none form-control "
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </span>
            </span>
          )} */}

          {showBio ? (
            <span className="w-full px-7 mt-6">
              <label
                onClick={changeBio}
                className="ml-4 text-xs w-24 uppercase font-bold bg-gray-200 px-1 py-1 mb-2 cursor-pointer flex items-center justify-center rounded-md"
              >
                Dismiss <XIcon className="h-5 w-5 ml-1" />
              </label>
              <span
                className=" w-full mt-2 text-base flex items-center border-b-2 lg:px-4 py-2 hover:border-primary 
            border-gray-300 bg-white "
              >
                <input
                  type="text"
                  placeholder="your bio"
                  className="font-medium w-full lg:px-4 px-1 ml-2 py-2 focus:outline-none form-control "
                  value={userBio}
                  onChange={(e) => setUserBio(e.target.value)}
                />
              </span>
            </span>
          ) : (
            <div className="flex items-center px-5 mt-6">
              <span className="cursor-pointer" onClick={changeBio}>
                <PencilIcon className="h-6 w-6 mr-2" />
              </span>
              <div className="text-lg mt-4 px-4 font-bold">
                Bio{" "}
                <i className="ml-2 text-lg font-medium">
                  {auth?.userDetails?.bio}
                </i>{" "}
              </div>
            </div>
          )}

          <hr />
          <Link
            to={`/new-password/${user}`}
            className="my-10 text-lg bg-cyan-700 text-white px-4 py-2 rounded shadow-md font-semibold"
          >
            Change Your Password
          </Link>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};

export default Settings;
