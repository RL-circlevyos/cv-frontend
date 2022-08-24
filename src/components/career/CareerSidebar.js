import React, { useEffect, useState } from "react";
import { AcademicCapIcon, ChatAlt2Icon } from "@heroicons/react/outline";
import CareerSidebarItem from "./CareerSidebarItem";
import {
  BriefcaseIcon,
  CubeIcon,
  PuzzleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  AuthState,
  switchToGenAction,
  switchToJobProviderAction,
  switchToMentorAction,
} from "../../store/apps/auth/auth-action";

function CareerSidebar() {
  const { userDetails, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function switchTogenHandler() {
    dispatch(switchToGenAction(token));
    window.location.reload();
  }

  function switchToMentorHandler() {
    dispatch(switchToMentorAction(token));
    window.location.reload();
  }

  function switchToJobProviderHandler() {
    dispatch(switchToJobProviderAction(token));
    window.location.reload();
  }

  return (
    <div className="scroll-y px-10 mt-6 w max-w-sm xl:min-w-[300px] overflow-y h-screen space-y-2 ">
      <div className="space-y-2">
        <CareerSidebarItem
          Icon={ChatAlt2Icon}
          title="Q&A"
          route="/career-guide/qna"
          color="yellow"
        />
        <CareerSidebarItem
          Icon={CubeIcon}
          title="My Resources"
          route="/career-guide/myresources/all"
          color="teal"
        />
        <CareerSidebarItem
          Icon={BriefcaseIcon}
          title="Ready For Work"
          route="/career-guide/work"
          color="blue"
        />
        <div className="py-2 border-b-2"></div>
        <div className="font-semibold text-gray-400 text-xl">Dashboards</div>

        {userDetails?.mentorStatus || userDetails?.jobProviderStatus ? (
          ""
        ) : (
          <CareerSidebarItem
            Icon={AcademicCapIcon}
            title="Career"
            route="/dashboard/career"
          />
        )}
        {userDetails?.mentorStatus && (
          <CareerSidebarItem
            Icon={AcademicCapIcon}
            title="Mentor"
            route="/dashboard/mentor/mynotes"
          />
        )}
        {userDetails?.jobProviderStatus && (
          <CareerSidebarItem
            Icon={AcademicCapIcon}
            title="Job Provider"
            route="/dashboard/job"
          />
        )}
        <div className="py-2 border-b-2"></div>
      </div>

      {!userDetails?.mentor && !userDetails?.jobprovider ? (
        <div>
          {!userDetails?.jobProviderStatus && !userDetails?.mentorStatus ? (
            <div className="font-semibold underline underline-offset-2 pb-3 text-teal-600">
              Turn your account into{" "}
            </div>
          ) : (
            ""
          )}
          {!userDetails?.mentorStatus && (
            <CareerSidebarItem
              Icon={UserIcon}
              title="Mentor "
              route="/career-guide/mentor-request"
            />
          )}

          {!userDetails?.jobProviderStatus && (
            <CareerSidebarItem
              Icon={PuzzleIcon}
              title="Job provider"
              route="/career-guide/jobprovider-request"
            />
          )}
          <div className="py-2 border-b-2"></div>
        </div>
      ) : (
        ""
      )}

      <div>
        {userDetails?.mentorStatus || userDetails?.jobProviderStatus ? (
          <div onClick={switchTogenHandler} className="cursor-pointer">
            <p className="text-gray-600 text-lg font-Mulish font-medium hover:-translate-y-1 transition transform mx-auto max-w-full">
              Switch Account to General
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      {userDetails?.mentor || userDetails?.jobprovider ? (
        <div>
          {(!userDetails?.mentorStatus || !userDetails?.jobProviderStatus) && (
            <div className="font-semibold underline underline-offset-2 pb-3 text-teal-600">
              Switch account to
            </div>
          )}

          {!userDetails?.mentorStatus && (
            <div
              className="cursor-pointer text-gray-600 text-lg font-Mulish font-medium hover:-translate-y-1 transition transform mx-auto max-w-full"
              onClick={switchToMentorHandler}
            >
              Mentor
            </div>
          )}
          {!userDetails?.jobProviderStatus && (
            <div
              className="cursor-pointer text-gray-600 text-lg font-Mulish font-medium hover:-translate-y-1 transition transform mx-auto max-w-full"
              onClick={switchToJobProviderHandler}
            >
              Job provider
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default React.memo(CareerSidebar);
