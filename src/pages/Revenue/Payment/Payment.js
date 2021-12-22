import React from "react";
import RadioInput from "../../../components/RadioInput";

const Payment = () => {
  const [pay, setPay] = React.useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { pay };
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };
  return (
    <div className="flex justify-center items-center w-full font-Mulish">
      <div className="max-w-xl w-full">
        <div className="flex justify-between items-center pt-16 px-4">
          <div></div>
          <div className="lg:text-xl text-lg font-bold">
            <span classname=" text-gray-700">Estimated Price:</span>
            <span className="text-pink-600 ml-2">$1200</span>
          </div>
        </div>
        <div className="lg:text-3xl text-xl font-extrabold uppercase text-cyan-600 py-2 mb-5 mt-12 px-6">
          <span classname="">Payment</span>
        </div>{" "}
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col w-full mt-8 px-6"
        >
          <label className="uppercase text-base font-bold pb-4 w-full">
            Options
          </label>
          <div className="container space-y-6 mt-6">
            {" "}
            <RadioInput label="UPI" value="UPI" checked={pay} setter={setPay} />
            <RadioInput
              label="PayPal"
              value="PayPal"
              checked={pay}
              setter={setPay}
            />
            <RadioInput
              label="Bank Transfer"
              value="Bank Transfer"
              checked={pay}
              setter={setPay}
            />{" "}
          </div>
          <div className="flex justify-between items-center mt-8 lg:mt-16 w-full px-4">
            <div></div>{" "}
            <button
              type="submit"
              className="bg-cyan-600 text-lg font-bold text-white px-4 py-2 rounded-md "
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
