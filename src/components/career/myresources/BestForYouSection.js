import React from "react";

function BestForYouSection() {
  return (
    <div>
      <div className="border-b-2 w-96 text-2xl font-semibold text-primary">
        Best for you
      </div>
      <div className="grid grid-cols-2 gap-2 gap-x-0 justify-start items-start text-center px-10 py-3 space-y-2 ">
        <div className="border-2 cursor-pointer w-52 py-2 rounded-lg text-xl text-teal-700 font-semibold border-teal-700 hover:bg-teal-700 hover:text-white hover:font-semibold">
          Courses
        </div>
        <div className="border-2 cursor-pointer w-52 py-2 rounded-lg text-xl text-teal-700 font-semibold border-teal-700 hover:bg-teal-700 hover:text-white hover:font-semibold">
          Exams
        </div>
        <div className="border-2 cursor-pointer w-52 py-2 rounded-lg text-xl text-teal-700 font-semibold border-teal-700 hover:bg-teal-700 hover:text-white hover:font-semibold">
          Books
        </div>
        <div className="border-2 cursor-pointer w-52 py-2 rounded-lg text-xl text-teal-700 font-semibold border-teal-700 hover:bg-teal-700 hover:text-white hover:font-semibold">
          Study Materials
        </div>
      </div>
    </div>
  );
}

export default React.memo(BestForYouSection);
