import React, { useState, useEffect, useRef, useCallback } from "react";

export default function CurrentTimeLine({ initialPosition }) {
  const [distanceFromLeft, setDistanceFromLeft] = useState(initialPosition); // Initialize distanceFromLeft state
  0;
  const lineBarRef = useRef(null);

  const updateTimeLinePosition = useCallback(() => {
    // 1 hr equals 240px. Then each minute is 4px.
    // Every 15 seconds we move the bar 1px to the right

    setDistanceFromLeft((prevDistance) => prevDistance + 1); // Increase distanceFromLeft by 1
  }, [distanceFromLeft]);

  useEffect(() => {
    // Update current time

    // every 15 sec we update the timeLinePosition
    const interval = setInterval(updateTimeLinePosition, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Move window focus to currentTimeLine component, when  is attached to DOM
    lineBarRef?.current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  }, []);

  return (
    <div
      className="w-[1px] bg-yellow-400 absolute top-0 bottom-0 z-20 left-96"
      id="current-time-line"
      ref={lineBarRef}
      style={{ left: `${distanceFromLeft}px` }} // Apply the left position based on distanceFromLeft
    >
      <div className="relative">
        <div className="w-2 rounded h-14 bg-yellow-400 absolute left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
}
