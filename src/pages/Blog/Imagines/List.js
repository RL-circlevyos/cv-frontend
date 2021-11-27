import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Card from "./Card";

const List = () => {
  return (
    <>
      <Scrollbars
        thumbSize={1}
        autoHide
        style={{ width: "100%", height: "49vh" }}
      >
        <div className="space-y-3 w-4/6 float-right">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Scrollbars>
    </>
  );
};

export default List;
