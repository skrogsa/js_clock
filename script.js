console.log("Hello world");

/*
function helloTime() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    if (hours >= 4 && minutes >= 0) {
        console.log("God morgen!");
    }  else if (hours >= 12 && minutes >= 0) {
        console.log("God dag!");
    }  else if (hours >= 15 && minutes >= 0) {
        console.log("God ettermiddag!");
    }  else if (hours >= 18 && minutes >= 0) {
        console.log("God kveld!");
    }  else if (hours >= 0 && minutes >= 0) {
        console.log("God natt!");
    }
  }
*/

const theName = "Silje"

function goodDay() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    if (hours >= 13 && minutes >= 0) {
        console.log("God morgen!");

        const display = document.getElementById("display");
        display.textContent = `God morgen, ${theName}!`;
    }  else {
        console.log("God dag!");
}
}

goodDay()