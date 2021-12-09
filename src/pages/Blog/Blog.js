import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Scrollbars from "react-custom-scrollbars-2";
import Leaders from "./BlogLeader/Leaders";
import List from "./Imagines/List";
import { LightningBoltIcon } from "@heroicons/react/solid";
import SearchBar from "./BlogSearch/SearchBar";
import BookData from "./BlogSearch/Data.json";
import Navbar from "../../components/Navbar";

const Blog = () => {
  return (
    <div className="fixed h-screen w-full">
      <div className="">
        {" "}
        {/* <div>
        
      </div> */}
        <Navbar />
        <div className="mb-8">
          <div className="max-w-large gap-x-10 mx-auto grid md:grid-cols-3 px-4 ">
            <div className="">
              <SearchBar placeholder="Search blogs...." data={BookData} />
              <Sidebar />
            </div>
            <div className="pt-1 px-1 py-4">
              <div className="mt-1 ">
                <Scrollbars
                  thumbSize={1}
                  autoHide
                  style={{ width: "100%", height: "90vh" }}
                >
                  <div className="space-y-5 pb-4">
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
              <div className="md:flex md:flex-col hidden space-y-3 mb-5 mt-2">
                <div className="">
                  <Leaders />
                </div>

                <div className="space-y-3">
                  <span className="w-2/3">
                    <span className=" flex  items-center  px-2 justify-between font-Libre">
                      <span className="text-3xl ml-48 text-yellow-900">
                        Imagines
                      </span>
                      <span className="float-right">All</span>
                    </span>
                  </span>
                  <div className="shadow-md"></div>
                  <List />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Blog);
