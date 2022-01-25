import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonImagines from "../../../../components/SkeletonLoader/SkeletonImagines";
import { useSocket } from "../../../../hooks/socketHook";
import { generalImagineFetchAction } from "../../../../store/apps/imagines/imagine-action";
import Card from "./Card";

const List = () => {
  const ui = useSelector((state) => state.ui);
  const imagine = useSelector((state) => state.imagine);
  const dispatch = useDispatch();
  const socket = useSocket();

  useEffect(() => {
    const timer = setTimeout(() => {
      /** if (imagine.isinitiate) {
      //   dispatch(generalImagineFetchAction());
      // }*/

      socket.on("create-imagine", (data) => {
        console.log("socket call");
        dispatch(generalImagineFetchAction());
      });
      socket.on("appriciate", (data) => {
        console.log("socket call");
        dispatch(generalImagineFetchAction());
      });
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, imagine.isinitiate, socket]);

  return (
    <>
      <div className="mb-20 lg:mb-10 w-full justify-center flex flex-col items-center overflow-x-hidden">
        {imagine?.generalImagines?.map((imagines) => {
          return (
            <>
              {ui.isLoading ? (
                <SkeletonImagines />
              ) : (
                <div className="w-full">
                  <Card
                    author={imagines?.user?._id}
                    avatar={imagines?.user?.photo?.secure_url}
                    id={imagines._id}
                    title={imagines.title}
                    introImage={imagines.introImage}
                    username={imagines?.user?.name}
                    category={imagines.category}
                    // views={imagines.views}
                    appriciates={imagines.appriciates}
                    audiovoice={imagines?.audiovoice?.secure_url}
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(List);
