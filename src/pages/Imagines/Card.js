import React from "react";
import Content from "./Content";
import Header from "./Header";

const Card = ({ num }) => {
  return (
    <section>
      <div class="slider">
        <div class="slide-content shadow-md">
          <div className="header">
            {num} <Header />
          </div>
          <div>
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
