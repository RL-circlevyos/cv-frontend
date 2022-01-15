import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dp from "../../../assets/person.png";
import { userDetailsAction } from "../../../store/apps/auth/auth-action";

const Info = () => {
  const auth = useSelector((state) => state.auth);
  const user = auth.userid;

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(userDetailsAction(auth.userid));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, auth.userid]);

  console.log(auth?.userDetails);
  return (
    <Link
      to={`/profile/${user}`}
      className="w-full bg-white mt-2 py-8 shadow rounded-xl mb-3 lg:flex justify-center px-6
       flex-col items-center hidden font-Mulish text-gray-600 border border-gray-100"
    >
      <div className="w-24 h-24">
        <img
          className="w-full h-full rounded-full object-cover"
          src={auth?.userDetails?.photo?.secure_url}
          alt="dp"
        />
      </div>
      <div className="text-xl font-bold mt-4">{auth?.userDetails.name}</div>
      <div className="text-base mt-4 px-4">
        <i className="ml-2 text-sm">{auth?.userDetails.bio}</i>
      </div>
      <div className="flex justify-center items-start w-full px-4 gap-x-3 font-bold">
        <div className="text-base mt-4">
          Followers{" "}
          <b className="ml-2">{auth?.userDetails?.followers?.length}</b>
        </div>
        <div className="text-base mt-4 ">
          Following
          <b className="ml-2">{auth?.userDetails?.following?.length}</b>
        </div>
      </div>
      <div className="text-base mt-4 font-bold">
        Imagines <b className="ml-2">{auth?.userImagines?.length}</b>
      </div>
    </Link>
  );
};

export default React.memo(Info);
