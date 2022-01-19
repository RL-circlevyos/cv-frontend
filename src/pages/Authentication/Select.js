/**import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const data = [
  {
    name: "Technology",
    id: 1,
  },
  {
    name: "Fantasy",
    id: 2,
  },
  {
    name: "Science",
    id: 3,
  },
  {
    name: "Fiction",
    id: 4,
  },
  {
    name: "Horror",
    id: 5,
  },
  {
    name: "Mystery",
    id: 6,
  },
  {
    name: "Thriller",
    id: 7,
  },
  {
    name: "Entertainment",
    id: 8,
  },
  {
    name: "Food",
    id: 9,
  },
  {
    name: "Current Affairs",
    id: 10,
  },
  {
    name: "Business",
    id: 11,
  },
  {
    name: "Nature",
    id: 12,
  },
  {
    name: "Historical",
    id: 13,
  },
  {
    name: "Life Events",
    id: 14,
  },
  {
    name: "Romance",
    id: 15,
  },
  {
    name: "Others",
    id: 16,
  },
];

const Select = () => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState();
  const [loading, setLoading] = useState(true);

  const handleSingleCheck = useCallback(
    (e) => {
      setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
    },
    [isChecked]
  );

  const onSubmit = useCallback(() => {
    const itemList = Object.keys(isChecked).map((key) => {
      if (isChecked[key] === true) {
        return key;
      }
    });

    console.log(itemList);
    //navigate("/");
  }, [isChecked, navigate]);

  useEffect(() => {
    const initialIsChecked = data.reduce((acc, d) => {
      acc[d.name] = false;
      return acc;
    }, {});
    setIsChecked(initialIsChecked);
    setLoading(false);
  }, [loading]);

  return (
    <div className="flex justify-center items-center w-full font-Mulish">
      <div className="max-w-7xl w-full flex justify-center items-center flex-col">
        <div className="lg:text-3xl text-lg font-extrabold uppercase text-primary px-3 py-2  mb-5 mt-5">
          <span classname="">Select your Genres</span>
        </div>
        <form className="w-full">
          <div className="font-Mulish flex flex-wrap items-center w-full justify-center gap-x-4 text-xl text-gray-800 font-medium">
            {!loading
              ? data.map((test, index) => (
                  <div
                    className="mb-7 bg-gray-100 w-48 h-32 flex justify-center items-baseline pt-10"
                    key={index}
                  >
                    <input
                      className="border-gray-800 w-5 h-5 border cursor-pointer"
                      type="checkbox"
                      name={test.name}
                      checked={isChecked[test.name]}
                      onChange={handleSingleCheck}
                    />{" "}
                    <label className="ml-1">{test.name}</label>
                  </div>
                ))
              : null}
          </div>

          <div className="flex justify-end items-center px-4 mt-4">
            <button
              onClick={() => onSubmit()}
              type="submit"
              className="py-1.5 lg:py-2 lg:px-8 px-2 font-bold rounded-sm text-sm lg:text-base transition duration-200
                       bg-primary text-gray-50 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Select);*/
