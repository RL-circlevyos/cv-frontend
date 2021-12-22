import {
  ArchiveIcon,
  ArrowLeftIcon,
  PlusIcon,
  SaveIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className=" w-full flex justify-center items-start font-Mulish text-sm text-gray-800 pb-1">
      <div className="lg:flex items-center space-x-2 hidden w-full justify-between px-3 py-2">
        <div>
          {" "}
          <Link to="/">
            <ArrowLeftIcon className="h-5 w-5 mr-4" />{" "}
          </Link>
        </div>
        <div className="w-1/2 flex flex-col bg-greyish-50 rounded-b-2xl relative shadow-md">
          <div className="w-full flex items-center">
            {" "}
            <input
              className="w-full bg-greyish-50 px-5 "
              type="text"
              placeholder="Search Imagines"
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
        <div className="flex items-center space-x-5 ">
          <Link
            to="/imagines"
            className="flex font-bold items-center py-1.5 px-2 rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            My Imagines
          </Link>
          <Link
            to="/"
            className="flex font-bold items-center py-1.5 px-2  rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            Saved Imagines
          </Link>
          <div className="flex items-center space-x-5 ">
            <Link
              to="/create-general-imagine"
              className="flex font-bold items-center py-1.5 px-2.5 pl-2 rounded-3xl transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
            >
              {" "}
              <PlusIcon className="h-7 w-7" />
              Imagines
            </Link>
          </div>
        </div>
      </div>
      {/*****************mobile view *******************/}
      <div className="block lg:hidden">
        <div className="text-base font-medium text-primary flex justify-between items-start px-3">
          <div className=" w-full flex flex-col bg-greyish-50 rounded-b-2xl relative shadow-md mb-4">
            <div className="w-full flex items-center">
              {" "}
              <input
                className="w-full bg-greyish-50 px-5 "
                type="text"
                placeholder="Search Imagines"
                value={wordEntered}
                onChange={handleFilter}
              />
              <div className="searchIcon">
                {filteredData.length === 0 ? (
                  // TODO: add button backgroud
                  <SearchIcon className="h-7 w-7" />
                ) : (
                  <XIcon
                    className="h-7 w-7"
                    id="clearBtn"
                    onClick={clearInput}
                  />
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
          <span></span>
        </div>
        <div className="flex items-center justify-center space-x-3 mt-2 lg:hidden">
          <Link
            to="/imagines"
            className="flex font-bold items-center py-1.5 px-2 rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            <ArchiveIcon className="h-5 w-5 cursor-pointer text-primary" />
          </Link>
          <Link
            to="/"
            className="flex font-bold items-center py-1.5 px-2  rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            <SaveIcon className="h-5 w-5 cursor-pointer text-primary" />
          </Link>
          <Link
            to="/create-general-imagine"
            className="flex text-sm items-center py-1 px-2 rounded-sm transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            Imagines
            <PlusIcon className="h-6 w-7" />
          </Link>
        </div>{" "}
      </div>
    </div>
  );
};

export default React.memo(Nav);
