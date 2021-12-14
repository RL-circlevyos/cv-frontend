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
        style={{ width: "100%", height: "48vh" }}
      >
        <div className="space-y-3 w-4/6 float-right">
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
          {loading ? <SkeletonImagines /> : <Card />}
        </div>
      </Scrollbars>
    </>
  );
};

export default React.memo(List);
