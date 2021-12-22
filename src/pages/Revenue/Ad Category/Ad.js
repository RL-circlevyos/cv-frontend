import React from "react";
import CheckBox from "../../../components/CheckBox";
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

const Ad = () => {
  return (
    <div className="flex justify-center items-center w-full font-Mulish">
      <div className="max-w-xl w-full">
        <div className="flex justify-between items-center pt-8">
          <div></div>
          <div className="lg:text-xl text-lg font-bold">
            <span classname=" text-gray-700">Estimated Price:</span>
            <span className="text-pink-600 ml-2">$1200</span>
          </div>
        </div>
        <div className="lg:text-3xl text-lg font-extrabold uppercase text-primary px-3 py-2  mb-5 mt-5">
          <span classname="">Ad Category</span>
        </div>
        <div className="w-full container px-4">
          {" "}
          <CheckBox data={data} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Ad);
