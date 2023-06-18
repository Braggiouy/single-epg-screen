import React from "react";

export default function CurrentTimeLine() {
  return (
    <div
      className="w-[1px] bg-yellow-400 absolute top-0 bottom-0 z-20 left-80"
      id="currentTime"
    >
      <div className="relative">
        <div className="w-2 rounded h-14 bg-yellow-400 absolute left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
}
