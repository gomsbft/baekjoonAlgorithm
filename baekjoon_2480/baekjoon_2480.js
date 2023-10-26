const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().split(' ');

const [first, second, third] = input.map(e => +e);
let total = 0;

if (first == second && second == third) {
    total += 10000 + first * 1000;
} else if (first == second || first == third || second == third) {
    if (first == second) {
        total += 1000 + first * 100;
    }

    if (first == third) {
        total += 1000 + first * 100;
    }

    if (second == third) {
        total += 1000 + second * 100;
    }
} else if (first != second && first != third && second != third) {
    if (first > second && first > third) {
        total += first * 100;
    }

    if (second > first && second > third) {
        total += second * 100;
    }

    if (third > first && third > second) {
        total += third * 100;
    } 
}

console.log (total);