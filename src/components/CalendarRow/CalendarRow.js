import React from "react";
import { getMonthDays, getCurrentDay } from "../../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function CalendarRow() {
  const monthArray = getMonthDays();
  const currentDay = getCurrentDay();

  return (
    <div className="flex flex-row h-16" id="timeline">
      <div className="bg-custom-gray sticky left-0 w-20 text-white flex justify-center items-center text-center">
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="flex flex-nowrap flex-row justify-center">
        {monthArray.map((day) => {
          const isCurrentDay =
            day.dayName === currentDay.dayName &&
            day.dayNumber === currentDay.dayNumber &&
            day.month === currentDay.month;

          return (
            <div
              className={`bg-custom-gray text-s h-full w-20 flex justify-center items-center text-center hover:bg-gray-700 py-3 ${
                isCurrentDay ? "text-white" : "text-custom-faded-grey"
              }`}
              key={day.dayName + day.dayNumber + day.month}
            >
              <div className="overflow-hidden flex-col min-w-max">
                <div>{day.dayName}</div>
                <div className="flex flex-1 flex-row">
                  <span>
                    {day.dayNumber}.{day.month}.
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
