import React from "react";
import { AcademicCapIcon, ChatAlt2Icon } from "@heroicons/react/outline";
import CareerSidebarItem from "./CareerSidebarItem";
import {
  BriefcaseIcon,
  CubeIcon,
  PuzzleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useSelector } from "react-redux";

function CareerSidebar() {
  const { userDetails } = useSelector((state) => state.auth);

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
        {userDetails?.mentorStatus && userDetails?.jobProviderStatus ? (
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

      <div>
        <div className="font-semibold underline underline-offset-2 pb-3 text-teal-600">
          Turn your account into{" "}
        </div>
        <CareerSidebarItem
          Icon={UserIcon}
          title="Mentor "
          route="/career-guide/mentor-request"
        />
        <CareerSidebarItem
          Icon={UserIcon}
          title="Switch to General"
          route="*"
        />
        <CareerSidebarItem
          Icon={PuzzleIcon}
          title="Job provider"
          route="/career-guide/jobprovider-request"
        />
      </div>
    </div>
  );
}

export default React.memo(CareerSidebar);
