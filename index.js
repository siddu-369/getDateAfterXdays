var addDays = require("date-fns/addDays");

let getdays = function (x) {
  newDate = addDays(new Date(2020, 7, 22), x);
  console.log(
    `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
};

getdays();
module.exports = getdays;
