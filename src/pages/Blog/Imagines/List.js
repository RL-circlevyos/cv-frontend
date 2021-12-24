import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";
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
        <div className="gap-3 w-4/6 float-right">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => {
            return (
              <>
                {loading ? (
                  <SkeletonImagines />
                ) : (
                  <Link to={`/general-imagines/${id}`}>
                    <Card />
                  </Link>
                )}
              </>
            );
          })}
        </div>
      </Scrollbars>
    </>
  );
};

export default React.memo(List);
