$(function () {
  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth(); // Current month (0-11)
  var year = now.getFullYear();

  // Calculate next month
  var nextMonth = (month + 1) % 12; // Increment month, wrap around to 0
  var nextYear = month === 11 ? year + 1 : year; // Increment year if current month is December

  // Create formatted date string for the next month
  var nextMonthDate = nextMonth + 1 + "/" + day + "/" + nextYear + " 07:07:07"; // Month needs to be +1 for human-readable format

  $("#timer").countdown(
    {
      date: nextMonthDate, //TODO Date format: 07/27/2017 17:00:00
      offset: +2,
      day: "Day",
      days: "Days",
    },
    function () {}
  );
});
