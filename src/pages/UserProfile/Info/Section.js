import React from "react";
import { Link } from "react-router-dom";

const Section = ({
  highlightIC,
  highlightSI,
  highlightBC,
  highlightSB,
  show,
}) => {
  return (
    <div className="font-Mulish flex items-start justify-between space-x-6 w-full px-4">
      <div className="block w-3/5">
        <Link
          to="/contribution/profile-imagines"
          className="md:text-xl text-lg font-bold"
        >
          Your Contribution
        </Link>
        <hr />
        {show && (
          <div className="flex items-center justify-around space-x-3 mt-3 ">
            <Link to="/contribution/profile-imagines">
              <span className={`${highlightIC} font-bold text-base md:text-lg`}>
                Imagines
              </span>
            </Link>
            <Link to="/contribution/profile-blogs">
              <span className={`${highlightBC} font-bold text-base md:text-lg`}>
                Blogs
              </span>
            </Link>
            <hr />
          </div>
        )}
      </div>

      <div className="block w-2/5">
        <Link
          to="/saved/profile-imagines"
          className="md:text-xl text-lg  font-bold"
        >
          Saved{" "}
        </Link>
        <hr />
        {!show && (
          <div className="flex items-center justify-around space-x-3 mt-3">
            <Link to="/saved/profile-imagines">
              {" "}
              <span className={`${highlightSI} font-bold text-base md:text-lg`}>
                Imagines
              </span>
            </Link>
            <Link to="/saved/profile-blogs">
              {" "}
              <span className={`${highlightSB} font-bold text-base md:text-lg`}>
                Blogs
              </span>
            </Link>

            <hr />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
