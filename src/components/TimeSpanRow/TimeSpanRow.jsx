import React from "react";
import { generateTimespanArray } from "../../../utils/utils";

export default function TimeSpanRow() {
  return (
    <div className="flex flex-row h-8" id="timeline">
      <div className="flex flex-nowrap flex-row justify-center ml-20">
        {generateTimespanArray().map((time) => {
          return (
            <div
              className="bg-custom-gray text-xs h-full w-60 text-white flex justify-center items-center text-center hover:bg-gray-700 border-solid py-3"
              key={time}
            >
              <div className=" overflow-hidden min-w-max">
                <span>{time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
