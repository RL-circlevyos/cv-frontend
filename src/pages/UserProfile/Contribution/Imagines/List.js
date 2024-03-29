import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonImagines from "../../../../components/SkeletonLoader/SkeletonImagines";
import Card from "../../../Imagines/Home/General/Card";
import profile from "../../../../assets/profile.svg";
import {
  userDetailsAction,
  userFollowingAction,
  userImaginesAction,
} from "../../../../store/apps/auth/auth-action";
import { useParams } from "react-router-dom";

const List = () => {
  const auth = useSelector((state) => state.auth);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(userImaginesAction(id.id, auth.token));
    dispatch(userFollowingAction(id.id, auth.token));
    dispatch(userDetailsAction(id.id, auth.token));
  }, [id.id, dispatch, auth.token]);

  return (
    <>
      <div className="w-full font-Mulish">
        <div className="gap-4 flex flex-wrap items-center justify-center overflow-x-hidden px-4 w-full">
          {auth?.userImagines.length === 0 && (
            <span className="mt-4 font-bold flex flex-col items-center justify-center italic text-lg w-full space-y-5 px-4">
              <span className="">You have not posted any imagine yet</span>
              <span className="w-full h-96">
                <img src={profile} className="w-full h-80" alt="" />
              </span>
            </span>
          )}

          {auth?.userImagines?.map((imagines) => {
            console.log(imagines, "imagines user");
            return (
              <>
                {ui.isLoading ? (
                  <SkeletonImagines />
                ) : (
                  <Card
                    width="w-full md:w-96"
                    author={imagines?.user?._id}
                    avatar={imagines?.user?.photo?.secure_url}
                    id={imagines._id}
                    title={imagines.title}
                    introImage={imagines.introImage}
                    username={imagines?.user?.name}
                    category={imagines.category}
                    date={imagines.createdAt}
                    comments={imagines.comments}
                    views={imagines.views}
                    appriciates={imagines.appriciates}
                    audiovoice={imagines?.audiovoice?.secure_url}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default React.memo(List);
