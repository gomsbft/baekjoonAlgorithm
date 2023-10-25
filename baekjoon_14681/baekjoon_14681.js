const [X, Y] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

    if (X > 0 && Y > 0) {
        console.log('1');
    } else if (X < 0 && Y > 0) {
        console.log('2');
    } else if (X < 0 && Y < 0) {
        console.log('3');
    } else {
        console.log('4');
    }
