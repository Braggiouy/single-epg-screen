import React, { useEffect, useMemo, useState } from "react";
import CalendarRow from "../CalendarRow/CalendarRow";
import TimeSpanRow from "../TimeSpanRow/TimeSpanRow";
import ChannelRow from "../ChannelRow/ChannelRow";
import CurrentTimeLine from "../CurrentTimeLine/CurrentTimeLine";
import { transformToMilitaryTime } from "../../../utils/utils";
import { EQUIVALENT_RATIO } from "../../constants";
import { fetchData } from "../../services/api";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { LoadingSpinner } from "../LoadingSpinner";

const EPGTable = () => {
  const [data, setData] = useState(null);

  const initialCurentTimeLinePosition = useMemo(() => {
    const currentTime = transformToMilitaryTime();
    const currentTimeLinePosition = Math.floor(currentTime * EQUIVALENT_RATIO);
    return currentTimeLinePosition || 0;
  }, []);

  useEffect(() => {
    const retireveData = async () => {
      try {
        const response = await fetchData();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    retireveData();
  }, []);

  return (
    <div className="flex flex-nowrap flex-col overflow-x-auto items-baseline">
      <div className="relative">
        {/* Calendar row */}
        <CalendarRow />
        {/* Timespan row */}
        <TimeSpanRow />
        {/* CurrentTime */}
        <CurrentTimeLine initialPosition={initialCurentTimeLinePosition} />
        {/* 1 row */}
        {data ? (
          data.map((item) => {
            return (
              <ChannelRow
                id={item.id}
                key={item.id}
                channelTitle={item.title}
                channelImage={item.images.logo}
                schedules={item.schedules}
              />
            );
          })
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default EPGTable;
