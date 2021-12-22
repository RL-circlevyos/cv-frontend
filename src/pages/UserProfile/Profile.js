import React from "react";
import List from "./Imagines/List";
import Intro from "./Info/Intro";
import Section from "./Info/Section";

const Profile = () => {
  return (
    <div>
      <Intro />
      <div className="flex justify-center items-center">
        <div className="mt-4 w-full max-w-7xl">
          <Section highlightIC="border-b-4 border-primary" />

          <div className="font-Mulish flex flex-wrap items-start justify-between space-x-6 w-full mt-6 pb-8">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
