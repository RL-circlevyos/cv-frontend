import React from "react";
import List from "./Blogs/List";
import Intro from "../Info/Intro";
import Section from "../Info/Section";

const SavedBlogs = () => {
  return (
    <div>
      <Intro />
      <div className="flex justify-center items-center">
        <div className="mt-4 w-full max-w-7xl px-3">
          <Section highlightSB="border-b-4 border-primary" />
          <div className="font-Mulish flex flex-wrap items-start justify-between space-x-6 w-full mt-6 pb-8">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SavedBlogs);
