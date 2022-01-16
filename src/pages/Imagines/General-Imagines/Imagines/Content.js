import { Divider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { generalImagineSingleFetchAction } from "../../../../store/apps/imagines/imagine-action";
import song from "../../../../assets/Vsong.mp3";
import Audio from "../../../Audio/Audio";

const Content = () => {
  const imagineid = useParams();
  const imagine = useSelector((state) => state.imagine);
  const dispatch = useDispatch();

  const checkIntroImg = imagine?.singleImagine?.singleImagine?.intro
    ? "h-48"
    : "h-96 flex justify-center items-center";

  const checkIntro = imagine?.singleImagine?.singleImagine?.intro
    ? "w-full"
    : "w-0";

  const checkOutroImg = imagine?.singleImagine?.singleImagine?.outro
    ? "h-48"
    : "h-96 flex justify-center items-center";

  const checkOutro = imagine?.singleImagine?.singleImagine?.outro
    ? "w-full"
    : "w-0";
  return (
    <div className="mt-3 space-y-2 block text-base md:text-sl flex-initial text-gray-900 font-Mulish leading-relaxed">
      <div className="text-lg md:text-3xl font-bold px-5">
        <label className="text-tiny md:text-base bg-primary rounded-md text-white py-1 px-2 mr-4">
          {" "}
          {imagine?.singleImagine?.singleImagine?.category}
        </label>
        {imagine?.singleImagine?.singleImagine?.title}

        {/**  {post?.generalImagines?.title} */}
      </div>
      <Divider />
      <div className="w-full lg:hidden block">
        <Audio audiosrc={song} />
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-start justify-center gap-2 px-4 font-medium pt-5">
        {!imagine.singleImagine?.singleImagine?.introImage ? null : (
          <span className={`${checkIntroImg} w-full bg-gray-50`}>
            <img
              src={imagine?.singleImagine?.singleImagine?.introImage.secure_url}
              alt="firstpic"
              className="w-full h-full object-contain scale-x-100 scale-y-125"
            />
          </span>
        )}

        <span className={`${checkIntro} text-left`}>
          {imagine?.singleImagine?.singleImagine?.intro
            ? imagine?.singleImagine?.singleImagine?.intro
            : null}
        </span>
      </div>
      <div
        className="font-medium px-4 text-justify pt-6 font-Mulish"
        dangerouslySetInnerHTML={{
          __html: imagine?.singleImagine?.singleImagine?.main,
        }}
      ></div>
      <div className="flex flex-wrap md:flex-nowrap font-medium items-start justify-center gap-2 px-4 pb-4 pt-6">
        <span className={`${checkOutro} text-left`}>
          {imagine?.singleImagine?.singleImagine?.outro}
        </span>{" "}
        {!imagine?.singleImagine?.singleImagine?.outroImage ? null : (
          <span className={`${checkOutroImg} w-full bg-gray-50`}>
            <img
              src={imagine?.singleImagine?.singleImagine?.outroImage.secure_url}
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
