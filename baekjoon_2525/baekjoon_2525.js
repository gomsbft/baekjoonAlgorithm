const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().split('\n');

// 여기서부터 사용할 변수

// const hour, const minutes와 같은 뜻
const [hour, minutes] = input.shift().split(' ').map(e => +e);
const cookingTime = +input.shift();

// 위의 변수들을 활용해서 코드를 완성시켜보자
// ...
