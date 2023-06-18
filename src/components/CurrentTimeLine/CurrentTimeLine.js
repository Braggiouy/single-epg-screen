import React, { useState, useEffect, useRef, useCallback } from "react";

export default function CurrentTimeLine() {
  const [currentTime, setCurrentTime] = useState("");
  const [distanceFromLeft, setDistanceFromLeft] = useState(0); // Initialize distanceFromLeft state

  const lineBarRef = useRef(null);

  const updateTimeLinePosition = useCallback(() => {
    const dimensions = lineBarRef.current?.getBoundingClientRect();
    if (!dimensions) return;

    setDistanceFromLeft((prevDistance) => prevDistance + 5); // Increase distanceFromLeft by 5
    const distanceFromLeft = dimensions.left;
    // console.log(distanceFromLeft);
    // console.log(currentTime);
  }, [distanceFromLeft, currentTime]);

  const updateCurrentTime = () => {
    const now = new Date();
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    setCurrentTime(now.toLocaleTimeString([], timeOptions));
  };

  useEffect(() => {
    // Update current time
    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 12000);
    const interval2 = setInterval(updateTimeLinePosition, 12000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, [updateCurrentTime, currentTime]);

  useEffect(() => {
    // Move window focus to currentTimeLine when component is attached to DOM
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
