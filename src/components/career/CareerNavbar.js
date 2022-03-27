import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CareerNavbarItem from "./CareerNavbarItem";

function CareerNavbar({ isQna, isMyresources, isWork }) {
  const { userDetails } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="py-3 px-10 flex  ">
        {/* left */}
        <div className="flex justify-start flex-grow ">
          <div className="bg-gray-100  flex px-3 py-1 border-2 rounded-full items-center shadow-sm">
            <SearchIcon className="h-5 text-gray-500 " />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent px-5 rounded-3xl  focus:outline-none "
            />
          </div>

          {/* TODO: //!CREATE DROPDOWN MENU */}
        </div>

        {/* right */}
        {isQna && (
          <div className="justify-end space-x-3">
            <Link to="/career-guide/qna/create-question">
              <button
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                type="button"
                className="bg-primary text-white font-semibold text-base px-5 py-0.5 rounded-3xl hover:bg-teal-600 "
              >
                Ask Question
              </button>
            </Link>
            <Link to="/career-guide/qna/create-question/private">
              <button
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                type="button"
                className="bg-primary text-white font-semibold text-base px-5 py-0.5 rounded-3xl hover:bg-teal-600 "
              >
                Ask Question from mentors
              </button>
            </Link>
            <NavLink
              to="/career-guide/qna/request"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-gray-200  "
                  : "rounded-full  hover:bg-gray-100 "
              }
            >
              {userDetails.mentorStatus && (
                <button
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  type="button"
                  className=" text-primary text-xl font-semibold hover:shadow-md hover:shadow-green-100 hover:bg-teal-700 hover:text-white px-5 py-1.5 rounded-lg  cursor-pointer "
                >
                  Requests
                  <span className="text-sm items-start pl-2 pb-2 font-bold ">
                    10
                  </span>
                </button>
              )}
            </NavLink>

            <NavLink
              to="/career-guide/qna/myqna"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-gray-200  "
                  : "rounded-full  hover:bg-gray-100 "
              }
            >
              <span className="text-primary font-semibold text-lg hover:shadow-md hover:shadow-green-100 hover:bg-teal-700 hover:text-white px-5 py-1.5 rounded-lg  cursor-pointer">
                My Q&A
              </span>
            </NavLink>
          </div>
        )}
        {isMyresources && (
          <div className="justify-end space-x-3">
            <CareerNavbarItem
              navTitle="All"
              route="/career-guide/myresources/all"
            />
            <CareerNavbarItem
              navTitle="Courses"
              route="/career-guide/myresources/courses"
            />
            <CareerNavbarItem
              navTitle="Exams"
              route="/career-guide/myresources/exams"
            />
            <CareerNavbarItem
              navTitle="Books"
              route="/career-guide/myresources/books"
            />
            <CareerNavbarItem
              navTitle="Study Materials"
              route="/career-guide/myresources/materials"
            />
          </div>
        )}
        {isWork && (
          <div className="justify-end space-x-3">
            {userDetails.jobProviderStatus && (
              <CareerNavbarItem navTitle="All" route="/career-guide/work" />
            )}
            {userDetails.jobProviderStatus && (
              <CareerNavbarItem
                navTitle="My jobs "
                route="/career-guide/myjobs"
              />
            )}

            {userDetails.jobProviderStatus && (
              <Link to="/career-guide/work/jobpost">
                <button
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  type="button"
                  className="bg-purple-600 text-white font-semibold text-base px-5 py-0.5 rounded-3xl hover:bg-purple-700 "
                >
                  Post a job
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(CareerNavbar);
