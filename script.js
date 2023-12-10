const theName = "Silje"

function helloTime() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    if ((hours >= 4 && minutes >= 0) && (hours <= 12 && minutes <= 59)) {
        console.log("God morgen!");
        const display = document.getElementById("display");
        display.textContent = `God morgen, ${theName}!`;
    }  else if ((hours >= 13 && minutes >= 0) && (hours <= 14 && minutes <= 59)) {
        console.log("God dag!");
        const display = document.getElementById("display");
        display.textContent = `God dag, ${theName}!`;
    }  else if ((hours >= 15 && minutes >= 0) && (hours <= 17 && minutes <= 59)) {
        console.log("God ettermiddag!");
        const display = document.getElementById("display");
        display.textContent = `God ettermiddag, ${theName}!`;
    }  else if ((hours >= 18 && minutes >= 0) && (hours <= 23 && minutes <= 59)) {
        console.log("God kveld!");
        const display = document.getElementById("display");
        display.textContent = `God kveld, ${theName}!`;
    }  else if ((hours >=0 && minutes >= 0)  && (hours <= 3 && minutes <= 59)) {
        console.log("God natt!");
        const display = document.getElementById("display");
        display.textContent = `God natt, ${theName}!`;
    }
  }


  helloTime()


// const theName = "Silje"

// function goodDay() {
//     let d = new Date();
//     let hours = d.getHours();
//     let minutes = d.getMinutes();
//     if (hours >= 13 && minutes >= 0) {
//         console.log("God morgen!");

//         const display = document.getElementById("display");
//         display.textContent = `God morgen, ${theName}!`;
//     }  else {
//         console.log("God dag!");
// }
// }

// goodDay()