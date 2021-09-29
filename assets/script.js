$(".saveBtn").on("click", function() {
    console.log(this)
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(text,time);
})


function highlightHour() {

    var currentHour = moment().hour();
    console.log(currentHour);

    $(".time-block").each(function(){
        var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

        if (hourBlock < currentHour) {
        $(".description").addClass("past");
        }

        else if (hourBlock === currentHour) {
        $(".description").addClass("present");
        }

        else {
        $(".description").addClass("future");
        }
    })
}

highlightHour();



