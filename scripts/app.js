function sayHello(){
    console.log("Hello there");
}

function sayGoodbye(){
    console.log("Goodbye");
}

function init(){
    console.log("hello world");
    sayHello();
    sayGoodbye();
}

window.onload = init;