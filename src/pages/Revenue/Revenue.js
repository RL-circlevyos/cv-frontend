import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Scrollbars from "react-custom-scrollbars-2";

import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";
import RevenueContent from "./RevenueContent";

const Revenue = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);
  return (
    <div>
      <Navbar />
      <div className="flex p-2">
        <div className="mr-2 font-medium text-lg text-gray-500">Revenue :</div>
        <div className="mr-2 font-medium text-2xl">$ 600</div>
      </div>
      <div className="flex p-2">
        <div className="mr-2 font-medium text-lg text-gray-500">Coins :</div>
        <div className="mr-2 font-medium text-2xl">500</div>
        <button class="bg-primary hover:bg-teal-700 text-white font-normal py-1 px-2 rounded-full">
          Reedem
        </button>
      </div>
      <hr />
      <div className="pt-1 px-1 py-4">
        <div className="mt-1 ">
          <Scrollbars
            thumbSize={1}
            autoHide
            style={{ width: "100%", height: "90vh" }}
          >
            <div className="space-y-5 pb-4">
              {loading ? <SkeletonLoader /> : <RevenueContent />}
              {loading ? <SkeletonLoader /> : <RevenueContent />}
              {loading ? <SkeletonLoader /> : <RevenueContent />}
              {loading ? <SkeletonLoader /> : <RevenueContent />}
              {loading ? <SkeletonLoader /> : <RevenueContent />}

              {/* blog list */}
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
