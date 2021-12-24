import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "./Slider.css";
import Card from "./Card";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const NextArrow = ({ onClick, id }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <Link to={`/general-imagines/${id}`}>
        {" "}
        <ChevronRightIcon className="h-8 w-8" />
      </Link>
    </div>
  );
};

const PrevArrow = ({ onClick, id }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <Link to={`/general-imagines/${id}`}>
        <ChevronLeftIcon className="h-8 w-8" />
      </Link>
    </div>
  );
};

const ImagineSlider = ({ slidesToShow = 1, openCommentBox, posts }) => {
  const sliderRef = useRef(null);
  const [imagineIndex, setImagineIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    nextArrow: <NextArrow onClick id={imagineIndex} />,
    prevArrow: <PrevArrow onClick id={imagineIndex} />,
    centerPadding: "0",
    draggable: false,
    focusOnSelect: true,
    beforeChange: (current, next) => setImagineIndex(next),
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

  const templateImagines = posts.map((imagine, id) => {
    return (
      <>
        <div
          className={id === imagineIndex ? "activeSlide" : "slide"}
          key={imagine.id}
        >
          <div className="slideWrapper mb-10 w-full">
            <Card
              openCommentBox={openCommentBox}
              post={imagine}
              styles="max-w-base px-4 mt-2"
            />
          </div>
        </div>{" "}
      </>
    );
  });

  return (
    <Slider ref={sliderRef} {...settings}>
      {templateImagines}
    </Slider>
  );
};

export default React.memo(ImagineSlider);
