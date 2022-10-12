//Unit3TF (3-120)
//Unit4TF (122-187)
//Unit3TA (190-239)
//Unit4TA (241 - 310)

let img = document.getElementById("img");
let List = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
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
    for(let i = 0; i < List.length; i++){
        console.log(Q,i)
        if(Q === List[i]){
            console.log(Q, "blocked");
            Q = getQ();
        } else {
            break;
        }
    }

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

function Clear(){
    if(confirm("This will clear all your repeated questions?")){
        console.log("cleared");
    } else {
        console.log("not cleared");
    }
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