import React, { useState } from "react";
import Card from "./Card";
import Header from "./Header";

const CreateSImagine = () => {
  const [inputFields, setInputFields] = useState([<Card />, <Card />]);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-4xl flex flex-col">
        <div>
          <Header />
        </div>
        <div>{inputFields}</div>
      </div>
    </div>
  );
};

export default CreateSImagine;
