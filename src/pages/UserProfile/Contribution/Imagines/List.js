import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import SkeletonImagines from "../../../../components/SkeletonLoader/SkeletonImagines";
import Card from "./Card";

const List = () => {
  const auth = useSelector((state) => state.auth);
  const ui = useSelector((state) => state.ui);

  return (
    <>
      <div className="w-full">
        <div className="gap-4 flex flex-wrap items-center justify-center overflow-x-hidden px-4">
          {auth?.userImagines?.map((imagine) => {
            console.log(imagine);
            return (
              <>
                {ui.isLoading ? (
                  <SkeletonImagines />
                ) : (
                  <Card
                    introImage={imagine?.introImage}
                    outroImage={imagine?.outroImage}
                    title={imagine?.title}
                    author={imagine?.user}
                    name={imagine?.user?.name}
                    appriciates={imagine.appriciates}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default React.memo(List);
