import React from "react";
import { Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";

const Modal = ({ title, closeModal, content, link, position }) => {
  return (
    <div
      className={`modalBackground font-Mulish w-full flex justify-center items-center z-50 ${position} absolute`}
    >
      <div className=" max-w-xl w-full h-auto rounded-md bg-white shadow border border-gray-200 flex flex-col p-4">
        <div className="flex justify-end">
          <button onClick={closeModal}>
            <XIcon className="h-8 w-8 hover:bg-pink-600 py-1 rounded-full hover:text-white" />
          </button>
        </div>
        <div className="mt-1 text-center inline-block font-extrabold text-pink-700 text-2xl">
          <h1>{title}</h1>
        </div>
        <div className="flex-1 flex justify-center items-center font-semibold text-pink-500 text-sl">
          <p>{content}</p>
        </div>
        <div className="flex justify-end items-center w-full mt-4">
          <div>
            <Link
              to={link}
              className="bg-emerald-600 text-white px-1.5 py-1 rounded-sm"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
