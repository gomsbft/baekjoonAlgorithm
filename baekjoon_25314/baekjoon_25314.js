const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().split(' ');

let N = +input.shift();

let long = '';


for (N = 1; N <= input; N++) {
    long += 'long'; 
}

    console.log(long + 'int');