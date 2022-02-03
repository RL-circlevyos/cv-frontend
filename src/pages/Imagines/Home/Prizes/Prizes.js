import React from "react";
import { Link } from "react-router-dom";

const Prizes = () => {
  return (
    <div className="flex flex-col w-full mt-5 text-white py-2 font-medium font-Mulish">
      <div className="bg-teal-800 px-3 mt-3 rounded-lg space-y-4 py-4">
        {" "}
        <div className="font-bold text-lg px-2">Early Bird Registration...</div>
        <p className="text-base font-medium bg-primary px-2 py-1">
          {" "}
          Valid till (3rd Feb - 3rd July 2022)
        </p>
        <div>• 2500 users will get a coffee mug + surprise gifts</div>
        <div>
          • lucky 500 winners will get coffee mug + Tshirt + surprise prizes
        </div>
        <Link
          to="/cv/offers/detail-procedure"
          className="bg-primary flex justify-center py-1 rounded-lg"
        >
          Click to know more
        </Link>
        <small className="text-base">
          details and queries will be send to verified emails
        </small>
      </div>

      {/* <div className="bg-cyan-700 px-3 mt-1.5 rounded-lg space-y-1 pt-1 pb-3">
          <div>Be a part of this event</div>
          <div>step 1 : create a post in circlevyos</div>
          <div>
            step 2 : copy your post link and share it to other social media
            platforms (facebook, linkedin, twitter, instagram) and tag us with
            given hashtags #circlevyos #circlevyosloveimagines.
          </div>
        </div> */}
    </div>
  );
};

export default Prizes;
