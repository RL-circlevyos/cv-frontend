import React from "react";
import { useSelector } from "react-redux";
import SkeletonImagines from "../../../../components/SkeletonLoader/SkeletonImagines";
import Card from "./Card";

const List = () => {
  const ui = useSelector((state) => state.ui);
  const imagine = useSelector((state) => state.imagine);

  imagine?.generalImagines?.map((i) => console.log(i));

  return (
    <>
      <div className="mb-20 lg:mb-10 w-full overflow-x-hidden">
        {imagine?.generalImagines?.map((i) => {
          console.log(i);
          return (
            <>
              {ui.isLoading ? (
                <SkeletonImagines />
              ) : (
                <div className="w-full pr-4">
                  <Card
                    id={i.id}
                    title={i.title}
                    introImage={i.introImage}
                    username={i.user.name}
                    views={i.views}
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
