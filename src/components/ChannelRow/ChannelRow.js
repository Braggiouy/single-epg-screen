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

  // Due to the fact that we already know beforehand
  // that the channelImage is not avaiable, we are going to set a fallback image.
  // Which, in reality, it is not a fallback image, but the real image of the channel
  // coming from the assets folder
  const imageUrl = `${window.location.origin}/assets/${id}.png`;

  return (
    <div className="flex flex-row h-16" id={id}>
      <div className="bg-custom-gray sticky left-0 w-20 text-white flex justify-center items-center text-center z-30">
        <img src={imageUrl} alt={channelTitle} className="p-3"></img>
      </div>
      <div className="flex flex-nowrap flex-row justify-center">
        {schedules
          ? schedules.map((program) => {
              const newkey = (counter += 1);
              const width = calculateWidth(program.start, program.end);
              // Construct the correct path. program.id uses a dummy id, so for better identification,
              // we will use program.title as the correct path
              const programUrl = `/${program.title}`;

              const state = {
                ...program,
                channelImage: imageUrl,
              };

              return (
                <Link
                  to={{ pathname: programUrl, state }}
                  key={program.id + newkey}
                >
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
