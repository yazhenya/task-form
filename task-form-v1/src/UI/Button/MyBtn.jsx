import React from "react";
import property from "./MyBtn.module.css";
const MyBtn = ({ children, ...props }) => {
  return (
    <button {...props} className={property.MyBtn}>
      {children}
    </button>
  );
};
export default MyBtn;
