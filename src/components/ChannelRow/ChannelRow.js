import React from "react";
import { Link } from "react-router-dom";
import { formatTimeTo24Hour } from "../../../utils/utils";
import { calculateWidth } from "../../../utils/utils";

export default function ChannelRow({
  id,
  channelTitle,
  channelImage,
  schedules,
}) {
  let counter = 0;

  return (
    <div className="flex flex-row h-16" id={id}>
      <div className="bg-custom-gray sticky left-0 w-20 text-white flex justify-center items-center text-center z-30">
        <img src={channelImage} alt={channelTitle}></img>
      </div>
      <div className="flex flex-nowrap flex-row justify-center">
        {schedules
          ? schedules.map((program) => {
              const newkey = (counter += 1);
              const width = calculateWidth(program.start, program.end);
              const programLink = `/detail-page/${program.id}`; // Construct the correct path

              // {`${program.id}`}
              return (
                <Link to={programLink} key={program.id + newkey}>
                  <div
                    className={
                      "bg-program-background text-xs h-full border border-gray-600 hover:bg-gray-700 border-solid p-3"
                    }
                    style={{ width: `${width}px` }}
                  >
                    <div className=" overflow-hidden flex-col min-w-max text-white">
                      <div>{program.title}</div>
                      <div className="flex flex-1 flex-row text-gray-400">
                        <span>
                          {formatTimeTo24Hour(program.start)} -{" "}
                          {formatTimeTo24Hour(program.end)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
}
