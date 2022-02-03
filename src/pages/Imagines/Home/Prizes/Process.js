import React from "react";
import Navbar from "../../../../components/Navbar";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-2xl mb-4">
          <Link to="/" className="">
            <ArrowLeftIcon className="h-6 w-6 ml-3 mt-4" />
          </Link>
          <div className="flex flex-col justify-center items-center w-full text-primary font-medium font-Mulish">
            <div className=" px-3 rounded-lg space-y-4 pb-4 ">
              {" "}
              <div className="font-extrabold text-3xl px-2">
                Early Bird Registration...
              </div>
              <p className="text-lg font-bold text-pink-600  px-2 py-1">
                {" "}
                Valid till (3rd Feb - 3rd July 2022)
              </p>
              <div className="mx-2 px-4 mt-1.5 text-lg xl:text-xl rounded-lg bg-primary text-white space-y-3 py-3 pb-5">
                <div>Be a part of this event</div>
                <div>step 1 : create a post in circlevyos</div>
                <div>
                  step 2 : share your post link to other social media platforms
                  (facebook, linkedin, twitter, instagram) and tag us with given
                  hashtags #circlevyos #circlevyosloveimagines.
                </div>
                <div>(details and queries will be send to verified emails)</div>
              </div>
              <div className="text-xl text-cyan-700 px-5 font-extrabold">
                Join the fun to win exciting prizes from circlevyos
              </div>
              <div className="text-lg space-y-3 px-4 mx-2 font-bold bg-cyan-700 text-white py-5 rounded-lg">
                <div>• 2500 users will get a coffee mug + surprise gifts</div>
                <div>
                  • lucky 500 winners will get coffee mug + Tshirt + surprise
                  prizes
                </div>
              </div>
              <div className="pt-5 text-pink-600 px-3">
                (prizes will be distributed after the validity period.
                <b className="hover:underline cursor-pointer">
                  terms and conditions applied
                </b>
                )
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
