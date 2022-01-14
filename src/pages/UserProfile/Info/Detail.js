import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  userDetailsAction,
  userImaginesAction,
} from "../../../store/apps/auth/auth-action";
import AlertDialogSlide from "./../../../components/Dialog";

const Detail = () => {
  const auth = useSelector((state) => state.auth);
  const user = auth.userid;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(userDetailsAction(id.id));
      dispatch(userImaginesAction(id.id));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, id]);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const [follow, setFollow] = useState(false);
  const clickFollowHandler = useCallback(() => {
    user ? setFollow(!follow) : handleClickOpen();
  }, [follow, handleClickOpen, user]);
  console.log(auth?.userDetails);

  return (
    <div className="w-full font-Mulish">
      <div className="lg:flex flex-col hidden">
        <div className="flex justify-start items-start space-x-4 w-full">
          <div className="block w-32 space-y-4">
            <span className="w-24 h-24">
              <img
                src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="dp"
                className="w-28 h-28 object-cover rounded-full "
              />
            </span>
          </div>
          <div className="flex items-start flex-col space-y-2 w-full font-bold">
            <span className="text-2xl">{auth?.userDetails.name}</span>

            <span className="flex justify-center flex-wrap items-start space-x-2">
              <span className="text-base text-primary">Followers:</span>
              <span className="text-base text-gray-700">
                {auth?.userDetails?.followers?.length}
              </span>

              <span className="text-base text-primary ">Following:</span>
              <span className="text-base text-gray-700">
                {auth?.userDetails?.following?.length}
              </span>
            </span>
            <span className="flex justify-center flex-wrap items-start space-x-2">
              <span className="text-base text-primary ">Imagines:</span>
              <span className="text-base text-gray-700">1000</span>
            </span>
          </div>
        </div>

        <span className="cursor-pointer mt-5" onClick={clickFollowHandler}>
          {follow ? (
            <span className="px-5 py-2 mt-2 ml-3 bg-primary text-white font-bold text-base w-24">
              Follow
            </span>
          ) : (
            <span className="px-5 py-2 mt-2 ml-3 bg-cyan-700 text-white font-bold text-base w-28">
              Following
            </span>
          )}
        </span>

        <div className="mt-3 space-x-2 px-4">
          <span className="text-lg text-gray-700 font-bold">Bio:</span>
          <span className="text-base text-gray-700">
            The Auto-Save feature will make sure you won't lose any change while
            editing, even if you leave the site and come back later.
          </span>
        </div>
      </div>
      {/*************************mobile view ***********/}
      <div className="flex justify-center flex-col lg:hidden">
        <div className="flex justify-start items-start space-x-2 w-full">
          <div className="block w-20 space-y-4">
            <span className="w-14 h-14">
              <img
                src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="dp"
                className="w-16 h-16 object-cover rounded-full "
              />
            </span>
          </div>
          <div className="flex items-start flex-col space-y-2  font-bold">
            <span className="text-lg">{auth?.userDetails?.name}</span>
            <span className="flex justify-center items-start text-sm space-x-2">
              <span className=" text-primary">Followers:</span>
              <span className=" text-gray-700">
                {auth?.userDetails?.followers?.length}
              </span>
            </span>
            <span className="flex justify-center text-sm items-start space-x-3">
              {/* <span className="flex justify-center items-start space-x-1">
                <span className=" text-primary ">Blogs:</span>
                <span className=" text-gray-700">10</span>
              </span> */}
              <span className="flex justify-center text-sm items-start space-x-1">
                <span className=" text-primary ">Imagines:</span>
                <span className=" text-gray-700">1000</span>
              </span>
            </span>
          </div>
        </div>

        <span className="cursor-pointer mt-5" onClick={clickFollowHandler}>
          {follow ? (
            <span className="px-5 py-2 mt-2 ml-3 bg-primary text-white font-bold text-base w-24">
              Follow
            </span>
          ) : (
            <span className="px-5 py-2 mt-2 ml-3 bg-cyan-700 text-white font-bold text-base w-28">
              Following
            </span>
          )}
        </span>
        <div className="mt-3 space-x-2 px-4">
          <span className="text-base text-gray-700 font-bold">Bio:</span>
          <span className="text-sm text-gray-700">
            The Auto-Save feature will make sure you won't lose any change while
            editing, even if you leave the site and come back later.
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
