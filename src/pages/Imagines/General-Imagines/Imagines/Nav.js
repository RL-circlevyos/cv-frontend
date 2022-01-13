import {
  ArchiveIcon,
  ArrowLeftIcon,
  PlusIcon,
  SaveIcon,
} from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AlertDialogSlide from "../../../../components/Dialog";

const Nav = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const user = auth.userid;
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const createImagines = useCallback(() => {
    user ? navigate("/create-imagine") : handleClickOpen();
  }, [handleClickOpen, user, navigate]);

  return (
    <div className=" w-full flex justify-center items-start font-Mulish text-sm text-gray-800 pb-1">
      <div className="lg:flex max-w-screen-2xl items-center space-x-2 hidden w-full justify-between px-3 py-2">
        <div>
          {" "}
          <Link to="/">
            <ArrowLeftIcon className="h-5 w-5 mr-4" />{" "}
          </Link>
        </div>

        <div className="w-6/12 flex items-center">
          <div className="flex items-center space-x-5 w-full">
            <span className="flex text-base uppercase font-semibold justify-center items-center w-full py-1.5 px-3 rounded-xl transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100">
              General Imagines
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-5 ">
          <Link
            to="/"
            className="flex font-bold items-center py-1.5 px-2  rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            Saved Imagines
          </Link>
          <div className="flex items-center space-x-5 ">
            <span
              onClick={createImagines}
              className="flex font-bold items-center cursor-pointer
               py-1.5 px-2.5 pl-2 rounded-3xl transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 
               hover:bg-teal-800 hover:text-gray-100"
            >
              {" "}
              <PlusIcon className="h-7 w-7" />
              Imagines
            </span>
          </div>
        </div>
      </div>
      {/*****************mobile view *******************/}
      <div className="block lg:hidden">
        <div className="flex items-center justify-center space-x-3 mt-5 lg:hidden">
          <Link to="/">
            <ArrowLeftIcon className="h-5 w-5 mr-4 text-gray-800" />{" "}
          </Link>

          <Link
            to="/"
            className="flex font-bold items-center py-1.5 px-2  rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            <SaveIcon className="h-5 w-5 cursor-pointer text-primary" />
          </Link>
          <span
            onClick={createImagines}
            className="flex text-sm items-center py-1 px-2 cursor-pointer rounded-md transition duration-200 bg-teal-800 text-gray-100
             focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            Create
            <PlusIcon className="h-6 w-7" />
          </span>
        </div>{" "}
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

export default React.memo(Nav);
