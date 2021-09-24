import React from "react";

export const useDate = () => {
  const [today, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const hour = today.getHours();
  const hours = String(hour % 12 === 0 ? (hour % 12) + 1 : hour % 12).padStart(
    2,
    "0"
  );
  const minutes = String(today.getMinutes()).padStart(2, "0");
  let amPm = "am";
  if (hour > 12) {
    amPm = "pm";
  }
  const timeString = `${hours}:${minutes}${amPm}`;
  return {
    hours,
    minutes,
    amPm,
    timeString,
  };
};
