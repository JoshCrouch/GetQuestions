//Unit3TF (3-120)
//Unit4TF (122-187)
//Unit3TA (190-239)
//Unit4TA (241 - 310)

let img = document.getElementById("img");
let List = [];
console.log(List);

let Unit = 1;

/*if (localStorage.getItem("List") != null){
    List = localStorage.getItem("List");
} else {
    List = [];
}*/

let Q;
function main(Type) {
    if (Type == "Get"){ //Add to List
        addList(Q);
        console.log("Got");
    } else if (Type == "Skip") { //Does nothing
        console.log("Skipped");
    } else {
        console.log("What?");
    }

    Q = getQ();
    setimg(Q);

    console.log(Q,List);
}


function getQ(){
    let min, max, temp;
    if (Unit == 0) {
        min = 3;
        max = 310;
    } else if (Unit == 1) {
        min = 3;
        max = 120;
    } else if (Unit == 2) {
        min = 122;
        max = 187;
    } else if (Unit == 3) {
        min = 190;
        max = 239;
    } else if (Unit == 4) {
        min = 241;
        max = 310;
    }

    temp = random(min,max);

    return temp;
}

function addList(Q) {
    List.push(Q);
}

function setimg() {
    let src = "Questions/Slide" + Q.toString() + ".PNG";
    img.src = src;
}

function clear(){
    console.log("cleared")
    List = [];
    localStorage.clear;
    localStorage.setItem("List", []);
    console.log(window.localStorage.getItem("List", "Goofy")) 
}

function get(){
    console.log("get");
    Q = getQ();
    addList();
    setimg();
}

function random(min,max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}

function changeUnit(U) {
    Unit = U;
    console.log(U);
}

function byebye() {
    window.location.href="Rick Roll.html"
}