const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().split(' ');

const A = Number(input.shift());
const B = Number(input.shift());

if (A > B) {
    console.log('>');
} else if (A < B) {
    console.log('<');
} else { 
    console.log('==');
}
