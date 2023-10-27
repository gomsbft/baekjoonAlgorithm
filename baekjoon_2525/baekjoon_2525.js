const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().split('\n');

console.log (Hour, newMinutes);
// 여기서부터 사용할 변수

// const hour, const minutes와 같은 뜻
const [hour, minutes] = input.shift().split(' ').map(e => +e);
const cookingTime = +input.shift();

// 위의 변수들을 활용해서 코드를 완성시켜보자
// ...

let [Hour, Minutes] = input.shift().split(' ').map(e => +e);
const Cook = +input.shift();

let newMinutes = Minutes + Cook;

if (newMinutes >= 60 && newMinutes <120) {
    newMinutes -= 60;

    if (Hour >= 23) {
        Hour -= 23;
    } else {
        Hour++;
    }
} else if (newMinutes >= 120) {
    newMinutes -=120;

    if (Hour >= 23) {
        Hour -= 23;
    } else {
        Hour++;
    }
}

if (newMinutes == 0) {
    Hour++;
}
