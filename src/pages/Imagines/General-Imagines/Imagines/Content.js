import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { generalImagineSingleFetchAction } from "../../../../store/apps/imagines/imagine-action";

const Content = () => {
  const imagineid = useParams();
  const imagine = useSelector((state) => state.imagine);
  const dispatch = useDispatch();

  console.log(imagine?.singleImagine?.singleImagine);

  return (
    <div className="mt-3 space-y-2 block text-tiny md:text-sm xl:text-base flex-initial text-gray-900 font-Mulish leading-relaxed">
      <div className="text-base md:text-lg font-bold px-5">
        {imagine?.singleImagine?.singleImagine?.title}
        {/**  {post?.generalImagines?.title} */}
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-end justify-center gap-2 px-4 font-medium">
        {!imagine?.singleImagine?.singleImagine?.introImage ? null : (
          <span className="w-full md:w-96 h-40">
            <img
              src={imagine?.singleImagine?.singleImagine?.introImage.secure_url}
              alt="firstpic"
              className="w-full h-full object-contain"
            />
          </span>
        )}
        <span className="w-full text-left">
          {imagine?.singleImagine?.singleImagine?.intro}
        </span>
      </div>
      <div
        className="font-medium px-4 text-justify"
        dangerouslySetInnerHTML={{
          __html: imagine?.singleImagine?.singleImagine?.main,
        }}
      ></div>
      <div className="flex flex-wrap md:flex-nowrap font-medium items-start justify-center gap-2 px-4 pb-4">
        <span className="w-full text-left">
          {imagine?.singleImagine?.singleImagine?.outro}
        </span>{" "}
        {!imagine?.singleImagine?.singleImagine?.outroImage ? null : (
          <span className="w-full md:w-96 h-40">
            <img
              src={imagine?.singleImagine?.singleImagine?.outroImage.secure_url}
              alt="lastpic"
              className="w-full h-full object-contain"
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default React.memo(Content);
