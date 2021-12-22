import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Navbar from "../../components/Navbar";
import LeaderboardCard from "./LeaderboardCard";

function Leaderboard() {
  return (
    <>
      <Navbar />
      {/* todo: back button */}
      {/* todo: Searchbar */}
      {/* todo: make switch */}

      <div className="flex">
        <div>Stage : </div>
        <div className="text-lg ml-1 font-semibold">Stage_name</div>
      </div>

      {/* make it scrollable */}
      <LeaderboardCard />
      <LeaderboardCard />
      <LeaderboardCard />
      <LeaderboardCard />
      {/* make it scrollable */}
    </>
  );
}

export default Leaderboard;
