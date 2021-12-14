import React from "react";
import { Link } from "react-router-dom";

const Section = ({ highlightIC, highlightSI, highlightBC, highlightSB }) => {
  return (
    <div className="font-Mulish flex items-center justify-between space-x-6 w-full">
      <div className="block w-3/5">
        <span className="text-xl font-bold">Your Contribution</span>
        <hr />
        <div className="flex items-center justify-around space-x-3 mt-3">
          <Link to="/profile">
            <span className={`${highlightIC} font-bold text-lg`}>Imagines</span>
          </Link>
          <Link to="/profile-blogs">
            <span className={`${highlightBC} font-bold text-lg`}>Blogs</span>
          </Link>
          <hr />
        </div>
      </div>
      <div className="block w-2/5">
        <span className="text-xl font-bold">Saved </span>
        <hr />
        <div className="flex items-center justify-around space-x-3 mt-3">
          <Link to="/profile-saved-imagines">
            {" "}
            <span className={`${highlightSI} font-bold text-lg`}>Imagines</span>
          </Link>
          <Link to="/profile-saved-blogs">
            {" "}
            <span className={`${highlightSB} font-bold text-lg`}>Blogs</span>
          </Link>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Section;
