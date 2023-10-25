const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().split(' ');

const test = +input.shift();

if (test >= 90) {
    console.log('A');
} else if (test >= 80 && test < 90) {
    console.log('B');
} else if (test >= 70 && test < 80) {
    console.log('C');
} else if (test >= 60 && test < 70) {
    console.log('D');
} else {
    console.log('F');
}
