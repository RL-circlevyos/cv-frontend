import React, { useState } from "react";
import "./SearchBar.css";
import { SearchIcon, XCircleIcon, XIcon } from "@heroicons/react/solid";

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
          <XCircleIcon
            className="h-7 w-7 text-red-900 cursor-pointer"
            onClick={closeSearchBar}
          />
        ) : (
          <button
            onClick={showSearchBar}
            className="mx-12 my-3 px-6 w-40 rounded-2xl text-primary border border-primary hover:bg-teal-800 hover:text-gray-100"
          >
            Search
          </button>
        )}
        {showSearch && (
          <div className=" w-full flex flex-col bg-greyish-50 rounded-b-2xl relative">
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
        )}
        <div></div>
      </div>
    </>
  );
}

export default SearchBar;
