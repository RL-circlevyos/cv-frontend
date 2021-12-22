const RadioInput = ({ label, value, checked, setter }) => {
  return (
    <label className="flex items-center font-Mulish">
      <input
        type="radio"
        className="w-5 h-5 lg:w-6 lg:h-6"
        checked={checked === value}
        onChange={() => setter(value)}
      />
      <span className="text-base lg:text-lg lg:ml-2 ml-1">{label}</span>
    </label>
  );
};

export default RadioInput;
