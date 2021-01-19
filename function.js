function countToTwentyFour() {
    for(var i = 11; i >= 8; i--) {
        var row = $("<div>");
        var col = $("<div id = daTime >");
        var words = $("<textarea>")
        var save = $("<button>")
        var icon = $("<i>")
        row.attr("id", "hour" + i)
        row.attr("class", "time-block row")
        col.attr("class", "col-md-1 hour")
        words.attr("class", "description col-md-10")
        save.attr("class", "btn saveBtn col-md-1")
        icon.attr("class", "fas fa-save")
        col.append( i + " AM " )
    //  row.append(col).append(words).append(save)
    row.append(col, words, save)
    save.append(icon)
        $("#box").prepend(row)
    }
    
    }
        function countToPM() {
         for(var i = 13; i <= 18; i++){
        var row = $("<div>");
        var col = $("<div id = daTime >");
        var words = $("<textarea>")
        var save = $("<button>")
        var icon = $("<i>")
        row.attr("id", "hour" + i)
        row.attr("class", "time-block row")
        col.attr("class", "col-md-1 hour")
        words.attr("class", "description col-md-10")
        save.attr("class", "btn saveBtn col-md-1")
        icon.attr("class", "fas fa-save")
        col.append( i - 12 + " PM " )   
    //  row.append(col).append(words).append(save)
    row.append(col, words, save)
    save.append(icon)
        $("#box").append(row)
            
    //         $("#box").append(row).append(col).append(words).append(save)
         }
     }
          
countToTwentyFour();
 countToPM(); 

// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})


