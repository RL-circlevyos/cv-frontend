import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SkeletonImagines from "../../../components/SkeletonLoader/SkeletonImagines";
import Card from "./Card";
import { generalImagineFetchAction } from "../../../store/apps/imagines/imagine-action";
import { array } from "yup";

const List = () => {
  const ui = useSelector((state) => state.ui);
  const imagine = useSelector((state) => state.imagine);
  const dispatch = useDispatch();

  imagine?.generalImagines?.map((imagine) => console.log(imagine));

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     dispatch(generalImagineFetchAction());
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [dispatch]);

  return (
    <>
      <div className="gap-3 w-full px-5">
        {imagine?.generalImagines?.map((imagine) => {
          console.log(imagine);
          return (
            <>
              {ui.isLoading ? (
                <SkeletonImagines />
              ) : (
                <Link to={`/general-imagines/${imagine.id}`}>
                  <Card
                    title={imagine.title}
                    introImage={imagine.introImage}
                    username={imagine.user.name}
                    views={imagine.views}
                  />
                </Link>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(List);