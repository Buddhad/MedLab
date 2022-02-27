import React from "react";

export default function Card({ styles, children }) {
  return (
    <div className={`p-4 m-2 rounded-lg bg-teal-400 ${styles}`}>{children}</div>
  );
}
