import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonImagines from "../../../../components/SkeletonLoader/SkeletonImagines";
import { generalImagineFetchAction } from "../../../../store/apps/imagines/imagine-action";
import Card from "./Card";

const List = () => {
  const auth = useSelector((state) => state.auth);
  const ui = useSelector((state) => state.ui);
  const imagine = useSelector((state) => state.imagine);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imagine.isinitiate) {
        dispatch(generalImagineFetchAction());
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, imagine.isinitiate]);

  return (
    <>
      <div className="mb-20 lg:mb-10 w-full overflow-x-hidden">
        {imagine?.generalImagines?.map((imagine) => {
          console.log(imagine);

          return (
            <>
              {ui.isLoading ? (
                <SkeletonImagines />
              ) : (
                <div className="w-full pr-4">
                  <Card
                    author={imagine?.user?._id}
                    avatar={imagine?.user?.photo?.secure_url}
                    id={imagine._id}
                    title={imagine.title}
                    introImage={imagine.introImage}
                    username={imagine?.user?.name}
                    category={imagine.category}
                    // views={imagine.views}
                    appriciates={imagine.appriciates}
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
