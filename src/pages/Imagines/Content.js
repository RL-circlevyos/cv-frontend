import React from "react";

const Content = () => {
  return (
    <div className="mt-2 space-y-2 block text-sm font-Mulish">
      <div className="text-xl font-bold px-5">Here is the title</div>
      <div className="flex items-start justify-center gap-2 px-4">
        <img
          src="https://images.unsplash.com/photo-1613203713329-b2e39e14c266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="firstpic"
          className="w-32 h-20"
        />
        <span>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has.
        </span>
      </div>
      <div className=" px-4">
        <span>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          frg
        </span>
      </div>
      <div className="flex items-start justify-center gap-4 px-4 pb-3">
        <span>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a
        </span>{" "}
        <img
          src="https://images.unsplash.com/photo-1637884186936-be3cedb3bb00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1151&q=80"
          alt="firstpic"
          className="w-32 h-20"
        />
      </div>
    </div>
  );
};

export default Content;
