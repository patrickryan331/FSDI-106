// class 1 functions
// function sayHello(){
//     console.log("Hello there");
// }

// function sayGoodbye(){
//     console.log("Goodbye");
// }

// function init(){
//     console.log("hello world");
//     sayHello();
//     sayGoodbye();
// }


function saveTask()
{
    console.log("Saving tasks");
    // get the values
        const title = $("#txtTitle").val();
        const description = $("#txtDescription").val();
        const color = $("#selColor").val();
        const date = $("#selDate").val();
        const status = $("#selStatus").val();
        const budget = $("#numBudget").val();
        console.log(title,description,color,date,status,budget);
        
    // build an object
    let taskToSave = new Task(title,description,color,date,status,budget);
    console.log(taskToSave);


    // save to the server
$.ajax({
    type: "POST",
    url:  "http://fsdiapi.azurewebsites.net/api/tasks/",
    //create the logic to define what to send to the taskToSave object
    data: JSON.stringify(taskToSave),
    contentType: "application/json",
    /////////////////////////////
    success: function (response){
        console.log(response);
        displayTask(taskToSave);
    },
    error: function(error){
        console.log(error);
    },
})
    // display the info from the server
}


function loadTask(){
    // get the data from the api http://fsdiapi.azurewebsites.net/api/tasks
    //console.log the result
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function (response)
        {
            let data = JSON.parse(response);
            //render messages just from my own user input and no one else
            for(let i = 0; i < data.length; i++)
                {
                    let task = data[i]; //gets every object saved on server
                    if(task.name == "patrick") //finds name equal to mine
                        {
                            displayTask(task) //renders to html
                        }
                }
        },
        error: function(error){
            console.log(error);
        },
    })
}






function displayTask(task)
{
    let syntax = `
    <div class='task'>
        <div class='info'>
            <h3>${task.title}</h3>
            <h5>${task.description}</h5>
        </div>
            <label class="status">${task.status}</label>
            <div class="date-budget">
                <label>${task.date}</label>
            </div>
            <div class="date-budget">
                <label>$${task.budget}</label>
            </div>
    </div>
        `
    $(".list-task").append(syntax);
}




function testRequest(){
    $.ajax({
        type: "GET",
        url:  "http://fsdiapi.azurewebsites.net",
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        },
    });
}



function init()
{
    console.log("task manager");
    //load data
    loadTask();
    //hook events
    $("#btnSave").click(saveTask);
}





window.onload = init;
