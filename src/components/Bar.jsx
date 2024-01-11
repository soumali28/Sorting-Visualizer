import React from "react";

function Bar({ height }) {
  console.log(height)
  return (
    <div
      className={`bg-blue-600 w-8 ${height ? `h-${height}` : "h-16"} mx-1 `}
    ></div>
  );
}

export default Bar;
