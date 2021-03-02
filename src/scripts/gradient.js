let body = document.querySelector("body"); 

let color1 = document.querySelector(".color1"); 
let color2 = document.querySelector(".color2"); 
let color3 = document.querySelector(".color3"); 
let color4 = document.querySelector(".color4"); 
let color5 = document.querySelector(".color5");

let speedStatus = document.querySelector("#speedStatus")
let angleStatus = document.querySelector("#angleStatus")  

function changeGradient() { 
    body.style.background = 
        "linear-gradient(" 
        + angleStatus.innerText + "deg,"
        + color1.value + ", " 
        + color2.value + ", " 
        + color3.value + ", " 
        + color4.value + ", " 
        + color5.value + ")"; 
    body.style.backgroundSize = "400% 400%";
    body.style.animation = "gradient-animation " + speedStatus.innerText + "s ease infinite";
} 

color1.addEventListener("input", changeGradient); 
color2.addEventListener("input", changeGradient); 
color3.addEventListener("input", changeGradient); 
color4.addEventListener("input", changeGradient); 
color5.addEventListener("input", changeGradient); 


function speedChange(val) {
    speedStatus.innerText = val;
    body.style.animation = "gradient-animation " + val + "s ease infinite";
}

function angleChange(val) {
    angleStatus.innerText = val;
    body.style.background = 
        "linear-gradient(" 
        + val + "deg,"
        + color1.value + ", " 
        + color2.value + ", " 
        + color3.value + ", " 
        + color4.value + ", " 
        + color5.value + ")"; 
    body.style.backgroundSize = "400% 400%";
    body.style.animation = "top-bottom " + speedStatus.innerText + "s ease infinite";
}


// scroll angle

let startLeft = 50;
let startTop = 0;
let midLeft = 50;
let midTop = 100;

let scrollStatus = document.querySelector("#scroll-status")
let scrollStart = document.querySelector("#scroll-start")
let scrollMid = document.querySelector("#scroll-mid")
let scrollEnd = document.querySelector("#scroll-end")

function scrollChange(val) {
    let three = 50;
    scrollStatus.innerText = val;
    
    if (val > 0 && val <= 50) {
        startLeft = 50 + parseInt(val);
        startTop = 0;
        midLeft = 50 - parseInt(val);
        midTop = 100;
    } else if (val > 50 && val <= 100) {
        startLeft = 0;
        startTop = 100 - (parseInt(val) - 50);
        midLeft = 100;
        midTop = parseInt(val) - 50;
    } else if (val > 100 && val <= 150) {
        startLeft = 0;
        startTop = parseInt(val) - three;
        midLeft = 100;
        midTop = parseInt(val) - 50;
        three += 2
    } else if (val > 150 && val <= 200) {
        
    }

    scrollStart.innerText = startLeft + " " + startTop;
    scrollMid.innerText = midLeft + " " + midTop;
    scrollEnd.innerText = startLeft + " " + startTop;
}









// var colors = ["red", "orange", "white", "yellow", "green", "blue", "purple", "black"];
//             var currentIndex = 0;

//             setInterval(function () {
//                 document.body.style.cssText = "background-color: " + colors[currentIndex];
//                 currentIndex++;
//                 if (currentIndex == undefined || currentIndex >= colors.length) {
//                     currentIndex = 0;
//                 }
//             }, 1000);