export const formatTimeTo24Hour = (timestamp) => {
  const date = new Date(timestamp);
  let hour = date.getHours();
  let minute = date.getMinutes();

  // Handle midnight (00:00)
  if (hour === 0 && minute === 0) {
    hour = 24;
  }

  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = minute.toString().padStart(2, "0");

  return `${formattedHour === "24" ? "00" : formattedHour}:${formattedMinute}`;
};

export const getMonthDays = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const monthName = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
  }).format(currentDate);

  const daysInMonth = [];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 1; i <= lastDay; i++) {
    const date = new Date(currentYear, currentMonth, i);
    const dayName = dayNames[date.getDay()];
    const dayNumber = String(i).padStart(2, "0");

    daysInMonth.push({ dayName, dayNumber, month: monthName });
  }

  return daysInMonth;
};

export function getCurrentDay() {
  const currentDate = new Date();

  const dayOptions = { weekday: "short" };
  const dayName = currentDate.toLocaleDateString("en-US", dayOptions);

  const dayNumberOptions = { day: "2-digit" };
  const dayNumber = currentDate.toLocaleDateString("en-US", dayNumberOptions);

  const monthOptions = { month: "2-digit" };
  const month = currentDate.toLocaleDateString("en-US", monthOptions);

  return {
    dayName,
    dayNumber,
    month,
  };
}

export const generateTimespanArray = () => {
  const timespanArray = [];
  for (let i = 0; i <= 23; i++) {
    const hour = i < 10 ? `0${i}` : `${i}`;
    timespanArray.push(`${hour}:00`);
  }
  return timespanArray;
};

export const calculateWidth = (startTime, endTime) => {
  const startTimeObj = new Date(startTime);
  const endTimeObj = new Date(endTime);
  const durationMinutes = (endTimeObj - startTimeObj) / (1000 * 60);
  if (durationMinutes <= 0) 0;

  const width = durationMinutes * 4;

  return width;
};

export const focusCurrentTime = () => {
  const currentTimeElement = document.getElementById("current-time-line");
  if (!currentTimeElement) return;

  currentTimeElement?.scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
};

export const getCurrentTimeInMinutes = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeInMinutes = hours * 60 + minutes;
  return currentTimeInMinutes;
};

export const isCurrentTimeWithinTimeSpan = (start, end) => {
  const now = new Date();
  const currentTime = now.getTime();

  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();

  return currentTime >= startTime && currentTime <= endTime;
};
