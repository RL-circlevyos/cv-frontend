import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  userDetailsAction,
  userFollowAction,
  userImaginesAction,
  userUnfollowAction,
} from "../../../store/apps/auth/auth-action";
import AlertDialogSlide from "./../../../components/Dialog";
import dp from "../../../assets/person.png";
import { useSocket } from "../../../hooks/socketHook";
import Followers from "./Followers";
import Following from "./Following";

const Detail = () => {
  const auth = useSelector((state) => state.auth);
  const user = auth.userid;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const id = useParams();
  const socket = useSocket();
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(userDetailsAction(id.id));
      dispatch(userImaginesAction(id.id));

      socket.on("follow", () => {
        dispatch(userDetailsAction(id.id));
        dispatch(userImaginesAction(id.id));
      });
      socket.on("unfollow", () => {
        dispatch(userDetailsAction(id.id));
        dispatch(userImaginesAction(id.id));
      });
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, id, socket, isInitial]);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const clickFollowHandler = useCallback(() => {
    user ? dispatch(userFollowAction(id.id)) : handleClickOpen();
  }, [handleClickOpen, user, id.id, dispatch]);
  const clickUnfollowHandler = useCallback(() => {
    user ? dispatch(userUnfollowAction(id.id)) : handleClickOpen();
  }, [handleClickOpen, user, id.id, dispatch]);

  // tesing
  console.log(
    auth?.userDetails?.followers?.includes(auth.userid),
    "testing user like"
  );

  return (
    <div className="w-full font-Mulish">
      <div className="lg:flex flex-col hidden">
        <div className="flex justify-start items-start space-x-4 w-full">
          <div className="block w-32 space-y-4">
            <span className="w-24 h-24">
              <img
                src={
                  auth?.userDetails?.photo?.secure_url
                    ? auth?.userDetails?.photo?.secure_url
                    : dp
                }
                alt="dp"
                className="w-28 h-28 object-cover rounded-full "
              />
            </span>
          </div>
          <div className="flex items-start flex-col space-y-2 w-full font-bold">
            <span className="text-2xl">{auth?.userDetails?.name}</span>
            <span className="text-base text-gray-400">
              {auth?.userDetails?.email}{" "}
            </span>

            <span className="flex justify-center flex-wrap items-center space-x-2">
              <span className="text-base text-primary">
                <Followers
                  buttonName="Followers"
                  data={auth?.userDetails?.followers}
                />
              </span>
              <span className="text-base text-gray-700">
                {auth?.userDetails?.followers?.length}
              </span>

              <span className="text-base text-primary ">
                {" "}
                <Following
                  buttonName="Following"
                  data={auth?.userDetails?.following}
                />
              </span>
              <span className="text-base text-gray-700">
                {auth?.userDetails?.following?.length}
              </span>
            </span>
            <span className="flex justify-center flex-wrap items-start space-x-2">
              <span className="text-base text-primary ">Imagines:</span>
              <span className="text-base text-gray-700">
                {auth?.userImagines?.length}
              </span>
            </span>
          </div>
        </div>

        {auth.userid === id.id ? null : (
          <span className="cursor-pointer mt-5">
            {!auth?.userDetails?.followers?.includes(auth.userid) ? (
              <span
                className="px-5 py-2 mt-2 ml-3 bg-primary text-white font-bold text-base w-24"
                onClick={clickFollowHandler}
              >
                Follow
              </span>
            ) : (
              <span
                className="px-5 py-2 mt-2 ml-3 bg-cyan-700 text-white font-bold text-base w-28"
                onClick={clickUnfollowHandler}
              >
                Following
              </span>
            )}
          </span>
        )}

        <div className="mt-3 space-x-2 px-4">
          <span className="text-lg text-gray-700 font-bold">Bio:</span>
          <span className="text-base text-gray-700">
            {auth?.userDetails?.bio === "undefined"
              ? "Hello, I am a newbie in circlevyos"
              : auth?.userDetails?.bio}
          </span>
        </div>
      </div>
      {/*************************mobile view ***********/}
      <div className="flex justify-center flex-col lg:hidden">
        <div className="flex justify-start items-start space-x-2 w-full">
          <div className="block w-20 space-y-4">
            <span className="w-14 h-14">
              <img
                src={
                  auth?.userDetails?.photo?.secure_url
                    ? auth?.userDetails?.photo?.secure_url
                    : dp
                }
                alt="dp"
                className="w-16 h-16 object-cover rounded-full "
              />
            </span>
          </div>
          <div className="flex items-start flex-col space-y-2  font-bold">
            <span className="text-lg">{auth?.userDetails?.name}</span>
            <span className="text-sm text-gray-400">
              {auth?.userDetails?.email}{" "}
            </span>
            <span className="flex justify-center flex-wrap items-center space-x-2">
              <span className="text-sm text-primary">
                {" "}
                <Followers
                  buttonName="Followers"
                  data={auth?.userDetails?.followers}
                />
              </span>
              <span className="text-sm text-gray-700">
                {auth?.userDetails?.followers?.length}
              </span>

              <span className="text-sm text-primary ">
                {" "}
                <Following
                  buttonName="Following"
                  data={auth?.userDetails?.following}
                />
              </span>
              <span className="text-sm text-gray-700">
                {auth?.userDetails?.following?.length}
              </span>
            </span>
            <span className="flex justify-center text-sm items-start space-x-3">
              {/* <span className="flex justify-center items-start space-x-1">
                <span className=" text-primary ">Blogs:</span>
                <span className=" text-gray-700">10</span>
              </span> */}
              <span className="flex justify-center text-sm items-start space-x-1">
                <span className=" text-primary ">Imagines:</span>
                <span className=" text-gray-700">
                  {auth?.userImagines?.length}
                </span>
              </span>
            </span>
          </div>
        </div>

        {auth.userid === id.id ? null : (
          <span className="cursor-pointer mt-5">
            {!auth?.userDetails?.followers?.includes(auth.userid) ? (
              <span
                className="px-5 py-2 mt-2 ml-3 bg-primary text-white font-bold text-base w-24"
                onClick={clickFollowHandler}
              >
                Follow
              </span>
            ) : (
              <span
                className="px-5 py-2 mt-2 ml-3 bg-cyan-700 text-white font-bold text-base w-28"
                onClick={clickUnfollowHandler}
              >
                Following
              </span>
            )}
          </span>
        )}
        <div className="mt-3 space-x-2 px-4">
          <span className="text-base text-gray-700 font-bold">Bio:</span>
          <span className="text-sm text-gray-700 italic">
            {auth?.userDetails?.bio === "undefined"
              ? "Hello, I am a newbie in circlevyos"
              : auth?.userDetails?.bio}
          </span>
        </div>
      </div>
      <AlertDialogSlide
        open={open}
        handleClose={handleClose}
        title="Login to Circlevyos"
        content="To get your own access on different contents you should signin first"
        link="/login"
        show={true}
      />
    </div>
  );
};

export default React.memo(Detail);
