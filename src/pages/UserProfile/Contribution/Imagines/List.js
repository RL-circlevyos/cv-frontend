import React from "react";
import { useSelector } from "react-redux";
import SkeletonImagines from "../../../../components/SkeletonLoader/SkeletonImagines";
import Card from "../../../Imagines/Home/General/Card";

const List = () => {
  const auth = useSelector((state) => state.auth);
  const ui = useSelector((state) => state.ui);

  return (
    <>
      <div className="w-full font-Mulish">

        <div className="gap-4 flex flex-wrap items-center justify-center overflow-x-hidden px-4 flex-row-reverse">
          {auth?.userImagines.length === 0 && (

            <span className="mt-4 font-bold italic text-lg">
              You have not posted any imagine yet
            </span>
          )}

          {auth?.userImagines?.map((imagines) => {
            return (
              <>
                {ui.isLoading ? (
                  <SkeletonImagines />
                ) : (
                  <Card
                    author={imagines?.user?._id}
                    avatar={imagines?.user?.photo?.secure_url}
                    id={imagines._id}
                    title={imagines.title}
                    introImage={imagines.introImage}
                    username={imagines?.user?.name}
                    category={imagines.category}
                    date={imagines.createdAt}
                    // views={imagines.views}
                    appriciates={imagines.appriciates}
                    audiovoice={imagines?.audiovoice?.secure_url}
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
