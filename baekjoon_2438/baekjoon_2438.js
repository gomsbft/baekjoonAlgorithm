const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().split(' ');

const N = +input.shift();

let star = '';

for (let A = 1; A <= N; A++) {
    star += '*';
    console.log(star);
}
