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

function saveTask(){
    console.log("Saving tasks");
}

function init(){
    console.log("task manager");

    //load data

    //hook events
    $("#btnSave").click(saveTask);

}

window.onload = init;
