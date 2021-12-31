import React from "react";
import market from "../../assets/coming.svg";
import Navbar from "../../components/Navbar";

const Marketplace = () => {
  return (
    <>
      <Navbar />
      <div className="grid place-items-center font-Mulish">
        <div className="inline-block align-middle text-center space-y-4">
          <span className="grid mt-10 place-items-center px-4">
            <img
              src={market}
              alt="Under Construction"
              className="w-full h-96"
            />
          </span>
          <span className="text-gray-400 text-2xl font-extrabold">
            {" "}
            Marketplace ComingSoon...
          </span>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
