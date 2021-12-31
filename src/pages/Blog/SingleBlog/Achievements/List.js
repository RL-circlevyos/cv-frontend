import React from "react";
import Badge from "./Badge";
import MostLiked from "../../../../assets/badges/most liked.svg";
import MostViewed from "../../../../assets/badges/most viewed.svg";
import Trending from "../../../../assets/badges/trending.svg";
import NewUser from "../../../../assets/badges/new user come.svg";
import Contribution from "../../../../assets/badges/contribution.svg";

const List = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full px-2 py-1 mb-4 font-Mulish">
      <div className="flex w-full max-w-3xl mt-2 mb-2">
        <Badge src={MostLiked} number={200} />
        <Badge src={MostViewed} number={200} />
        <Badge src={Trending} number={200} />
        <Badge src={NewUser} number={200} />
        <Badge src={Contribution} number={200} />
      </div>
    </div>
  );
};

export default List;
