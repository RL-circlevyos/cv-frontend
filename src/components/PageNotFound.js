import React from "react";
import logo from "../assets/notfound.svg";

const PageNotFound = () => {
  return (
    <div className="grid place-items-center mt-10 font-Mulish">
      <div className="lg:text-large text-6xl text-primary">404</div>
      <div className="lg:w-1/2 w-3/4 h-72">
        <img src={logo} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="md:text-4xl text-3xl lg:pt-7 pt-4 text-gray-600 tracking-normal">
        Page Not Found.....
      </div>
    </div>
  );
};

export default React.memo(PageNotFound);
