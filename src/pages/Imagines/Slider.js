import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";
import "./Imagine.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
export default class ImagineSlider extends Component {
  render() {
    const settings = {
      dots: true,
      slidesToScroll: 1,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <div className="slider" key={index}>
                <Card num={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
