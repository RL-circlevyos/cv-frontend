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
        {imagine?.generalImagines?.map((imagines) => {
          return (
            <>
              {ui.isLoading ? (
                <SkeletonImagines />
              ) : (
                <CardStoryIm
                  author={imagines?.user?._id}
                  avatar={imagines?.user?.photo?.secure_url}
                  id={imagines._id}
                  title={imagines.title}
                  introImage={imagines.introImage}
                  username={imagines?.user?.name}
                  // views={imagines.views}
                  audiovoice={imagines?.audiovoice}
                  appriciates={imagines.appriciates}
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
