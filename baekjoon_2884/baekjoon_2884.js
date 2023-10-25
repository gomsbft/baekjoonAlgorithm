const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().split(' ');

let hour = +input.shift();
let minutes = +input.shift();

let newMinutes = minutes - 45;

if (newMinutes < 0) {
    newMinutes += 60;

    if (hour === 0) {
        hour = 23;
    } else {
        hour--;
    }
}

console.log(hour, newMinutes);
