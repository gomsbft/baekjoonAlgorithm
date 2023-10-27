const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().split(' ');

const N = +input.shift();

let star = '';
let room = '';
let B = N - 1;

for (A = 1; A <= N; A++) {
    star += '*';
    room += '\u00a0';

    console.log (room + star);
}
