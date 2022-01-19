/**import React, { useState } from "react";
import Navbar from "../../../../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LightBulbIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Sound from "./Sound";

const imagines = [
  {
    id: 1,
    imagine: "dddddddddddddmmm nnnnnnnnn jjjjjjj kkkkkkkk",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a.",
    cover:
      "https://images.unsplash.com/photo-1641198088991-b7e477446f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80",
  },
  {
    id: 2,
    imagine: "imagine 2",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a.",
    cover:
      "https://images.unsplash.com/photo-1470566528253-41c75fc933c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    imagine: "imagine 3",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a.",
    cover:
      "https://images.unsplash.com/photo-1476445704028-a36e0c798192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    imagine: "imagine 4",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a.",
    cover:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 5,
    imagine: "imagine 5",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a.",
    cover:
      "https://images.unsplash.com/photo-1601315488950-3b5047998b38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
];

const Start = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex justify-center items-center w-full font-Mulish">
        <div className="max-w-7xl w-full pb-10">
          <div className="flex justify-center items-center w-full  px-2 mt-1">
            <Link
              className=" w-full bg-cyan-700 py-2 rounded-2xl"
              to="/general-imagines/myimagines"
            >
              <button className="w-full bg-cyan-700 text-lg font-medium uppercase text-white rounded-2xl ">
                General
              </button>
            </Link>
            <Link
              className="w-full bg-white border border-cyan-700 py-2 rounded-2xl"
              to="/story-imagines/myimagines"
            >
              <button className="w-full bg-white rounded-2xl text-lg font-medium uppercase text-cyan-700">
                Story
              </button>
            </Link>
          </div>
          <div className="w-full mx-auto flex-wrap flex justify-center items-start gap-4 mt-10 px-4">
            <Link
              to="/"
              className="cursor-pointer px-2 py-1 font-bold
               border border-gray-300 hover:bg-gray-200 flex flex-col justify-center items-center"
            >
              <span>Back</span>
            </Link>
            <Link
              to="/create-general-imagine"
              className="cursor-pointer px-4 py-2 text-cyan-800 font-bold
               border border-gray-500 h-32 w-32 flex flex-col justify-center items-center"
            >
              <PlusCircleIcon className="w-9 h-9 " />
              <span>Create</span>
            </Link>
            {imagines.map((story) => {
              return (
                <Link
                  to={`/general-imagines/${story.id}`}
                  key={story.id}
                  className="w-full md:w-80 space-x-2 flex items-start justify-center shadow bg-white border border-gray-50 font-Mulish"
                >
                  <div className="w-2/5 h-32">
                    <img
                      src={story.cover}
                      alt="pic"
                      className="h-full w-full object-fill rounded-md "
                    />
                  </div>
                  <div className="flex flex-col w-3/5 pr-3">
                    <div className="flex items-center pt-2 space-x-2">
                      <div className="flex flex-1">
                        <img
                          src="https://images.unsplash.com/photo-1637867165026-5725fe9fb052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                          alt="dp"
                          className="w-5 h-5 rounded-full object-cover"
                        />

                        <span className="text-tiny ml-2 font-medium text-gray-900">
                          User Name
                        </span>
                      </div>
                    </div>
                    <span className=" text-gray-700 flex flex-col space-y-2 pt-2 ml-2">
                      <span className="text-sm  hover:underline truncate font-bold">
                        {story.imagine}
                      </span>
                      <span className="text-xs font-medium hover:underline bg-cyan-700 text-white truncate w-1/2 pl-3 rounded-md">
                        {story.genre}
                      </span>
                    </span>
                    <span className="flex items-start space-x-4 pt-3 pb-1">
                      {" "}
                      <span className="flex items-center space-x-1">
                        <LightBulbIcon className="h-6 w-6 text-yellow-500" />
                        <i className="text-gray-500 text-xs font-bold">12k</i>
                      </span>{" "}
                      <span>
                        <Sound />
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default React.memo(Start);*/
