/**import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

const Card = ({
  post,
  styles,
  prevHandleClick,
  nextHandleClick,
  openCommentBox,
}) => {
  return (
    <section className={`${styles}`}>
      <div class="w-full">
        <div className="shadow-sm rounded-xl px-5">
          <div className="header pt-3">
            <Header />
          </div>
          <div>
            <Content post={post} />
          </div>
        </div>
        <div className="pt-1 pb-3">
          <Footer
            prevHandleClick={prevHandleClick}
            nextHandleClick={nextHandleClick}
            openCommentBox={openCommentBox}
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Card);*/
