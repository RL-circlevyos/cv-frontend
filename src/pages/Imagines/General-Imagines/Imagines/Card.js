import React, { useEffect } from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { generalImagineSingleFetchAction } from "../../../../store/apps/imagines/imagine-action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
            <Content />
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

export default React.memo(Card);
