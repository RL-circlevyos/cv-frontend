import { Divider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { generalImagineSingleFetchAction } from "../../../../store/apps/imagines/imagine-action";

const Content = () => {
  const imagineid = useParams();
  const imagine = useSelector((state) => state.imagine);
  const dispatch = useDispatch();

  console.log(imagine.singleImagine);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(generalImagineSingleFetchAction(imagineid.id));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, imagineid.id]);

  return (
    <div className="mt-3 space-y-2 block text-tiny md:text-sl flex-initial text-gray-900 font-Mulish leading-relaxed">
      <div className="text-base md:text-3xl font-bold px-5">
        {imagine.singleImagine.title}
        {/**  {post?.generalImagines?.title} */}
      </div>
      <Divider />
      <div className="flex flex-wrap md:flex-nowrap items-start justify-center gap-2 px-4 font-medium pt-5">
        {!imagine.singleImagine.introImage ? null : (
          <span className="h-48 w-full">
            <img
              src={`https://storage.googleapis.com/niketan-dev-mode.appspot.com/${imagine.singleImagine.introImage}`}
              alt="firstpic"
              className="w-full h-full object-contain scale-x-100 scale-y-125"
            />
          </span>
        )}
        <span className="w-full text-left">{imagine.singleImagine.intro}</span>
      </div>
      <div
        className="font-medium px-4 text-justify pt-6"
        dangerouslySetInnerHTML={{ __html: imagine.singleImagine.content }}
      ></div>
      <div className="flex flex-wrap md:flex-nowrap font-medium items-start justify-center gap-2 px-4 pb-4 pt-6">
        <span className="w-full text-left">{imagine.singleImagine.outro}</span>{" "}
        {!imagine.singleImagine.outroImage ? null : (
          <span className="h-48 w-full">
            <img
              src={`https://storage.googleapis.com/niketan-dev-mode.appspot.com/${imagine.singleImagine.outroImage}`}
              alt="lastpic"
              className="w-full h-full object-contain scale-x-100 scale-y-125"
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default React.memo(Content);
