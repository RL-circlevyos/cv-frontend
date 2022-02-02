import {
  AnnotationIcon,
  //EyeIcon,
  LightBulbIcon,
  ShareIcon,
} from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AlertDialogSlide from "../../../../components/Dialog";
import { useSocket } from "../../../../hooks/socketHook";
import { appriciateAction } from "../../../../store/apps/imagines/imagine-action";
import ShareDialog from "./ShareDialog";
import ViewLike from "./ViewLike";

const Footer = ({ openCommentBox }) => {
  const auth = useSelector((state) => state.auth);
  const user = auth.userid;
  const singleImagine = useSelector((state) => state.imagine.singleImagine);
  const viewAppreciate = useSelector((state) => state.imagine);
  const appreciateIds = useSelector((state) => state.imagine.appreciateIds);
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const [openShare, setOpenShare] = useState(false);

  const handleClickOpenShare = useCallback(() => {
    setOpenShare(true);
  }, []);

  const handleCloseShare = useCallback(() => {
    setOpenShare(false);
  }, []);

  const dispatch = useDispatch();
  const id = useParams();

  const post = useCallback(() => {
    dispatch(appriciateAction(id.id));
  }, [dispatch, id.id]);

  const clickLikeHandler = useCallback(() => {
    user ? post() : handleClickOpen();
  }, [user, handleClickOpen, post]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap space-y-5 lg:space-y-0 lg:flex-nowrap items-start justify-evenly space-x-3 text-gray-900 font-bold font-Mulish">
        <div className="flex w-full items-start justify-evenly space-x-3 text-gray-900 font-bold">
          <span className="lg:flex justify-center items-center text-primary hidden ">
            {user && (
              <span>
                <ViewLike viewLikes={viewAppreciate?.appriciateList} />
              </span>
            )}
          </span>
          <span className="flex justify-center items-center flex-col text-xxs lg:text-tiny text-gray-300">
            <span className="flex items-center space-x-1 text-xs">
              <span className="cursor-pointer" onClick={clickLikeHandler}>
                {appreciateIds?.includes(auth.userid) ? (
                  <LightBulbIcon className="h-6 w-6 md:h-7 md:w-7 text-yellow-400" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                )}
              </span>
              <i className="text-xs lg:text-sm text-primary">
                {appreciateIds?.length}
              </i>
            </span>
            APPRECIATE
          </span>
          <span className="flex justify-center items-center flex-col text-xxs lg:text-tiny text-gray-300 mt-1">
            <span className="lg:pt-1" onClick={handleClickOpenShare}>
              <ShareIcon className="h-6 w-6 cursor-pointer text-gray-600 pb-1 ml-2" />
              SHARE
            </span>
          </span>

          <span className="flex justify-center items-center flex-col text-xxs lg:text-tiny text-gray-300 mt-1">
            <span className="flex items-center space-x-1 text-xs ">
              <span className="" onClick={openCommentBox}>
                <AnnotationIcon className="h-6 w-6 text-gray-500" />
              </span>
              <span className="text-xs lg:text-sm italic ml-1 text-primary">
                <i>{singleImagine.singleImagine?.comments.length}</i>
              </span>
            </span>
            COMMENTS
          </span>
        </div>
        <AlertDialogSlide
          open={open}
          handleClose={handleClose}
          title="Login to Circlevyos"
          content="To get your own access on different contents you should signin first"
          link="/login"
          show={true}
        />
        <ShareDialog
          open={openShare}
          handleClose={handleCloseShare}
          title="Share this link"
          content={`https://61f9942b41f3bd0007d1fcf1--focused-almeida-cad4a1.netlify.app/${singleImagine?.singleImagine?._id}`}
        />
      </div>{" "}
      <span className="flex justify-center items-center text-primary lg:hidden">
        {user && (
          <span>
            <ViewLike viewLikes={viewAppreciate?.appriciateList} />
          </span>
        )}
      </span>
    </div>
  );
};

export default React.memo(Footer);
