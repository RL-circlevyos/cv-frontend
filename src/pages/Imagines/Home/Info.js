import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dp from "../../../assets/person.png";

const Info = () => {
  const auth = useSelector((state) => state.auth);
  const user = auth.userid;
  return (
    <Link
      to={`/profile/${user}`}
      className="w-full bg-white mt-2 py-8 shadow rounded-xl mb-3 lg:flex justify-center flex-col items-center hidden font-Mulish text-gray-600 border border-gray-100"
    >
      <div className="w-20 h-20">
        <img
          className="w-full h-full rounded-full object-fill"
          src={dp}
          alt="dp"
        />
      </div>
      <div className="text-xl font-bold mt-4">Aindrila Bhattacharjee</div>
      <div className="text-base mt-4 px-4">
        Bio{" "}
        <i className="ml-2 text-sm">
          The Auto-Save feature will make sure you won't lose any change while
          editing, even if you leave the site and come back later.
        </i>
      </div>
      <div className="flex justify-center items-start w-full px-4 gap-x-3 font-bold">
        <div className="text-base mt-4">
          Followers <b className="ml-2">1000</b>
        </div>
        <div className="text-base mt-4 ">
          Following<b className="ml-2">1000</b>
        </div>
      </div>
      <div className="text-base mt-4 font-bold">
        Imagines <b className="ml-2">100</b>
      </div>
    </Link>
  );
};

export default React.memo(Info);
