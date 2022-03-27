import React, { useState } from "react";
import { useSelector } from "react-redux";
import MentorListItem from "./MentorListItem";

function MentorList() {
  const { allMentors } = useSelector((state) => state.user);
  const [mentorId, setmentorId] = useState();
  console.log(mentorId);
  return (
    <div>
      <div className=" mx-auto  justify-items-center h-screen pt-6 pb-44 mr-4  space-y-3 overflow-y-auto overscroll-none no-scrollbar">
        {/* mx-auto justify-items-center  space-y-3 h-screen  rounded-md pt-6 pb-44 mr-4 xl:mr-40 overflow-y-auto overscroll-none no-scrollbar */}

        {allMentors?.mentors?.map((mentor) => (
          <>
            <MentorListItem
              key={mentor?._id}
              username={mentor?.name}
              userprofile={mentor?.photo?.secure_url}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default React.memo(MentorList);
