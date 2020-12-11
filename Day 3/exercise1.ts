var fs = require("fs");

fs.readFile("input.txt", "utf-8", function (err: object, data: string) {
  if (!err) main(data);
});

function main(input: string) {
  const map = input.split("\n");
  let x = 0;
  let count = 0;

  for (let i = 1; i < map.length; i++) {
    x += 3;
    if (x >= map[0].length) {
      x = x - map[0].length;
    }

    if (map[i].charAt(x) === "#") {
      count++;
    }
  }

  console.log("Count: ", count);
}
