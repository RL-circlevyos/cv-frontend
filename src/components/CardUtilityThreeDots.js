import { DotsHorizontalIcon, XIcon } from "@heroicons/react/solid";
import { formControlLabelClasses } from "@mui/material";
import React, { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteImagineAction } from "../store/apps/imagines/imagine-action";
import DelPopup from "./DelPopup";
import AlertDialogSlide from "./Dialog";

function CardUtilityThreeDots({
  author,
  imagineId,
  singlePage = formControlLabelClasses,
  imagineNano,
}) {
  const auth = useSelector((state) => state.auth);

  //   dialogbox open
  const [open, setOpen] = useState(false);

  //   dialogbox
  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const [edit, setEdit] = useState(false);
  const clickEdit = useCallback(() => {
    auth.userDetails._id ? setEdit(true) : handleClickOpen();
  }, [auth.userDetails._id, handleClickOpen]);

  const handleDelClose = useCallback(() => {
    setDel(false);
  }, []);

  const editClose = useCallback(() => {
    setEdit(false);
  }, []);

  const [del, setDel] = useState(false);

  const handleDelOpen = useCallback(() => {
    setDel(true);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imagineDeleteHandler = useCallback(() => {
    dispatch(deleteImagineAction(imagineId, auth.token));
    handleDelClose();
    editClose();
    singlePage && navigate("/");
  }, [
    dispatch,
    imagineId,
    handleDelClose,
    editClose,
    singlePage,
    auth.token,
    navigate,
  ]);

  return (
    <div>
      <span className="flex items-center justify-end pr-4 space-x-1">
        {!edit && author === auth.userDetails._id && (
          <>
            <span>
              <DotsHorizontalIcon
                className="h-5 w-5 cursor-pointer"
                onClick={clickEdit}
              />
            </span>
            {/* )} */}
          </>
        )}
        {edit && (
          <div className="relative inline-block text-left font-Mulish">
            <div
              className="origin-center absolute z-50 font-Mulish right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black 
                   ring-opacity-5 divide-y divide-gray-100 focus:outline-none text-base"
            >
              <span className="flex justify-end items-center mx-1 my-1">
                <span onClick={editClose} className="cursor-pointer font-bold">
                  <XIcon className="h-5 w-5 text-pink-500" />
                </span>
              </span>
              <div className="py-1">
                <div>
                  <Link
                    to={
                      !imagineNano
                        ? `/${imagineId}/update`
                        : `/${imagineId}/update`
                    }
                    className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
                  >
                    Edit
                  </Link>
                </div>
              </div>
              <div className="py-1">
                <div
                  className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
                  onClick={handleDelOpen}
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        )}
      </span>
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
        title="Delete"
        content="Are you sure you want to delete the post"
        onClick={imagineDeleteHandler}
        show={true}
      />
    </div>
  );
}

export default memo(CardUtilityThreeDots);
