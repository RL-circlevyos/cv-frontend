import React, { useState, useEffect, useCallback } from "react";

const data = [
  {
    name: "Facebook",
    id: 3,
  },
  {
    name: "Instagram",
    id: 4,
  },
  {
    name: "Twitter",
    id: 5,
  },
  {
    name: "Pinterest",
    id: 6,
  },
  {
    name: "Youtube",
    id: 7,
  },
  {
    name: "Google",
    id: 8,
  },
];

const Advertise = () => {
  const [allChecked, setAllChecked] = useState(false);
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
        console.log(key);
        return key;
      }
    });

    console.log(itemList);
  }, [isChecked]);

  useEffect(() => {
    if (!loading) {
      setIsChecked((current) => {
        const nextIsChecked = {};
        Object.keys(current).forEach((key) => {
          nextIsChecked[key] = allChecked;
        });
        return nextIsChecked;
      });
    }
  }, [allChecked, loading]);

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
      <div className="max-w-2xl w-full">
        <div className="flex justify-between items-center pt-8 px-4">
          <div></div>
          <div className="lg:text-xl text-lg font-bold ">
            <span classname=" text-gray-700">Estimated Price:</span>
            <span className="text-pink-600 ml-2">$1200</span>
          </div>
        </div>
        <div className="lg:text-3xl text-lg font-extrabold uppercase text-primary px-3 py-2 mb-5 mt-5 ml-5">
          <span classname="">Advertising Goal</span>
        </div>
        <div className="w-full px-4">
          <div className="font-Mulish text-xl text-gray-800 font-medium">
            {!loading ? (
              <>
                <div className="mb-7" key={1}>
                  <input
                    className="border-gray-800 w-5 h-5 border cursor-pointer"
                    type="checkbox"
                    name="More Visits"
                    checked={isChecked["More Visits"]}
                    onChange={handleSingleCheck}
                  />{" "}
                  <label className="ml-1">More Visits</label>
                </div>
                <div className="mb-7" key={2}>
                  <input
                    className="border-gray-800 w-5 h-5 border cursor-pointer"
                    type="checkbox"
                    name="More Awareness"
                    checked={isChecked["More Awareness"]}
                    onChange={handleSingleCheck}
                  />{" "}
                  <label className="ml-1">More Awareness</label>
                </div>

                <div className="lg:text-3xl text-lg font-extrabold uppercase text-sky-700 px-3 py-2 flex mb-10 mt-10 w-3/4 ">
                  <span classname="">Social Media</span>
                </div>
                <div className="w-full contain px-4">
                  {data.map((test, index) => (
                    <div className="mb-7" key={index}>
                      <input
                        className="border-gray-800 w-5 h-5 border cursor-pointer"
                        type="checkbox"
                        name={test.name}
                        checked={isChecked[test.name]}
                        onChange={handleSingleCheck}
                      />
                      <label className="ml-1">{test.name}</label>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
            <button
              className="bg-primary text-white px-4 py-2 w-40 rounded-lg cursor-pointer sm:mt-10"
              onClick={() => onSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Advertise);
