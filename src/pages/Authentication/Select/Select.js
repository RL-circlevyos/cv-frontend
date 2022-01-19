/**import React from "react";
import CheckBox from "./Checkbox";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Technology",
    bgcolor: "bg-cyan-800 text-white",
    id: 1,
  },
  {
    name: "Fantasy",
    bgcolor: "bg-fuchsia-800 text-white",
    id: 2,
  },
  {
    name: "Science",
    bgcolor: "bg-teal-600 text-white",
    id: 3,
  },
  {
    name: "Fiction",
    bgcolor: "bg-yellow-600 text-white",
    id: 4,
  },
  {
    name: "Horror",
    bgcolor: "bg-gray-600 text-white",
    id: 5,
  },
  {
    name: "Mystery",
    bgcolor: "bg-blue-900 text-white",
    id: 6,
  },
  {
    name: "Thriller",
    bgcolor: "bg-greyish-700 text-white",
    id: 7,
  },
  {
    name: "Entertainment",
    bgcolor: "bg-violet-700 text-white",
    id: 8,
  },
  {
    name: "Food",
    bgcolor: "bg-yellow-400 text-white",
    id: 9,
  },
  {
    name: "Current Affairs",
    bgcolor: "bg-blue-700 text-white",
    id: 10,
  },
  {
    name: "Business",
    bgcolor: "bg-sky-600 text-white",
    id: 11,
  },
  {
    name: "Nature",
    bgcolor: "bg-green-500 text-white",
    id: 12,
  },
  {
    name: "Historical",
    bgcolor: "bg-yellow-800 text-white",
    id: 13,
  },
  {
    name: "Life Events",
    bgcolor: "bg-rose-400 text-white",
    id: 14,
  },
  {
    name: "Romance",
    bgcolor: "bg-pink-600 text-white",
    id: 15,
  },
  {
    name: "Others",
    bgcolor: "bg-gray-400 text-white",
    id: 16,
  },
];

const Select = () => {
  return (
    <div className="flex justify-center items-center w-full font-Mulish">
      <div className="max-w-5xl w-full">
        <div className="lg:text-xl text-lg font-extrabold uppercase text-primary px-3 py-2  mb-5 mt-5">
          <span classname="">Select your interest category</span>
        </div>
        <div className="w-full flex flex-wrap px-4">
          {" "}
          <CheckBox data={data} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Select);*/
