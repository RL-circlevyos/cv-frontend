import React from "react";
import { Link } from "react-router-dom";
const src =
  "https://images.unsplash.com/photo-1638208561774-6e02a8e17cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const GCard = ({ image, username, id }) => {
  return (
    <div className="w-60 flex items-start justify-center shadow mb-3 font-Mulish border border-gray-200 rounded gap-x-2">
      <span className="text-sm ml-2 font-bold text-gray-900 py-2 px-2 w-1/2 flex flex-col">
        {username}
        <button className="bg-gray-100 text-primary font-bold rounded cursor-pointer mt-1 w-3/4">
          remove
        </button>
      </span>

      <div className="text-sm font-medium hover:underline mt-1 flex justify-center items-center w-full lg:w-2/4">
        <Link to={`/general-imagines/${id}`}>
          <img
            src={
              !image
                ? src
                : `https://storage.googleapis.com/niketan-dev-mode.appspot.com/${image}`
            }
            alt="pic"
            className="h-full w-full object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default React.memo(GCard);
