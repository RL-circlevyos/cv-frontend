import React from "react";

const Details = () => {
  return (
    <div className="w-full font-Mulish">
      <div className="flex flex-col">
        <div className="flex justify-start items-start space-x-4 w-full">
          <div className="block w-32 space-y-4">
            <span className="w-24 h-24">
              <img
                src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="dp"
                className="w-28 h-28 object-cover rounded-full "
              />
            </span>
          </div>
          <div className="flex items-start flex-col space-y-2  font-bold">
            <span className="text-2xl">Aindrila Bhattacharjee</span>
            <span className="flex justify-center items-start space-x-2">
              <span className="text-base text-primary">Followers:</span>
              <span className="text-base text-gray-700">1000</span>
            </span>
            <span className="flex justify-center items-start space-x-3">
              <span className="flex justify-center items-start space-x-1">
                <span className="text-base text-primary ">Blogs:</span>
                <span className="text-base text-gray-700">10</span>
              </span>
              <span className="flex justify-center items-start space-x-1">
                <span className="text-base text-primary ">Imagines:</span>
                <span className="text-base text-gray-700">100</span>
              </span>
            </span>
          </div>
        </div>
        <span className="px-5 py-2 mt-2 ml-3 bg-primary text-white font-bold text-base w-24">
          Follow
        </span>
        <div className="mt-3 space-x-2 px-4">
          <span className="text-lg text-gray-700 font-bold">Bio:</span>
          <span className="text-base text-gray-700">
            The Auto-Save feature will make sure you won't lose any change while
            editing, even if you leave the site and come back later.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
