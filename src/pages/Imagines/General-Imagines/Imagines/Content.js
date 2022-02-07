import { Divider } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";

const Content = () => {
  const imagine = useSelector((state) => state.imagine);

  const checkIntroImg = imagine?.singleImagine?.singleImagine?.intro
    ? "h-full"
    : "h-96 flex justify-center items-center";

  const checkIntro = imagine?.singleImagine?.singleImagine?.intro
    ? "w-full"
    : "w-0";

  const checkOutroImg = imagine?.singleImagine?.singleImagine?.outro
    ? "h-full"
    : "h-96 flex justify-center items-center";

  const checkOutro = imagine?.singleImagine?.singleImagine?.outro
    ? "w-full"
    : "w-0";
  return (
    <div className="mt-3 space-y-2 block text-base md:text-sl flex-initial text-gray-900 font-Mulish leading-relaxed">
      <div className="text-lg md:text-3xl font-bold px-1 flex items-center ">
        {imagine?.singleImagine?.singleImagine?.category ? (
          <label className="text-tiny md:text-base bg-primary rounded-md text-white py-1 px-2 mr-4">
            {" "}
            {imagine?.singleImagine?.singleImagine?.category}
          </label>
        ) : null}
        {imagine?.singleImagine?.singleImagine?.title}

        {/**  {post?.generalImagines?.title} */}
      </div>
      <Divider />
      <div className="w-full lg:hidden flex justify-center items-center">
        {imagine.singleImagine?.singleImagine?.audiovoice && (
          <audio
            src={imagine.singleImagine?.singleImagine?.audiovoice?.secure_url}
            controls
          />
        )}
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-start justify-center w-full gap-2 font-medium pt-1">
        {!imagine.singleImagine?.singleImagine?.introImage ? null : (
          <span className={`${checkIntroImg} w-full `}>
            <img
              src={imagine?.singleImagine?.singleImagine?.introImage.secure_url}
              alt="firstpic"
              className="w-full h-full object-contain"
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
        className="font-medium px-4 text-justify pt-1 font-Mulish"
        dangerouslySetInnerHTML={{
          __html: imagine?.singleImagine?.singleImagine?.main,
        }}
      ></div>
      <div className="flex flex-wrap md:flex-nowrap font-medium items-start justify-center gap-2 w-full pb-2 pt-1">
        <span className={`${checkOutro} text-left px-4`}>
          {imagine?.singleImagine?.singleImagine?.outro}
        </span>{" "}
        {!imagine?.singleImagine?.singleImagine?.outroImage ? null : (
          <span className={`${checkOutroImg} w-full `}>
            <img
              src={imagine?.singleImagine?.singleImagine?.outroImage.secure_url}
              alt="lastpic"
              className="w-full h-full object-contain "
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default React.memo(Content);
