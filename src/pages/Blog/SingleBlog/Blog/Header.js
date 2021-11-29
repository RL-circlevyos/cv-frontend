import { ChevronLeftIcon } from "@heroicons/react/solid";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-start justify-start space-x-3">
      <ChevronLeftIcon className="h-7 w-7" />
      <span className="pl-5 w-2/4 h-12">
        <img
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="add"
          className="w-full h-full object-fill"
        />
      </span>
    </div>
  );
};

export default Header;
