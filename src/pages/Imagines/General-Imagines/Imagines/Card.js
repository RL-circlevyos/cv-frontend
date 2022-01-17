import React, { useEffect } from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { generalImagineSingleFetchAction } from "../../../../store/apps/imagines/imagine-action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SkeletonImagines from "../../../../components/SkeletonLoader/SkeletonImagines";
import SkeletonContentLeader from "../../../../components/SkeletonLoader/SkeletonContentLeader";

const Card = ({
  post,
  styles,
  prevHandleClick,
  nextHandleClick,
  openCommentBox,
}) => {
  const ui = useSelector((state) => state.ui);
  return (
    <section className={`${styles}`}>
      <div class="w-full">
        {ui.isLoading ? (
          <SkeletonContentLeader />
        ) : (
          <>
            <div className="shadow-sm rounded-xl px-2">
              <div className="header pt-3">
                <Header />
              </div>
              <div>
                <Content />
              </div>
            </div>
          </>
        )}
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
