const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err: object, data: string) => {
  if (err) {
    console.log("Error: ", err);
  }
  main(data);
});

function main(input: string) {
  const list = input.split("\n");

  list.forEach((n, i) => {
    list.forEach((nn, ii) => {
      if (i === ii) return;

      if (parseInt(n) + parseInt(nn) === 2020) {
        console.log(parseInt(n) * parseInt(nn));
      }
    });
  });
}
