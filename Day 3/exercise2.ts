var fs = require("fs");

fs.readFile("input.txt", "utf-8", function (err: object, data: string) {
  if (!err) main(data);
});

function main(input: string) {
  const map = input.split("\n");

  const totals = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ].map(([right, down]) => treeCount(right, down, map));

  console.log(totals.reduce((acc, n) => acc * n, 1));
}

function treeCount(right: number, down: number, map: string[]) {
  let x = 0;
  let count = 0;

  for (let i = down; i < map.length; i += down) {
    x += right;

    if (x >= map[0].length) {
      x = x - map[0].length;
    }

    if (map[i].charAt(x) === "#") {
      count++;
    }
  }

  return count;
}
