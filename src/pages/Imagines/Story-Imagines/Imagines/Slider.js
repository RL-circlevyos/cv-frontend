import React, { useRef } from "react";
import Slider from "react-slick";
import "./Slider.css";
import Card from "./Card";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const NextArrow = ({ onClick, id }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <Link to={`/story-imagines/${id}`}>
        {" "}
        <ChevronRightIcon className="h-8 w-8" />
      </Link>
    </div>
  );
};

const PrevArrow = ({ onClick, id }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <Link to={`/story-imagines/${id}`}>
        <ChevronLeftIcon className="h-8 w-8" />
      </Link>
    </div>
  );
};

const ImagineSlider = ({ slidesToShow = 1, openCommentBox, posts }) => {
  const sliderRef = useRef(null);

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

  const templateImagines = posts.map((imagine, id) => {
    return (
      <>
        <div key={imagine.id}>
          <div className="mb-10 w-full min-w-full">
            <Link to={`/story-imagines/${id}`}>
              <Card
                openCommentBox={openCommentBox}
                post={imagine}
                styles="max-w-base px-4 mt-2"
              />
            </Link>
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
