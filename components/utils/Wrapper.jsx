import React from "react";

export const Wrapper = ({ styles, children }) => {
  return <div className={` flex items-center flex-col justify-center ${styles} `}>{children}</div>;
};
