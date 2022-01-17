import React from "react";
import { useSelector } from "react-redux";
import CardStoryIm from "./CardStoryIm";
import SkeletonImagines from "../../../../../components/SkeletonLoader/SkeletonImagines";
const Recommendations = () => {
  const imagine = useSelector((state) => state.imagine);
  const ui = useSelector((state) => state.ui);

  return (
    <>
      <div className="space-y-5 flex flex-col justify-center items-center w-full font-Mulish px-4 py-2">
        {" "}
        {imagine?.generalImagines?.map((imagine) => {
          return (
            <>
              {ui.isLoading ? (
                <SkeletonImagines />
              ) : (
                <CardStoryIm
                  author={imagine?.user?._id}
                  avatar={imagine?.user?.photo?.secure_url}
                  id={imagine._id}
                  title={imagine.title}
                  introImage={imagine.introImage}
                  username={imagine?.user?.name}
                  // views={imagine.views}
                  audiovoice={imagine?.audiovoice}
                  appriciates={imagine.appriciates}
                />
              )}
            </>
          );
        })}
      </div>{" "}
    </>
  );
};

export default Recommendations;
