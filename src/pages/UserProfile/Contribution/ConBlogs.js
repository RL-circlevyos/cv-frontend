import React from "react";
import List from "./Blogs/List";
import Intro from "../Info/Intro";
import Section from "../Info/Section";

const ConBlogs = () => {
  return (
    <div>
      <Intro />
      <div className="flex justify-center items-center">
        <div className="mt-4 w-full max-w-7xl px-2">
          <Section highlightBC="border-b-4 border-primary" show={true} />

          <div className="font-Mulish flex items-start justify-center w-full mt-6 pb-8 overflow-x-hidden">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ConBlogs);
