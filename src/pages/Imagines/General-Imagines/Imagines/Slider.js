/**import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Card from "./Card";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link, useRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { generalImagineFetchAction } from "../../../../store/apps/imagines/imagine-action";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <ChevronRightIcon className="h-8 w-8" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <ChevronLeftIcon className="h-8 w-8" />
    </div>
  );
};

const ImagineSlider = ({ slidesToShow = 1, openCommentBox }) => {
  const sliderRef = useRef(null);
  const imagine = useSelector((state) => state.imagine);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(generalImagineFetchAction());
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    centerPadding: "0",
    draggable: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: false,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipe: true,
        },
      },
    ],
  };

  return (
    <>
      {/* <div className="flex flex-col">
        <div
          className="prevArrow"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </div>
        <div
          className="nextArrow"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ChevronRightIcon className="h-8 w-8" />
        </div>
      </div> 
      <div>
        <Slider ref={sliderRef} {...settings}>
          {imagine?.generalImagines?.map((i) => {
            return (
              <div key={i.id}>
                <Link to={`/general-imagines/${i.id}`}>
                  <div className=" mb-10 w-full min-w-full">
                    <Card
                      openCommentBox={openCommentBox}
                      post={i}
                      styles="max-w-base px-4 mt-2"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>{" "}
      </div>
    </>
  );
};

export default React.memo(ImagineSlider);**/
