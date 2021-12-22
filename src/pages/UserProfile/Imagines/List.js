import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import SkeletonImagines from "../../../components/SkeletonLoader/SkeletonImagines";
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
      <Scrollbars
        thumbSize={1}
        autoHide
        autoHeight
        autoHeightMin={"100%"}
        autoHeightMax={"100%"}
        style={{ width: "100%" }}
      >
        <div className="w-full">
          <div className="gap-4 ml-3 flex flex-wrap items-center justify-center">
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
      </Scrollbars>
    </>
  );
};

export default React.memo(List);
