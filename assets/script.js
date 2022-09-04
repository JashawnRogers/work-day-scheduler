$(document).ready(() => {
// Global variables
var todaysDate = document.getElementById("todaysDate");
var currentHour = moment().format("HH");
var currentDateFormat = moment().format("MMMM Do YYYY");



// Display current date at top of page
todaysDate.innerHTML = currentDateFormat;

// Compares time block to actual time
$.map($(".row"), (n, i) => {

    if (currentHour == n.id) {
        $(n).addClass('present');

    } else if (currentHour > n.id) {
        $(n).addClass('past');
    }   
});

// Saves tasks to local storage
$('.saveBtn').click((e) => {
    e.preventDefault();
    let time = $(e.currentTarget).parent().attr('id');
    console.log(time);
    let task = $(e.currentTarget).siblings('.col-8').val();
    console.log(task)
    localStorage.setItem(time, task);
    
});

// Clears tasks from textarea and localstorage
$('#clearBtn').click((e) => {
    e.preventDefault();
    $('.col-8').val(' ');
    localStorage.clear();
});

// Displays saved tasks from localstorage
$('#09').children('.col-8').val(localStorage.getItem('09'));
$('#10').children('.col-8').val(localStorage.getItem('10'));
$('#11').children('.col-8').val(localStorage.getItem('11'));
$('#12').children('.col-8').val(localStorage.getItem('12'));
$('#13').children('.col-8').val(localStorage.getItem('13'));
$('#14').children('.col-8').val(localStorage.getItem('14'));
$('#15').children('.col-8').val(localStorage.getItem('15'));
$('#16').children('.col-8').val(localStorage.getItem('16'));
$('#17').children('.col-8').val(localStorage.getItem('17'));

console.log(currentHour)
});



