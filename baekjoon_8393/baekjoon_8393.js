let input = require('fs').readFileSync('input.txt').toString().split(' ');

const N = Number(input.shift());

let sum = 0;

for (let A = 1; A <= N; A++) {
    sum += A;
}

console.log(sum);
