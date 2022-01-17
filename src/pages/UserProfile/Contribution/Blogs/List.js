import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import SkeletonLoader from "../../../../components/SkeletonLoader/SkeletonLoader";
import Card from "./Card";

const List = () => {
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
    <>
      <div className="w-full">
        <div className="gap-4 lg:ml-3 flex flex-wrap items-center justify-center overflow-x-hidden px-3 w-full">
          {loading ? <SkeletonLoader /> : <Card />}
          {loading ? <SkeletonLoader /> : <Card />}
          {loading ? <SkeletonLoader /> : <Card />}
          {loading ? <SkeletonLoader /> : <Card />}
          {loading ? <SkeletonLoader /> : <Card />}
          {loading ? <SkeletonLoader /> : <Card />}
        </div>
      </div>
    </>
  );
};

export default React.memo(List);
