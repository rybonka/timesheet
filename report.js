const Holidays = require('date-holidays');
const holidays = new Holidays();

const currentDate = new Date();
const formattedCurrentDate = currentDate.toDateString();
console.log('Current Date:', formattedCurrentDate);

// initialize holidays for SK
holidays.init('SK');

const year = currentDate.getFullYear();
const allHolidays = holidays.getHolidays(year);
// console.log('All Holidays:', allHolidays);
const publicHolidays = allHolidays.filter(holiday => holiday.type === 'public'); // use only 'public' holidays.
// console.log('Public Holidays:', publicHolidays);

const closestFriday = findClosestFriday(currentDate);
function findClosestFriday(date) {
  // Find the closest Friday
  while (date.getDay() !== 5) {
    date.setDate(date.getDate() + 1);
  }
  return date;
}
console.log('Closest Friday:', closestFriday.toDateString()); 

// Check if the closest Friday is a public holiday
const isClosestFridayHoliday = publicHolidays.some(holiday => {
  const holidayDate = new Date(holiday.date);
  return holidayDate.toDateString() === closestFriday.toDateString();
});
// console.log('Is the closest Friday a public holiday?', isClosestFridayHoliday);

// Find the nearest working day before the closest Friday if it's a holiday
let LastWorkingFriday;
if (isClosestFridayHoliday) {
  let previousDay = new Date(closestFriday);
  do {
    previousDay.setDate(previousDay.getDate() - 1);
  } while (publicHolidays.some(holiday => new Date(holiday.date).toDateString() === previousDay.toDateString()));
  LastWorkingFriday = previousDay.toDateString(); // Assign the value to LastWorkingFriday
  console.log('• Last working day in this week due to non-working Friday:', LastWorkingFriday);
} else {
  // If closest Friday is not a holiday, return its value
  LastWorkingFriday = closestFriday.toDateString(); // Assign the value to LastWorkingFriday
  console.log('• Last working day in this week:', LastWorkingFriday);
}

// Find the closest Last Day of Month
const closestLastDayOfMonth = findClosestLastDayOfMonth(currentDate);
function findClosestLastDayOfMonth(date) {
  // Find the closest Last Day of Month
  date.setMonth(date.getMonth() + 1); // Move to the next month
  date.setDate(0); // Set the day to the last day of the previous month (Last Day of Month)
  return date;
}
  console.log('Closest Last Day of Month:', closestLastDayOfMonth.toDateString());

// Check if the closest Last Day of Month is a public holiday or a weekend (Saturday or Sunday)
const isClosestLastDayOfMonthHolidayOrWeekend = isHolidayOrWeekend(closestLastDayOfMonth, publicHolidays);
function isHolidayOrWeekend(date, holidays) {
  // Check if the date is a weekend (Saturday or Sunday)
  if (date.getDay() === 0 || date.getDay() === 6) {
    return true;
  }
  
  // Check if the date is a public holiday
  return holidays.some(holiday => {
    const holidayDate = new Date(holiday.date);
    return holidayDate.toDateString() === date.toDateString();
  });
}
//  console.log('Is the closest Last Day a public holiday or a weekend?', isClosestLastDayOfMonthHolidayOrWeekend);

let LastWorkingMonthDay;
if (isClosestLastDayOfMonthHolidayOrWeekend) {
  let previousDay = new Date(closestLastDayOfMonth);
  while (isHolidayOrWeekend(previousDay, publicHolidays)) {
    previousDay.setDate(previousDay.getDate() - 1);
  }
  LastWorkingMonthDay = previousDay.toDateString();
  console.log('• Last working day in this month due to non-working Last Day:', LastWorkingMonthDay);
} else {
  // If the closest Last Day is not a holiday or weekend, return its value
  LastWorkingMonthDay = closestLastDayOfMonth.toDateString();
  console.log('• Last working day in this month:', LastWorkingMonthDay);
}

  // Check if the current date matches "LastWorkingFriday" or "LastWorkingMonthDay"
  let triggerEvent;
  if (
    formattedCurrentDate === LastWorkingFriday ||
    formattedCurrentDate === LastWorkingMonthDay
  ) {
      triggerEvent = true
      console.log("=> !Do something on", formattedCurrentDate);
  } else {
      triggerEvent = false
      console.log("=> Nothing to do on", formattedCurrentDate);
  }