import React from "react";
import MentorListItem from "./MentorListItem";

function MentorList() {
  return (
    <div>
      <div className=" mx-auto  justify-items-center h-screen pt-6 pb-44 mr-4  space-y-3 overflow-y-auto overscroll-none no-scrollbar">
        {/* mx-auto justify-items-center  space-y-3 h-screen  rounded-md pt-6 pb-44 mr-4 xl:mr-40 overflow-y-auto overscroll-none no-scrollbar */}
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
        <MentorListItem />
      </div>
    </div>
  );
}

export default React.memo(MentorList);
