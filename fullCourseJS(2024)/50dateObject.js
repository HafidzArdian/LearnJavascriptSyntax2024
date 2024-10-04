// Date Object = Objects that contain values that represent dates and times
//              These date objects can be changed and formatted

// date (Year, month, day, hour, minute, second , ms)
// const date = new Date();
// // console.log(date);

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const ms = date.getMilliseconds();
// const dayOfWeek = date.getDay();


// console.log(year);
// console.log(month)
// console.log(day)
// console.log(hour)
// console.log(minute)
// console.log(second)
// console.log(ms)
// console.log(dayOfWeek)

// const data = new Date();

// data.setFullYear(2023);
// data.setMonth(0);
// data.setDate(2);
// data.setHours(10);
// data.setMinutes(15);
// data.setSeconds(30);
// data.setMilliseconds(50);

// console.log(data);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date1 < date2) {
    console.log("Happy New Year!");
}
else {
    console.log("Date 1 is after Date 2");
}