import React from "react";
import "./notification.css";

export const showErrMsg = (msg) => {
  return (
    <div className="errMsg rounded-md mb-2 font-semibold text-base">{msg}</div>
  );
};

export const showSuccessMsg = (msg) => {
  return (
    <div className="successMsg rounded-md mb-2 font-semibold text-base">
      {msg}
    </div>
  );
};
