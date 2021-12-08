import React, { useState } from "react";
import Slider from "react-slick";
import posts from "./Demo.json";
import "./Slider.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import Card from "./Card";

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

const ImagineSlider = ({ slidesToShow = 3 }) => {
  const [imagineIndex, setImagineIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImagineIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImagines = posts.map((imagine, idx) => {
    return (
      <div
        className={idx === imagineIndex ? "activeSlide" : "slide"}
        key={imagine.id}
      >
        <div className="slideWrapper">
          <Card post={imagine} styles=" lg:h-full max-w-base px-4  mt-2" />
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{templateImagines}</Slider>;
};

export default React.memo(ImagineSlider);
