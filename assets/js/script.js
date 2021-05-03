var currentHour = moment().hour(); //get current time in hour
var eachHour
var getTaskClass = ""; //get the class of the task saved
var getTaskId = ""; //get the id of the task saved
var taskText = ""; //get the text entered by the user
var saveEvent = []; //array to save the contents of the local storage

// Display current day in header using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//color code the time blocks to indicate past, present and future
for (var i=9;i<18;i++){

    var index = i-9;
    if (i===currentHour){
        $(".hour").eq(index).next().addClass("present");
    } else if (i<currentHour){
        $(".hour").eq(index).next().addClass("past");
    } else {
        $(".hour").eq(index).next().addClass("future");
    }
    
};

function saveTasks() {
    //everytime save is clicked, saved the task + hour into taskPlanner object.
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".task").val();
        var timeOfHour = $(this).parent().attr("id");

        saveEvent.push({
            task: value, time: timeOfHour
        });
        localStorage.setItem("saveEvent", JSON.stringify(saveEvent));
  });
};

