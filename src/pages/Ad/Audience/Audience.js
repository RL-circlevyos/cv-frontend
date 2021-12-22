import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import RadioInput from "../../../components/RadioInput";
import regions from "./Country.json";

const Audience = () => {
  const [gender, setGender] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [country, setCountry] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const data = { gender, startTime, endTime, country };
      const json = JSON.stringify(data, null, 4);
      console.clear();
      console.log(json);
    },
    [gender, startTime, endTime, country]
  );
  return (
    <div className="flex justify-center items-center w-full font-Mulish">
      <div className="max-w-xl w-full">
        <div className="flex justify-between items-center pt-8 px-4">
          <div></div>
          <div className="lg:text-xl text-lg font-bold ">
            <span classname=" text-gray-700">Estimated Price:</span>
            <span className="text-pink-600 ml-2">$1200</span>
          </div>
        </div>
        <div className="lg:text-3xl text-xl font-extrabold uppercase text-primary px-3 py-2 mb-5 mt-5">
          <span classname="">Audience</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col w-full mt-8 px-4"
        >
          <label className="uppercase text-base font-bold pb-4 w-full">
            Select Country
          </label>
          <select
            className="px-2 py-3 focus:outline-none lg:text-lg text-base w-full"
            id="countries"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {regions.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <div className="block mt-8 w-full">
            <label className="uppercase text-base mb-4 font-bold ">
              Gender
            </label>
            <div className="flex justify-around items-center mt-5">
              {" "}
              <RadioInput
                label="Male"
                value="male"
                checked={gender}
                setter={setGender}
              />
              <RadioInput
                label="Female"
                value="female"
                checked={gender}
                setter={setGender}
              />
              <RadioInput
                label="Others"
                value="Others"
                checked={gender}
                setter={setGender}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-5 lg:mt-10 justify-between items-center w-full space-y-6 lg:space-y-0">
            <span className="flex flex-col">
              <label className="uppercase text-base mb-4 font-bold ">
                Start Date
              </label>
              <input
                className="border border-gray-300 px-2 py-2 rounded-md cursor-pointer"
                type="datetime-local"
                id="start-time"
                name="start-time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                min="2020-01-01T00:00"
              />
            </span>
            <span className="flex flex-col">
              <label className="uppercase text-base mb-4 font-bold ">
                End Date
              </label>{" "}
              <input
                className="border border-gray-300 px-2 py-2 rounded-md cursor-pointer"
                type="datetime-local"
                id="end-time"
                name="end-time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                min="2020-01-01T00:00"
              />
            </span>
          </div>
          <button
            type="submit"
            className="bg-primary text-base text-white px-2 py-1 mt-8 lg:mt-16"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-between items-center px-4 mt-4">
          <Link to="/ad/uploads">
            <ArrowLeftIcon className="h-10 w-10 hover:bg-gray-200 px-1 py-1 rounded-full" />
          </Link>
          <Link to="/ad/advertise">
            <ArrowRightIcon className="h-10 w-10 hover:bg-gray-200 px-1 py-1 rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Audience);
