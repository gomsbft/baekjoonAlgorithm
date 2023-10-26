const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().split('\n');

let [Hour, Minutes] = input.shift().split(' ').map(e => +e);
const Cook = +input.shift();

let newMinutes = Minutes + Cook;

if (newMinutes >= 60 && newMinutes <120) {
    newMinutes -= 60;

    if (Hour >= 23) {
        Hour -= 23;
    } else {
        Hour++;
    }
} else if (newMinutes >= 120) {
    newMinutes -=120;

    if (Hour >= 23) {
        Hour -= 23;
    } else {
        Hour++;
    }
}

if (newMinutes == 0) {
    Hour++;
}

console.log (Hour, newMinutes);