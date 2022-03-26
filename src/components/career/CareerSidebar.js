import React from "react";
import { ChatAlt2Icon } from "@heroicons/react/outline";
import CareerSidebarItem from "./CareerSidebarItem";
import {
  BriefcaseIcon,
  CubeIcon,
  PuzzleIcon,
  UserIcon,
} from "@heroicons/react/solid";

function CareerSidebar() {
  return (
    <div>
      <div className="px-10 mt-6 w max-w-sm xl:min-w-[300px]  space-y-44 ">
        <div>
          <CareerSidebarItem
            Icon={ChatAlt2Icon}
            title="Q&A"
            route="/career-guide/qna"
          />
          <CareerSidebarItem
            Icon={CubeIcon}
            title="My Resources"
            route="/career-guide/myresources/all"
          />
          <CareerSidebarItem
            Icon={BriefcaseIcon}
            title="Ready For Work"
            route="/career-guide/work"
          />
        </div>

        <div>
          <div className="font-semibold underline underline-offset-2 pb-6 text-teal-600">
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
    </div>
  );
}

export default React.memo(CareerSidebar);
