$(document).ready(function() {
    highlightHour ();
    loadItems ();
});

// Make save button clickable and save text to local storage

$(".saveBtn").on("click", function() {
    console.log(this)
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,text);

    highlightHour ();
    loadItems ();
});

// load text from local storage into text area

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// change color block depending on hour of day

function highlightHour() {

    var currentHour = moment().hour();
    console.log(currentHour);

    $(".time-block").each(function(){
        var schedHour = parseInt($(this).attr("id"));
        console.log(schedHour,currentHour);

        if (schedHour < currentHour) {
        $(this).addClass("past");
        }

        if (schedHour == currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        }

        else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future")
        }
    })
}

highlightHour();

