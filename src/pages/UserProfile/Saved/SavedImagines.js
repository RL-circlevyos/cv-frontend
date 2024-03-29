import React from "react";
import List from "./Imagines/List";
import Intro from "../Info/Intro";
import Section from "../Info/Section";

const SavedImagines = () => {
  return (
    <div>
      <Intro />
      <div className="flex justify-center items-center">
        <div className="mt-4 w-full max-w-7xl">
          <Section highlightSI="border-b-4 border-primary bg-teal-100 px-2 py-1" />
          <div className="font-Mulish flex flex-wrap items-start justify-between space-x-6 w-full mt-6 pb-8">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SavedImagines);
