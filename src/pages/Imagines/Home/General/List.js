import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonImagines from "../../../../components/SkeletonLoader/SkeletonImagines";
import { useSocket } from "../../../../hooks/socketHook";
import { generalImagineFetchAction } from "../../../../store/apps/imagines/imagine-action";
import { imagineSliceAction } from "../../../../store/apps/imagines/imagine-slice";

import Card from "./Card";

const List = () => {
  const ui = useSelector((state) => state.ui);
  const imagine = useSelector((state) => state.imagine);
  const dispatch = useDispatch();
  const socket = useSocket();
  const [isInitial, setisInitial] = useState(true);
  const skipCount = useSelector((state) => state.imagine.skipCount);
  const auth = useSelector((state) => state.auth);

  function seeMore() {
    dispatch(imagineSliceAction.skipCountNext());
  }

  function previousImagines() {
    dispatch(imagineSliceAction.skipCountPrev());
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setisInitial(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      /** if (imagine.isinitiate) {
      //   dispatch(generalImagineFetchAction());
      // }*/

      dispatch(generalImagineFetchAction(skipCount, auth.token));
      socket.on("create-imagine", (data) => {
        dispatch(generalImagineFetchAction(skipCount, auth.token));
      });
      socket.on("appriciate", (data) => {
        dispatch(generalImagineFetchAction(skipCount, auth.token));
      });
      socket.on("delete-imagine", (data) => {
        dispatch(generalImagineFetchAction(skipCount, auth.token));
      });
      setisInitial(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, imagine.isinitiate, skipCount, socket, auth.token]);

  return (
    <>
      <div className="mb-20 lg:mb-10 w-full justify-center flex flex-col items-center overflow-x-hidden">
        {skipCount >= 1 && (
          <button
            className="text-cyan-700 font-semibold text-lg"
            onClick={previousImagines}
          >
            Previous
          </button>
        )}
        {imagine?.generalImagines?.map((imagines) => {
          return (
            <>
              {isInitial ? (
                <SkeletonImagines />
              ) : (
                <div className="w-full">
                  <Card
                    width="w-full"
                    author={imagines?.user?._id}
                    avatar={imagines?.user?.photo?.secure_url}
                    id={imagines._id}
                    key={imagines._id}
                    title={imagines.title}
                    maincontent={imagines?.main}
                    introImage={imagines.introImage}
                    username={imagines?.user?.name}
                    category={imagines.category}
                    date={imagines.createdAt}
                    comments={imagines.comments}
                    views={imagines.views}
                    appriciates={imagines.appriciates}
                    audiovoice={imagines?.audiovoice?.secure_url}
                    imaginetype={imagines?.imaginetype}
                  />
                </div>
              )}
            </>
          );
        })}

        {imagine?.generalImagines?.length !== 0 && (
          <button
            className="text-cyan-700 font-semibold text-lg"
            onClick={seeMore}
          >
            See more
          </button>
        )}
      </div>
    </>
  );
};

export default React.memo(List);
