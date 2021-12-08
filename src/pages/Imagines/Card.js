import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

const Card = ({ post, styles }) => {
  return (
    <section className={`${styles}`}>
      <div class="slider h-full w-full">
        <div className="shadow-sm rounded-xl border border-green-200">
          <div className="header pt-3">
            <Header />
          </div>
          <div>
            <Content post={post} />
          </div>
        </div>
        <div className="pt-4 bottom-0">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Card);
