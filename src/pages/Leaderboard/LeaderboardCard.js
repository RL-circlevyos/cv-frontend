import React from "react";
import MostLiked from "../../assets/badges/most liked.svg";
import MostViewed from "../../assets/badges/most viewed.svg";
import Trending from "../../assets/badges/trending.svg";
import NewUser from "../../assets/badges/new user come.svg";
import Contribution from "../../assets/badges/contribution.svg";
import Badge from "./Badge";

function LeaderboardCard() {
  return (
    <div>
      <div className="max-w-full overflow-hidden rounded-lg shadow p-2 m-5 font-Mulish">
        <div className="flex justify-between text-center">
          {/* profile */}
          <div className="flex">
            <img
              className="inline object-cover w-10 h-10 mr-2 rounded-full"
              src="https://cdn.pixabay.com/photo/2021/11/19/15/21/christmas-6809681_960_720.png"
              alt=""
            />
            <div>
              <div className="text-lg font-semibold">User_Name</div>
              <div className="text-sm">
                Stage: <span className="font-medium"> Stage_name</span>{" "}
              </div>
            </div>
          </div>

          {/* badges */}
          <div className="flex">
            <Badge src={MostLiked} number={200} />

            <Badge src={MostViewed} number={200} />
            <Badge src={Trending} number={200} />
            <Badge src={NewUser} number={200} />
            <Badge src={Contribution} number={200} />
          </div>

          <div className="flex">
            <div className="mr-10">
              <div className="text-gray-500">Blogs</div>
              <div className="font-bold text-primary">800</div>
            </div>

            <div>
              <div className="text-gray-500">Imagines</div>
              <div className="font-bold text-primary">800</div>
            </div>
          </div>
          <div className="mr-5">
            <div className="text-primary font-semibold">Achievements</div>
            <div className="text-primary font-extrabold">800</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardCard;
