import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PencilIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Education",
    id: 1,
  },
  {
    name: "Finance",
    id: 2,
  },
  {
    name: "Life Events",
    id: 3,
  },
  {
    name: "Relationship",
    id: 4,
  },
  {
    name: "Entertainment",
    id: 5,
  },
  {
    name: "Business & Industry",
    id: 6,
  },
  {
    name: "Software",
    id: 7,
  },
  {
    name: " Industry",
    id: 8,
  },
  {
    name: "Food & Drink",
    id: 9,
  },
  {
    name: "Music",
    id: 10,
  },
  {
    name: "Software",
    id: 11,
  },
  {
    name: "Makeup",
    id: 12,
  },
  {
    name: "Ecommerce",
    id: 13,
  },
  {
    name: "Technology",
    id: 14,
  },
  {
    name: "Others",
    id: 15,
  },
];

const Budget = () => {
  return (
    <div className="flex justify-center items-center w-full font-Mulish">
      <div className="max-w-xl w-full px-5">
        <div className="flex justify-between items-center pt-8 px-4">
          <div></div>
          <div className="lg:text-xl text-lg font-bold ">
            <span classname=" text-gray-700">Estimated Price:</span>
            <span className="text-pink-600 ml-2">$1200</span>
          </div>
        </div>
        <div className="lg:text-3xl text-xl font-extrabold uppercase text-primary px-3 py-2 mb-5 mt-5">
          <span classname="">Budget</span>
        </div>
        <div className="lg:text-xl text-lg font-bold mb-3">
          <span classname=" text-gray-700">Your Total Budget:</span>
          <span className="text-teal-700 ml-2">$1200</span>
        </div>
        <div className="lg:text-xl text-lg font-bold mb-3">
          <span classname=" text-gray-700">Estimated reach per day:</span>
          <span className="text-teal-700 ml-2">50-200</span>
          <span className="text-teal-700 ml-2">people</span>
        </div>

        <label className="uppercase text-base font-bold pb-4 w-full mt-8 flex items-center">
          Your Category
          <Link to="/ad/ad-category">
            <PencilIcon className="h-7 w-7 hover:bg-gray-200 px-1 py-1 rounded-full cursor-pointer ml-1" />
          </Link>
        </label>
        <div className="flex flex-wrap gap-3 items-start w-full">
          {data.map((d) => {
            return (
              <div key={d.id} className="flex items-center">
                <span className="bg-primary w-2.5 h-2.5 rounded-full"></span>
                <span className="text-lg ml-1">{d.name}</span>
              </div>
            );
          })}
        </div>
        <label className="uppercase text-base font-bold pb-4 w-full mt-8 flex items-center">
          Audience
          <Link to="/ad/audience">
            <PencilIcon className="h-7 w-7 hover:bg-gray-200 px-1 py-1 rounded-full cursor-pointer ml-1" />
          </Link>
        </label>
        <div className="flex flex-wrap gap-3 items-start w-full">
          <div className="flex items-center">
            <span className="text-base">You Selected:</span>
            <span className="bg-primary w-2.5 h-2.5 rounded-full ml-2"></span>
            <span className="text-base ml-1 font-bold">India</span>
          </div>
        </div>
        <label className="uppercase text-base font-bold pb-4 w-full mt-8 flex items-center">
          Uploaded Content
          <Link to="/ad/uploads">
            <PencilIcon className="h-7 w-7 hover:bg-gray-200 px-1 py-1 rounded-full cursor-pointer ml-1" />
          </Link>
        </label>
        <div className="flex flex-wrap gap-3 items-start w-full">
          <div className="flex items-center">
            <span className="text-base">Content Title:</span>
            <span className="bg-primary w-2.5 h-2.5 rounded-full ml-2"></span>
            <span className="text-base ml-1 font-bold">Ad 1</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-1 mt-6">
          <Link to="/ad/advertise">
            <ArrowLeftIcon className="h-9 w-9 hover:bg-gray-200 px-1 py-1 rounded-full" />
          </Link>
          <Link to="/ad/others">
            <ArrowRightIcon className="h-9 w-9 hover:bg-gray-200 px-1 py-1 rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Budget);
