import React from "react";
import List from "./Blogs/List";
import Intro from "./Info/Intro";
import Section from "./Info/Section";

const ProfileBlog = () => {
  return (
    <div>
      <Intro />
      <div className="flex justify-center items-center">
        <div className="mt-4 w-full max-w-7xl">
          <Section highlightBC="border-b-4 border-primary" />
          <div className="font-Mulish flex flex-wrap items-start justify-between space-x-6 w-full mt-6 pb-8">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBlog;
