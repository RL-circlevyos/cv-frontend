import React from "react";
import { Link } from "react-router-dom";
import LeaderboardCard from "./LeaderboardCard";
import Nav from "./Nav";

function Global() {
  return (
    <>
      <div className="sticky top-0 flex justify-center font-Mulish">
        <Nav />
      </div>
      {/* todo: back button */}
      {/* todo: Searchbar */}
      {/* todo: make switch */}

      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex justify-center items-center w-full  px-2 mt-1">
            <Link
              className="w-full bg-white border border-cyan-700 py-2 rounded-2xl"
              to="/leaderboard"
            >
              {" "}
              <button className="w-full bg-white rounded-2xl text-lg font-medium uppercase text-cyan-700">
                Country
              </button>
            </Link>
            <Link
              className="w-full bg-cyan-700 py-2 rounded-2xl"
              to="/leaderboard-global"
            >
              <button className="w-full bg-cyan-700 text-lg font-medium uppercase text-white rounded-2xl">
                Global
              </button>
            </Link>
          </div>
          <div className="flex px-4 font-Mulish items-center mt-1">
            <div>Your Stage : </div>
            <div className="text-lg ml-1 font-semibold">Stage_name</div>
          </div>

          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
          <LeaderboardCard />
        </div>
      </div>
    </>
  );
}

export default Global;
