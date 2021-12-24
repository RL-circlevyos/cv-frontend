import { SearchIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../../assets/circlevyos.svg";
import data from "../Blog/BlogSearch/Data.json";

const Nav = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="w-full max-w-screen-2xl shadow bg-white">
      <div className="flex justify-between items-center px-4">
        <div className="md:flex-shrink-0 hidden md:flex">
          <Link to="/">
            <ArrowLeft className="h-7 w-7" />
          </Link>
        </div>
        <div className="md:w-8/12 w-full flex flex-col bg-greyish-50  rounded-b-2xl relative shadow-sm mb-1">
          <div className="w-full flex items-center">
            <input
              className="w-full bg-greyish-50 px-5 "
              type="text"
              placeholder="Search"
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                // TODO: add button backgroud
                <SearchIcon className="h-7 w-7 text-primary" />
              ) : (
                <XIcon className="h-7 w-7" id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </div>

          <div className="absolute z-50 mt-16">
            {filteredData.length !== 0 && (
              <div className="dataResult w-9/12 ">
                {filteredData.slice(0, 15).map((value, key) => {
                  return (
                    <div
                      className="dataItem hover:bg-greyish-300 bg-grey-100"
                      onClick={() => window.open(value.link, "_blank")}
                    >
                      <p>{value.title} </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Nav;
