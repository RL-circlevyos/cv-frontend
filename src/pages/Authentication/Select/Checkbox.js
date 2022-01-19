/**import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function CheckBox({ data }) {
  const [allChecked, setAllChecked] = useState(false);
  const [isChecked, setIsChecked] = useState();
  const [loading, setLoading] = useState(true);

  const handleSingleCheck = useCallback(
    (e) => {
      setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
    },
    [isChecked]
  );
  const navigate = useNavigate();

  const onSubmit = useCallback(() => {
    const itemList = Object.keys(isChecked).map((key) => {
      if (isChecked[key] === true) {
        console.log(key);
        return key;
      }
    });
    navigate("/");
    console.log(itemList);
  }, [isChecked, navigate]);

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
  }, [loading, data]);

  return (
    <div className="font-Mulish text-xl text-gray-800 font-medium flex justify-evenly items-center flex-wrap w-full gap-2">
      {!loading
        ? data.map((test, index) => (
            <div
              className={`mb-7 ${test.bgcolor} bg-gray-100 lg:w-48 lg:h-28 flex justify-center items-center`}
              key={index}
            >
              <input
                className="border-gray-800 w-5 h-5 border cursor-pointer"
                type="checkbox"
                name={test.name}
                checked={isChecked[test.name]}
                onChange={handleSingleCheck}
              />{" "}
              <label className="ml-1 font-medium text-xl">{test.name}</label>
            </div>
          ))
        : null}
      <button
        className="bg-primary text-white px-4 py-2 w-40 rounded-lg cursor-pointer"
        onClick={() => onSubmit()}
      >
        Submit
      </button>
    </div>
  );
}
export default React.memo(CheckBox);*/
