import React from "react";
import { useSelector } from "react-redux";
import SkeletonImagines from "../../../../components/SkeletonLoader/SkeletonImagines";
import Card from "./Card";

const List = () => {
  const auth = useSelector((state) => state.auth);
  const ui = useSelector((state) => state.ui);

  return (
    <>
      <div className="w-full font-Mulish">
        <div className="gap-4 flex flex-wrap items-center justify-center overflow-x-hidden px-4 flex-row-reverse">
          {!auth?.userImagines && (
            <span className="mt-4 font-bold italic text-lg">
              You have not posted any imagine yet
            </span>
          )}

          {auth?.userImagines?.map((imagine) => {
            return (
              <>
                {ui.isLoading ? (
                  <SkeletonImagines />
                ) : (
                  <Card
                    id={imagine?._id}
                    introImage={imagine?.introImage}
                    outroImage={imagine?.outroImage}
                    title={imagine?.title}
                    category={imagine?.category}
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
