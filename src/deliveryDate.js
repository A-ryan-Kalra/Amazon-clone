import { useState } from "react";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
var currentDate = d.getDate();
var currentDay = d.getDay();
var currentMonth = d.getMonth();
const deliveryDate = `${weekday[day()]}, ${month()} ${
  Months[currentMonth + (currentDate === 30 || currentDate === 31 ? 1 : 0)]
}`;
// setDeliveryDate(date);

function day() {
  let i;
  if (currentDay <= 4) {
    i = currentDay + 2;
  } else if (currentDay <= 5) {
    i = 0;
  } else {
    i = currentDay - currentDay + 1;
  }
  return i;
}
function month() {
  let i;
  if ((currentMonth + 1) % 2 !== 0 && currentDate <= 29) {
    i = currentDate + 2;
  } else if ((currentMonth + 1) % 2 !== 0 && currentDate <= 30) {
    i = 1;
  } else if ((currentMonth + 1) % 2 !== 0 && currentDate > 31) {
    i = 2;
  } else if ((currentMonth + 1) % 2 === 0 && currentDate <= 28) {
    i = currentDate + 2;
  } else if ((currentMonth + 1) % 2 === 0 && currentDate <= 29) {
    i = 1;
  } else if ((currentMonth + 1) % 2 === 0 && currentDate <= 30) {
    i = 2;
  } else {
    i = currentDate;
  }
  return i;
}

export {
  deliveryDate,
  currentDate,
  currentDay,
  currentMonth,
  day,
  month,
  Months,
};
