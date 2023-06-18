import React, { useEffect, useState } from "react";
import CalendarRow from "../CalendarRow/CalendarRow";
import TimeSpanRow from "../TimeSpanRow/TimeSpanRow";
import ChannelRow from "../ChannelRow/ChannelRow";
import CurrentTimeLine from "../CurrentTimeLine/CurrentTimeLine";

const EPGTable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1337/epg");
        const jsonData = await response.json();
        console.log("jsonData", jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-nowrap flex-col overflow-x-auto items-baseline">
      <div className="relative">
        {/* Calendar row */}
        <CalendarRow />
        {/* Timespan row */}
        <TimeSpanRow />
        {/* CurrentTime */}
        <CurrentTimeLine />
        {/* 1 row */}
        <ChannelRow />
        {/* 2 row */}
        <ChannelRow />
        {/* 3 row */}
        <ChannelRow />
        {/* 4 row */}
        <ChannelRow />
        {/* 5 row */}
        <ChannelRow />
        {/* 6 row */}
        <ChannelRow />
        {/* 7 row */}
        <ChannelRow />
      </div>
    </div>
  );
};

export default EPGTable;
