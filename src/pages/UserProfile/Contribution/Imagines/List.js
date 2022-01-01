import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import SkeletonImagines from "../../../../components/SkeletonLoader/SkeletonImagines";
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
        <div className="gap-4 flex flex-wrap items-center justify-center overflow-x-hidden px-4">
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
        </div>
      </div>
    </>
  );
};

export default React.memo(List);
