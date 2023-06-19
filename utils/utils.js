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

export const transformToMilitaryTime = () => {
  const now = new Date();
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const currentTime = now.toLocaleTimeString([], timeOptions);

  let militaryTime = currentTime.replace(/\D/g, ""); // Remove non-digit characters

  if (currentTime.includes("PM")) {
    const hours = parseInt(militaryTime.substr(0, 2), 10);
    militaryTime = ((hours % 12) + 12).toString() + militaryTime.substr(2);
  } else {
    militaryTime = militaryTime.substr(0, 4);
  }

  return militaryTime;
};
