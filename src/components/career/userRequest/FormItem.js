import React from "react";

function FormItem({
  label,
  inputType,
  inputPlaceholder,
  buttonRequired,
  onInputChange,
}) {
  return (
    <div className="space-y-5">
      <label
        htmlFor="organization"
        className="text-2xl font-bold text-gray-600  "
      >
        {label}
      </label>
      <div className="space-x-6">
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          onChange={onInputChange}
          className="border-b-2 focus:outline-none w-72 text-lg"
        />
        {/* {buttonRequired && (
          <button className="rounded-full bg-primary hover:bg-teal-800 text-white font-semibold px-7 py-1 ">
            Add{" "}
          </button>
        )} */}
      </div>
    </div>
  );
}

export default React.memo(FormItem);
