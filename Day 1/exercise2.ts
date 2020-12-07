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
      list.forEach((nnn, iii) => {
        if (i === ii || i === iii) return;

        if (parseInt(n) + parseInt(nn) + parseInt(nnn) === 2020) {
          console.log(parseInt(n) * parseInt(nn) * parseInt(nnn));
        }
      });
    });
  });
}
