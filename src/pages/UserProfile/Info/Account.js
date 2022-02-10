import React, { useEffect } from "react";
import dp from "../../../assets/person.png";
import { useDispatch, useSelector } from "react-redux";
import {
  accountDetailsAction,
  accountImaginesAction,
} from "../../../store/apps/auth/auth-action";
import { Link, useParams } from "react-router-dom";
import SkeletonImagines from "../../../components/SkeletonLoader/SkeletonImagines";
import Card from "../../Imagines/Home/General/Card";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";
import logo from "../../../assets/circlevyos.svg";
import { authAction } from "../../../store/apps/auth/auth-slice";

function Account() {
  const accountDetails = useSelector((state) => state.auth.accountDetails);
  const accountImagines = useSelector((state) => state.auth.accountImagines);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(accountDetailsAction(id.id));
    dispatch(accountImaginesAction(id.id));
    dispatch(
      authAction.getAccountId({
        accountId: id.id,
      })
    );
  }, [dispatch, id]);
  console.log(accountImagines);

  return (
    <div className="w-full">
      {/* <Intro /> */}
      <nav className="bg-gray-100 text-teal-600 font-Mulish">
        <div className="w-full mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              {/**********************************mobile view name start *******************************/}
              <div className="-mr-2 flex justify-center items-center gap-x-8 md:hidden"></div>
              <div className="flex items-center justify-center ml-2 w-full md:hidden ">
                <img className="h-10 w-10 " src={logo} alt="logo" />
                <span className="text-semibold">Circlevyos</span>
              </div>
              {/**********************************mobile view name end *******************************/}

              <div className="flex items-center justify-center ml-2 w-full hidden md:flex ">
                <img className="h-10 w-10" src={logo} alt="logo" />
                <span className="text-lg font-semibold ">Circlevyos</span>
              </div>
              {/* <div className="hidden space-x-2 items-baseline justify-end md:flex">
                <>
                  <Link
                    to="/login"
                    className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                  >
                    <b className="block text-sm uppercase bg-primary px-2 py-1 rounded text-white">
                      Login
                    </b>
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                  >
                    <b className="block text-sm uppercase bg-cyan-700 px-2 py-1 rounded text-white">
                      SignUp
                    </b>
                  </Link>
                </>
              </div> */}
            </div>
            {/**********************************mobile view options *******************************/}
          </div>
        </div>
        {/**********************************mobile view menu *******************************/}
      </nav>
      <div className="w-full font-Mulish">
        <div className="lg:flex flex-col hidden mt-9 max-w-7xl px-20">
          <div className="flex justify-start items-start space-x-4 w-full">
            <div className="block w-32 space-y-4">
              <span className="w-24 h-24 mt-4">
                <img
                  src={
                    accountDetails?.photo?.secure_url
                      ? accountDetails?.photo?.secure_url
                      : dp
                  }
                  alt="dp"
                  className="w-28 h-28 object-cover rounded-full "
                />
              </span>
            </div>
            <div className="flex items-start flex-col space-y-2 w-full font-bold">
              <span className="text-2xl">{accountDetails?.name}</span>
              <span className="text-base text-gray-400">
                {accountDetails?.email}{" "}
              </span>

              <span className="flex justify-center flex-wrap items-center space-x-4">
                <span className="flex justify-center flex-wrap items-center space-x-1 shadow py-1 px-1">
                  <span className="text-base text-primary "> Followers</span>
                  <span className="text-base text-gray-700">
                    {accountDetails?.followers?.length}
                  </span>
                </span>
                <span className="flex justify-center flex-wrap items-center space-x-1 shadow py-1 px-1">
                  <span className="text-base text-primary "> Following</span>
                  <span className="text-base text-gray-700">
                    {accountDetails?.following?.length}
                  </span>
                </span>
              </span>
              <span className="flex justify-center flex-wrap items-start space-x-2">
                <span className="text-base text-primary ">Imagines:</span>
                <span className="text-base text-gray-700">
                  {accountImagines?.length}
                </span>
              </span>
            </div>
          </div>

          <div className="mt-3 space-x-2 px-4">
            <span className="text-lg text-gray-700 font-bold">Bio:</span>
            <span className="text-base text-gray-700">
              {accountDetails?.bio === "undefined"
                ? "Hello, nice to meet you"
                : accountDetails?.bio}
            </span>
          </div>
        </div>
        {/*************************mobile view ***********/}
        <div className="flex justify-center flex-col lg:hidden">
          <div className="flex justify-start items-start space-x-2 w-full">
            <div className="flex justify-center  w-20 space-y-4">
              <span className="xsm:w-16 xsm:h-16 xs:w-12 xs:h-12 w-8 h-8 mt-6 ">
                <img
                  src={
                    accountDetails?.photo?.secure_url
                      ? accountDetails?.photo?.secure_url
                      : dp
                  }
                  alt="dp"
                  className="xsm:w-16 xsm:h-16 xs:w-12 xs:h-12 w-8 h-8 object-cover rounded-full "
                />
              </span>
            </div>
            <div className="flex items-start flex-col space-y-2  font-bold">
              <span className="text-lg">{accountDetails?.name}</span>
              <span className="text-sm text-gray-400">
                {accountDetails?.email}{" "}
              </span>
              <span className="flex justify-center flex-wrap items-center space-x-2">
                <span className="flex justify-center flex-wrap items-center space-x-1 shadow py-1 px-1">
                  <span className="text-sm text-primary"> Followers</span>
                  <span className="text-sm text-gray-700 pr-1">
                    {accountDetails?.followers?.length}
                  </span>
                </span>
                <span className="flex justify-center flex-wrap items-center space-x-1 shadow py-1 px-1">
                  <span className="text-sm text-primary ">Following</span>
                  <span className="text-sm text-gray-700">
                    {accountDetails?.following?.length}
                  </span>
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
                    {accountImagines?.length}
                  </span>
                </span>
              </span>
            </div>
          </div>

          <div className="mt-3 space-x-2 px-4">
            <span className="text-base text-gray-700 font-bold">Bio:</span>
            <span className="text-sm text-gray-700 italic">
              {accountDetails?.bio === undefined
                ? "Hello, I am a newbie in circlevyos"
                : accountDetails?.bio}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-4 w-full max-w-7xl">
          <div className="font-Mulish flex flex-wrap items-start justify-between space-x-6 w-full mt-6 pb-8 overflow-x-hidden">
            <div className="w-full font-Mulish">
              <div className="gap-4 flex flex-wrap items-center justify-center overflow-x-hidden px-4 w-full">
                {accountImagines.length === 0 && (
                  <span className="mt-4 font-bold flex flex-col items-center justify-center italic text-lg w-full space-y-5 px-4">
                    <span className="">
                      You have not posted any imagine yet
                    </span>
                    <span className="w-full h-96">
                      {/* <img src={profile} className="w-full h-80" alt="" /> */}
                    </span>
                  </span>
                )}

                {accountImagines?.map((imagines) => {
                  console.log(imagines, "imagines user");
                  return (
                    <>
                      {ui.isLoading ? (
                        <SkeletonImagines />
                      ) : (
                        <Card
                          width="w-full md:w-96"
                          author={imagines?.user?._id}
                          avatar={imagines?.user?.photo?.secure_url}
                          id={imagines._id}
                          title={imagines.title}
                          introImage={imagines.introImage}
                          username={imagines?.user?.name}
                          category={imagines.category}
                          date={imagines.createdAt}
                          comments={imagines.comments}
                          views={imagines.views}
                          appriciates={imagines.appriciates}
                          audiovoice={imagines?.audiovoice?.secure_url}
                        />
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer autoClose={2000} /> */}
    </div>
  );
}

export default React.memo(Account);
