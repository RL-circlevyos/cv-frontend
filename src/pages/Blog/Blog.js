import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Scrollbars from "react-custom-scrollbars-2";
import Leaders from "./BlogLeader/Leaders";
import List from "./Imagines/List";
import { LightningBoltIcon } from "@heroicons/react/solid";
import SearchBar from "./BlogSearch/SearchBar";
import BookData from "./BlogSearch/Data.json";

const Blog = () => {
  return (
    <div>
      {" "}
      {/* <div>
       
      </div> */}
      <div className="max-w-large gap-x-10 mx-auto grid md:grid-cols-3 px-4 ">
        <div className="">
          <SearchBar placeholder="Search blogs...." data={BookData} />
          <Sidebar />
        </div>
        <div className="pt-1 px-1 py-4">
          <div className="mt-3 ">
            <Scrollbars
              thumbSize={1}
              autoHide
              style={{ width: "100%", height: "90vh" }}
            >
              <div className="space-y-4 pb-20">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </Scrollbars>
          </div>
        </div>
        <div className="md:flex md:flex-col hidden space-y-3 mb-5 mt-2">
          <div className="">
            <Leaders />
          </div>

          <div className="space-y-3">
            <span className="w-2/3">
              <span className="text-3xl flex items-center text-yellow-900 px-2 justify-center font-Libre">
                <LightningBoltIcon className="h-7 w-7 mr-2" /> Imagines
              </span>
              <span className="float-right">All</span>
            </span>

            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Blog);
