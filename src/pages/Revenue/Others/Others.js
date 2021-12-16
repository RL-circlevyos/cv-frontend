import React, { useCallback, useState } from "react";
import languages from "./Languages.json";
import regions from "../Audience/Country.json";

const ages = [
  { age: "0-10", id: 1 },
  { age: "11-20", id: 2 },
  { age: "21-30", id: 3 },
  { age: "31-40", id: 4 },
  { age: "41-50", id: 5 },
  { age: "51-60", id: 6 },
  { age: "61-70", id: 7 },
  { age: "71-80", id: 8 },
  { age: "81-90", id: 9 },
  { age: "91-100 & above", id: 10 },
];

const Others = () => {
  const [ageGroup, setAgeGroup] = useState("");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const data = { ageGroup, language, country };
      const json = JSON.stringify(data, null, 4);
      console.clear();
      console.log(json);
    },
    [ageGroup, language, country]
  );

  return (
    <div className="flex justify-center items-center w-full font-Mulish">
      <div className="max-w-xl w-full">
        <div className="flex justify-between items-center pt-8 px-4">
          <div></div>
          <div className="lg:text-xl text-lg font-bold">
            <span classname=" text-gray-700">Estimated Price:</span>
            <span className="text-pink-600 ml-2">$1200</span>
          </div>
        </div>
        <div className="lg:text-3xl text-xl font-extrabold uppercase text-primary py-2 mb-5 mt-5 px-4">
          <span classname="">Others</span>
        </div>{" "}
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col w-full mt-8 px-4"
        >
          <label className="uppercase text-base font-bold pb-4 w-full">
            Select Language
          </label>
          <div className="space-y-5">
            {" "}
            <select
              id="languages"
              className="px-2 py-3 focus:outline-none lg:text-lg text-base w-full overflow-scroll"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-5 mt-8">
            <label className="uppercase text-base font-bold pb-4 w-full">
              Select Country
            </label>
            <select
              id="countries"
              className="px-2 py-3 focus:outline-none lg:text-lg text-base w-full overflow-scroll"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {regions.map((items) => (
                <option key={items.id} value={items.name}>
                  {items.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-5 mt-8">
            <label className="uppercase text-base font-bold pb-4 w-full overflow-scroll">
              Select Age
            </label>
            <select
              id="age-group"
              className="px-2 py-3 focus:outline-none lg:text-lg text-base w-full"
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
            >
              {ages.map((a) => (
                <option key={a.id} value={a.age}>
                  {a.age}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-primary text-base text-white px-2 py-1 mt-8 lg:mt-16"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Others;
