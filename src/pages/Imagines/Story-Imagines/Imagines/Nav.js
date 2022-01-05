import {
  ArchiveIcon,
  ArrowLeftIcon,
  PlusIcon,
  SaveIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../../Blog/BlogSearch/Data.json";

const Nav = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = useCallback((event) => {
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
  }, []);

  const clearInput = useCallback(() => {
    setFilteredData([]);
    setWordEntered("");
  }, []);

  const [show, setShow] = useState(false);
  const showSearch = useCallback(() => {
    setShow(true);
  }, []);
  const hideSearch = useCallback(() => {
    setShow(false);
  }, []);

  const filter =
    filteredData.length === 0 ? (
      <SearchIcon className="h-7 w-7 text-primary" />
    ) : (
      <XIcon className="h-7 w-7" id="clearBtn" onClick={clearInput} />
    );

  return (
    <div className=" w-full flex justify-center items-start font-Mulish text-sm text-gray-800 pb-1">
      <div className="lg:flex max-w-screen-2xl items-center space-x-2 hidden w-full justify-between px-3 py-2">
        <div>
          {" "}
          <Link to="/story-imagines">
            <ArrowLeftIcon className="h-5 w-5 mr-4" />{" "}
          </Link>
        </div>

        <div className="w-6/12 flex items-center">
          {" "}
          {/* {show ? (
            <div className="w-full flex items-center">
              <XIcon
                className="h-8 w-8 mr-2 px-1 cursor-pointer text-pink-600 hover:text-white hover:bg-pink-800 rounded-full"
                onClick={hideSearch}
              />
              <div className="w-full flex flex-col bg-greyish-50 rounded-b-2xl relative shadow-md">
                <div className="w-full flex items-center">
                  {" "}
                  <input
                    className="w-full bg-greyish-50 px-5 "
                    type="text"
                    placeholder="Search Imagines"
                    value={wordEntered}
                    onChange={handleFilter}
                  />
                  <div className="searchIcon">{filter}</div>
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
            </div>
          ) : ( */}
          <div className="flex items-center space-x-5 w-full">
            {/* <button
                className="border border-primary px-2 py-1 rounded-lg flex items-center font-semibold cursor-pointer"
                onClick={showSearch}
              >
                <SearchIcon className="h-5 w-5 text-primary mr-1" /> Search
              </button>

              <Link
                to="/general-imagines/:id"
                className="flex items-center py-1.5 px-3 font-semibold uppercase rounded-md text-base transition duration-200 bg-gray-200 text-primary focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
              >
                General
              </Link> */}
            <span className="flex text-base uppercase font-semibold justify-center items-center w-full py-1.5 px-3 rounded-xl transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100">
              Story Imagines
            </span>
          </div>
          {/* )} */}
        </div>
        <div className="flex items-center space-x-5 ">
          <Link
            to="/story-imagines/myimagines"
            className="flex font-bold items-center py-1.5 px-2 rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            My Imagines
          </Link>
          <Link
            to="/story-imagines/myimagines"
            className="flex font-bold items-center py-1.5 px-2  rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            Saved Imagines
          </Link>
          <div className="flex items-center space-x-5 ">
            <Link
              to="/story-imagines/story-intro"
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
            to="/story-imagines/myimagines"
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
            to="/story-imagines/story-intro"
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
