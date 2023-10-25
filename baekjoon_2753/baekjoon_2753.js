const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().split(' ');

const year = +input.shift();

if (year % 4 === 0 && year % 100 !== 0) {
    console.log('1');
} else if (year % 400 === 0) {
    console.log('1');
} else {
    console.log('0');
}
