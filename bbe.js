/*eslint-env es6*/

$(document).ready(function(){ 

//Creating a date object and using it for today's date display
let todaysDate = new Date();

//Duplicating the date object so not to alter 'todaysDate'
//Then adding 42 days, ie 6 weeks
let sixWeekDate = new Date(todaysDate.valueOf());
sixWeekDate.setDate(sixWeekDate.getDate() + 42);

let sixMonthDate = new Date(todaysDate.valueOf());
sixMonthDate.setMonth(sixMonthDate.getMonth() + 6);

let sevenMonthDate = new Date(todaysDate.valueOf());
sevenMonthDate.setMonth(sevenMonthDate.getMonth() + 7);

//Displaying the dates
$("#tddate").append(`  ${todaysDate.toLocaleDateString()}`);
$("#sixweekdate").append(`  ${sixWeekDate.toLocaleDateString()}`);
$("#sixmonthdate").append(`  ${sixMonthDate.toLocaleDateString()}`);
$("#sevenmonthdate").append(`  ${sevenMonthDate.toLocaleDateString()}`);

});
