const fs = require('fs');
const inputData = fs.readFileSync('input.txt').toString();
const N = Number(inputData);

for(let A = 1; A < 10; A++) {
    console.log (N * A);
}