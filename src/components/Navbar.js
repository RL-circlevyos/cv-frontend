import React, { useCallback, useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/circlevyos.svg";
/***import useDarkMode from "./../hooks/useDarkMode";*/
import { Feather, Power } from "react-feather";

import { AcademicCapIcon, NewspaperIcon } from "@heroicons/react/solid";
import dp from "../assets/person.png";
import {
  BriefcaseIcon,
  CogIcon,
  HeartIcon,
  UserCircleIcon,
  PlusIcon,
  CheckCircleIcon,
  PencilIcon,
  PencilAltIcon,
  MenuAlt2Icon,
  XIcon,
} from "@heroicons/react/solid";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Example from "./Dropdown";
import AlertDialogSlide from "./Dialog";
import DelPopup from "./DelPopup";

import TextareaDialog from "./Feedback/TextareaDialog";
import { DocumentTextIcon, ShieldCheckIcon } from "@heroicons/react/outline";

import axios from "axios";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  /**const [openModal, setOpenModal] = useState(false);**/

  /***const [colorTheme, setTheme] = useDarkMode();*/

  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);
  // const handleClickCreateOpen = useCallback(() => {
  //   setIsCreateOpen(true);
  // }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  // const handleCreateClose = useCallback(() => {
  //   setIsCreateOpen(false);
  // }, []);

  const [del, setDel] = useState(false);
  // const dispatch = useDispatch();
  // const logout = useCallback(() => {
  //   setDel(true);
  // }, []);

  const handleDelClose = useCallback(() => {
    setDel(false);
  }, []);

  // const crImagine = useCallback(() => {
  //   auth.isLogged ? navigate("/create-imagine") : handleClickOpen();
  // }, [auth.isLogged, handleClickOpen, navigate]);

  /******* feedback states *****/
  const [feedback, setFeedback] = useState(false);
  const handlefeedbackOpen = useCallback(() => {
    setFeedback(true);
  }, []);
  const handlefeedbackClose = useCallback(() => {
    setFeedback(false);
    setIsOpen(false);
  }, []);
  const [textareaValue, setTextareaValue] = useState("");
  const submitTextareaValue = async (e) => {
    e.preventDefault();
    const feedbackContent = {
      feedback: textareaValue,
    };
    console.log(feedbackContent);

    await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/feedback`,
      // `http://localhost:3699/api/v1/signup`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token,
          mode: "cors",
        },
        body: JSON.stringify({
          feedbacktext: textareaValue,
        }),
      }
    )
      .then((data) => {
        toast.success("Thank you for your feedback");
      })
      .catch((err) => {
        toast.error(err);
      });

    setTextareaValue("");
    setFeedback(false);
    setIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_API_BASE_URL}/logout`);
      localStorage.removeItem("firstlogin");
      window.location.href = "/login";
    } catch (err) {
      window.location.href = "/login";
    }
  };

  /******* feedback states end*****/

  return (
    <div>
      <nav className="bg-gray-100 text-teal-600 font-Mulish">
        <div className="w-full mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              {/**********************************mobile view name start *******************************/}
              <div className="-mr-2 flex justify-center items-center gap-x-8 md:hidden">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setIsCreateOpen(false);
                  }}
                  type="button"
                  className=" inline-flex items-center justify-center p-2 rounded-md text-cyan-800 hover:text-teal-800
                  focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <MenuAlt2Icon className="w-7 h-7" />
                  ) : (
                    <XIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-center ml-2 w-full md:hidden ">
                <Link to="/" className="flex-shrink-0">
                  <img className="h-10 w-10" src={logo} alt="logo" />
                </Link>
                <Link
                  to="/"
                  className="flex-shrink-0 hidden xs:block md:hidden font-extrabold text-sl"
                >
                  Circlevyos
                </Link>
              </div>
              {/**********************************mobile view name end *******************************/}

              <Link to="/" className="flex-shrink-0 hidden md:flex">
                <img className="h-14 w-14" src={logo} alt="logo" />
              </Link>

              <div className="hidden  md:block ">
                <div className="flex items-center gap-2 justify-center">
                  <NavLink
                    to="/career-guide/qna"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-1 mt-1 text-sm bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md uppercase font-extrabold"
                        : "flex items-center gap-1 mt-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm uppercase font-extrabold"
                    }
                  >
                    <span className="flex items-center space-x-2">
                      <AcademicCapIcon className="w-6 h-6 mr-2" /> Career Guide
                    </span>
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-1 mt-1 text-sm bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md uppercase font-extrabold"
                        : "flex items-center gap-1 mt-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm uppercase font-extrabold"
                    }
                  >
                    <span className="flex items-center space-x-2">
                      <NewspaperIcon className="w-6 h-6 mr-2" /> Imagines
                    </span>
                  </NavLink>

                  {/* <NavLink
                    to="/marketplace"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-1 mt-1 text-sm bg-greyish-200 cursor-pointer transition linear px-3 py-2 rounded-md uppercase font-extrabold"
                        : "flex items-center gap-1 mt-1  hover:bg-greyish-200  cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm uppercase font-extrabold"
                    }
                  >
                    <span className="flex items-center space-x-2">
                      <BriefcaseIcon className="w-6 h-6 mr-2" /> Marketplace
                    </span>
                  </NavLink> */}
                </div>
              </div>
              <div className="hidden space-x-2 items-baseline justify-end md:flex">
                {auth.isLogged ? (
                  <Example />
                ) : (
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
                )}
              </div>
            </div>
            {/**********************************mobile view options *******************************/}
            <div className="mx-2 flex justify-center items-center gap-x-1 md:hidden">
              {/* <div
                onClick={crImagine}
                className="flex-shrink-0 bg-cyan-700 text-white py-1 px-1.5 rounded-full shadow flex font-bold text-tiny mr-2"
              >
                <PlusIcon className="h-6 w-5" />
              </div> */}

              <div className="-mr-2 flex justify-center items-center gap-x-8 md:hidden">
                <button
                  onClick={() => {
                    setIsCreateOpen(!isCreateOpen);
                    setIsOpen(false);
                  }}
                  type="button"
                  className=" inline-flex items-center justify-center p-2 rounded-md text-cyan-800 hover:text-teal-800
                  focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isCreateOpen ? (
                    <div
                      // onClick={crImagine}
                      className="flex-shrink-0 bg-cyan-700 text-white py-1 px-1.5 rounded-full shadow flex font-bold text-tiny mr-2"
                    >
                      <PlusIcon className="h-6 w-5" />
                    </div>
                  ) : (
                    <XIcon className="w-6 h-6" />
                  )}
                </button>
              </div>

              {auth.isLogged && (
                <Link
                  to={auth.isLogged && `/profile/${auth?.userDetails?._id}`}
                  className="flex-shrink-0 py-1 px-1.5 rounded-full flex"
                >
                  <img
                    src={
                      auth?.userDetails?._id &&
                      auth?.userDetails?.photo?.secure_url
                        ? auth?.userDetails?.photo?.secure_url
                        : dp
                    }
                    alt="dp"
                    className="w-7 h-7 rounded-full object-cover"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
        {/**********************************mobile view menu *******************************/}
        {/* test  */}
        <Transition
          show={isCreateOpen}
          enter="transition ease-out duration-300 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden text-teal-700 " id="mobile-menu">
              <div
                ref={ref}
                className=" px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase"
              >
                {!auth.isLogged ? (
                  <div>
                    <Link
                      to="/login"
                      className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                    >
                      <b className="sm:hidden block text-xs">
                        Login first, then you can create post{" "}
                      </b>
                    </Link>{" "}
                  </div>
                ) : (
                  <>
                    <b className="sm:hidden block text-center text-base font-bold">
                      Create Imagines
                    </b>
                    <hr />
                    <NavLink
                      to={auth.isLogged && `/create-shorts`}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center gap-1  bg-greyish-200  cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-bold"
                          : "flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      <PencilIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs">Nano</b>
                    </NavLink>{" "}
                    <hr />
                    <NavLink
                      to={auth.isLogged && `/create-imagine`}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center gap-1  bg-greyish-200  cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-bold"
                          : "flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      <PencilAltIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs">Mega</b>
                    </NavLink>{" "}
                  </>
                )}
              </div>
            </div>
          )}
        </Transition>

        {/* test  */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-300 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden text-teal-700 " id="mobile-menu">
              <div
                ref={ref}
                className=" px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1  bg-greyish-200  cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                      : "flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  <HeartIcon className="h-6 w-6 " />
                  <b className="sm:hidden  block text-xs">imagines</b>
                </NavLink>
                <hr />
                {/* <Link
                  to="/saved/general"
                  className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                >
                  <BookmarkAltIcon className="h-6 w-6" />
                  <b className="sm:hidden block text-xs">Saved</b>
                </Link>{" "}
                <hr /> */}
                <NavLink
                  to="/series"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1  bg-greyish-200  cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-bold"
                      : "flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  <Feather />
                  <b className="sm:hidden block text-xs">Series</b>
                </NavLink>{" "}
                <hr />
                <NavLink
                  to="/career-guide"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1  bg-greyish-200  cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-bold"
                      : "flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  <AcademicCapIcon className="h-6 w-6" />
                  <b className="sm:hidden block text-xs">Career Guide</b>
                </NavLink>{" "}
                <hr />
                <NavLink
                  to="/marketplace"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1  bg-greyish-200  cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-bold"
                      : "flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  <BriefcaseIcon className="h-6 w-6" />
                  <b className="sm:hidden block text-xs">marketplace</b>
                </NavLink>{" "}
                <hr />
                {!auth.isLogged ? (
                  <div>
                    <Link
                      to="/login"
                      className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                    >
                      <UserCircleIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs">Login</b>
                    </Link>{" "}
                    <hr />
                    <Link
                      to="/register"
                      className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                    >
                      <CheckCircleIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs">SignUp</b>
                    </Link>{" "}
                  </div>
                ) : (
                  <>
                    <NavLink
                      to={auth.isLogged && `/profile/${auth?.userDetails?._id}`}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center gap-1  bg-greyish-200  cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-bold"
                          : "flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      <UserCircleIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs">Profile</b>
                    </NavLink>{" "}
                    <hr />
                    <NavLink
                      to={
                        auth.isLogged && `/settings/${auth?.userDetails?._id}`
                      }
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center gap-1  bg-greyish-200  cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-bold"
                          : "flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      <CogIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs">Settings</b>
                    </NavLink>{" "}
                    <hr />
                    <NavLink
                      to={`/cv/termsandcondition`}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center gap-1  bg-greyish-200  cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-bold"
                          : "flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      <ShieldCheckIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs">
                        Terms and Conditions
                      </b>
                    </NavLink>{" "}
                    <hr />
                    <div
                      onClick={handlefeedbackOpen}
                      className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                    >
                      <DocumentTextIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs">Feedback</b>
                    </div>{" "}
                    <hr />
                    {/* <div
                      onClick={logout}
                      className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                    >
                      <Power />
                      <b className="sm:hidden block text-xs">logout</b>
                    </div> */}
                    <div
                      onClick={handleLogout}
                      className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                    >
                      <Power />
                      <b className="sm:hidden block text-xs">Logout</b>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <AlertDialogSlide
        open={open}
        handleClose={handleClose}
        title="Login to Circlevyos"
        content="To get your own access on different contents you should signin first"
        link="/login"
        show={true}
      />
      <DelPopup
        open={del}
        handleClose={handleDelClose}
        title="Logout"
        content="Do you want to logout ?"
        show={true}
        onClick={handleLogout}
      />
      <TextareaDialog
        open={feedback}
        handleClose={handlefeedbackClose}
        title="Your feedback about circlevyos"
        content={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        onClick={submitTextareaValue}
        show={true}
        color="#009E82"
      />
    </div>
  );
}

export default React.memo(Navbar);
