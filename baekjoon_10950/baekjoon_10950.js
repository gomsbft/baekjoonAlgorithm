let input = require('fs').readFileSync('input.txt').toString().split('\n');

const N = +input.shift();

for (let i = 0; i < N; i++) {
    const [A, B] = input.shift().split(' ').map(element => +element);

    console.log(A + B);
}
