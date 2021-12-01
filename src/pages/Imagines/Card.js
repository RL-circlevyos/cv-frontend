import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

const Card = ({ num, styles }) => {
  return (
    <section className={`${styles}`}>
      <div class="slider">
        <div class="slide-content">
          <div className="shadow-md bg-glass">
            <div className="header pt-3">
              <Header />
            </div>
            <div>
              <Content />
            </div>
          </div>
          <div className="pt-3">
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
