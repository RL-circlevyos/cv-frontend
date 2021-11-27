import React from "react";
import { Search } from "react-feather";

const SearchField = ({ placeholder }) => {
  return (
    <div
      className="w-full rounded-3xl font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-200 border border-primary dark:border-primary
     flex items-center px-3 py-2"
    >
      <Search />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full text-base px-3 focus:outline-none  dark:bg-gray-800"
      />
    </div>
  );
};

export default React.memo(SearchField);
