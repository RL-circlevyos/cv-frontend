import React, { useRef, useState } from "react";
import Slider from "react-slick";
import posts from "./Demo.json";
import "./Slider.css";

import Card from "./Card";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";

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
  const [imagineIndex, setImagineIndex] = useState(0);

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
      <div
        className={id === imagineIndex ? "activeSlide" : "slide"}
        key={imagine.id}
      >
        <div className="slideWrapper ml-10 mb-10">
          <Scrollbars
            autoHide
            thumbSize={1}
            autoHeight
            autoHeightMin={750}
            style={{ width: "100%" }}
          >
            <Link to={`/imagines/${id}`}>
              <Card
                openCommentBox={openCommentBox}
                post={imagine}
                styles="max-w-base px-4 mt-2"
              />
            </Link>
          </Scrollbars>
        </div>
      </div>
    );
  });

  return (
    <Slider ref={sliderRef} {...settings}>
      {templateImagines}
    </Slider>
  );
};

export default React.memo(ImagineSlider);
