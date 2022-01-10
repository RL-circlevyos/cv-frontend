import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/circlevyos.svg";
/***import useDarkMode from "./../hooks/useDarkMode";*/
import { Power } from "react-feather";
import {
  //BellIcon,
  BriefcaseIcon,
  ChevronDoubleUpIcon,
  // CogIcon,
  // CurrencyRupeeIcon,
  HeartIcon,
  // HomeIcon,
  // MoonIcon,
  // PencilAltIcon,
  // PresentationChartLineIcon,
  // SunIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);
  const user = auth.userid;
  /***const [colorTheme, setTheme] = useDarkMode();*/

  return (
    <div>
      <nav className="bg-gray-100 text-teal-600 font-Mulish">
        <div className="w-full mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <img className="h-14 w-14" src={logo} alt="logo" />
              </div>
              <div className="hidden  md:block ">
                <div className="flex items-center gap-2 justify-center">
                  {/* <div className="flex items-center gap-1 mt-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium">
                    <HomeIcon className="h-6 w-6" />
                    <b className="sm:block hidden text-sm">clubs</b>
                  </div> */}
                  {/* <Link
                    to="/"
                    className="flex items-center gap-1 mt-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {" "}
                    <PencilAltIcon className="h-6 w-6" />
                    <b className="sm:block hidden text-sm uppercase font-extrabold">
                      blogs
                    </b>
                  </Link> */}
                  <Link
                    to="/"
                    className="flex items-center gap-1 mt-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {" "}
                    <HeartIcon className="h-6 w-6" />
                    <b className="sm:block hidden text-sm uppercase font-extrabold">
                      imagines
                    </b>
                  </Link>
                  <Link
                    to="/trendings"
                    className="hidden md:flex lg:hidden items-center gap-1 mt-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <BriefcaseIcon className="h-6 w-6" />
                    <b className="sm:block hidden text-sm uppercase font-extrabold">
                      trendings
                    </b>
                  </Link>
                  <Link
                    to="/marketplace"
                    className="flex items-center gap-1 mt-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <BriefcaseIcon className="h-6 w-6" />
                    <b className="sm:block hidden text-sm uppercase font-extrabold">
                      marketplace
                    </b>
                  </Link>
                </div>
              </div>
              <div className="hidden space-x-2 items-baseline justify-end md:flex">
                {user && (
                  <div className=" flex items-center justify-center">
                    {/* <div className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium">
                    <BellIcon className="h-6 w-6" />
                    <b className="sm:hidden block text-xs">notifications</b>
                  </div>{" "} */}
                    <Link
                      to="/contribution/profile-imagines"
                      className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                    >
                      <UserCircleIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs">user</b>
                    </Link>{" "}
                    <div className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium">
                      <Power />
                      <b className="sm:hidden block text-xs">logout</b>
                    </div>
                    {/*  <div class="dropdown inline-block relative hover:bg-greyish-200 mt-1">
                    <button class=" text-primary py-2 px-4 rounded inline-flex items-center">
                      <UserCircleIcon className="h-6 w-6" />
                    </button>
                   <ul class="dropdown-menu absolute hidden text-gray-700 pr-6 border bg-white border-gray-500">
                      <li class="w-full bg-white hover:bg-gray-300 ">
                        <div
                          className="flex items-center gap-1 rounded-b text-primary py-2 px-4 
                           whitespace-no-wrap cursor-pointer transition duration-500 linear text-sm font-medium"
                        >
                          <b className="sm:block hidden text-sm">profile</b>
                        </div>
                      </li>
                      <li class="w-full bg-white hover:bg-gray-300 ">
                        <div
                          className="flex items-center gap-1 text-primary py-2 px-4 
                           whitespace-no-wrap cursor-pointer transition duration-500 linear text-sm font-medium"
                        >
                          <CogIcon className="h-7 w-7 text-primary" />
                          <b className="sm:block hidden text-sm">settings</b>
                        </div>
                      </li>
                      <li class="w-full bg-white hover:bg-gray-300 ">
                        <div
                          className="flex items-center gap-1 text-primary py-2 px-4 
                           whitespace-no-wrap cursor-pointer transition duration-500 linear rounded-md text-sm font-medium"
                          onClick={() => setTheme(colorTheme)}
                        >
                          {colorTheme === "light" ? (
                            <span className="flex items-center gap-1">
                              <MoonIcon className="h-5 w-5" />
                              <b className="sm:block hidden text-sm ">dark</b>
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <SunIcon className="h-5 w-5" />
                              <b className="sm:block hidden text-sm ">light</b>
                            </span>
                          )}
                        </div>
                      </li>
                      <li class="w-full bg-white hover:bg-gray-300 ">
                        <div
                          className="flex items-center gap-1 rounded-b text-primary py-2 px-4 
                           whitespace-no-wrap cursor-pointer transition duration-500 linear text-sm font-medium"
                        >
                          <b className="sm:block hidden text-sm">logout</b>
                        </div>
                      </li>
                    </ul>
                  </div> */}
                  </div>
                )}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

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
                {/* <Link
                  to="/"
                  className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                >
                  <PencilAltIcon className="h-6 w-6" />
                  <b className="sm:hidden  block text-xs">BLOGS</b>
                </Link>{" "}
                <hr /> */}
                <Link
                  to="/imagines"
                  className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-sm font-medium"
                >
                  <HeartIcon className="h-6 w-6 " />
                  <b className="sm:hidden  block text-xs">imagines</b>
                </Link>
                {/* <div className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium">
                  <CurrencyRupeeIcon className="h-6 w-6" />
                  <b className="sm:hidden block text-xs">SOLVE & EARN</b>
                </div>{" "} */}
                <hr />
                <Link
                  to="/marketplace"
                  className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                >
                  <BriefcaseIcon className="h-6 w-6" />
                  <b className="sm:hidden block text-xs">marketplace</b>
                </Link>{" "}
                <hr />
                {/* <div
                  className="flex items-center gap-1 mt-1 hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                  onClick={() => setTheme(colorTheme)}
                >
                  {colorTheme === "light" ? (
                    <span className="flex items-center gap-1">
                      <MoonIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs ">dark</b>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <SunIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs ">light</b>
                    </span>
                  )}
                </div>{" "}
                <hr /> 
                <div className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium">
                  <BellIcon className="h-6 w-6" />
                  <b className="sm:hidden block text-xs">notifications</b>
                </div>{" "}
                <hr />*/}
                <Link
                  to="/trendings"
                  className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                >
                  <ChevronDoubleUpIcon className="h-6 w-6" />
                  <b className="sm:hidden block text-xs">trendings</b>
                </Link>{" "}
                {user && (
                  <>
                    {" "}
                    <hr />
                    <Link
                      to="/contribution/profile-imagines"
                      className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
                    >
                      <UserCircleIcon className="h-6 w-6" />
                      <b className="sm:hidden block text-xs">user</b>
                    </Link>{" "}
                    <hr />
                    <div className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium">
                      <Power />
                      <b className="sm:hidden block text-xs">logout</b>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default React.memo(Navbar);
