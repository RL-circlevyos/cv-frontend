import React, { useState } from "react";
import "./SearchBar.css";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Tag from "./../../../components/Tag";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [showSearch, setShowSearch] = useState(false);

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

  const showSearchBar = () => {
    setShowSearch(true);
  };
  const closeSearchBar = () => {
    setShowSearch(false);
  };

  return (
    <>
      <div className="search flex justify-between items-start md:flex-nowrap flex-wrap">
        {showSearch ? (
          <button
            onClick={closeSearchBar}
            className="mx-5 my-3 px-10 py-1 rounded-2xl text-red-600 border border-red-700 hover:bg-red-800 hover:text-gray-100"
          >
            Close
          </button>
        ) : (
          <button
            onClick={showSearchBar}
            className="mx-12 my-3 px-6 py-1 rounded-2xl text-primary border border-primary hover:bg-teal-800 hover:text-gray-100"
          >
            Search
          </button>
        )}
        {showSearch ? (
          <div className=" md:w-5/12 w-full flex flex-col bg-greyish-50 rounded-b-2xl">
            <div className="w-full flex items-center">
              {" "}
              <input
                className="w-full bg-greyish-50 px-5"
                type="text"
                placeholder={placeholder}
                value={wordEntered}
                onChange={handleFilter}
              />
              <div className="searchIcon">
                {filteredData.length === 0 ? (
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
            <Transition
              show={true}
              enter="transition ease-out duration-500 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-500 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div>
                  {filteredData.length !== 0 && (
                    <div ref={ref} className="dataResult w-full">
                      {filteredData.slice(0, 15).map((value, key) => {
                        return (
                          <Link
                            className="dataItem"
                            to={value.link}
                            target="_blank"
                          >
                            <p>{value.title} </p>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </Transition>
          </div>
        ) : (
          <div className="flex items-center space-x-2 mt-4 pr-5">
            <Tag tagname="tag 1" />
            <Tag tagname="tag 1" />
            <Tag tagname="tag 1" />
            <Tag tagname="tag 1" />
            <Tag tagname="tag 1" />
            <Tag tagname="tag 1" />
            <Tag tagname="tag 1" />
            <Tag tagname="tag 1" />
          </div>
        )}
        <div></div>
      </div>
    </>
  );
}

export default SearchBar;
