import getInput from "../utils/getInput";

getInput("input.txt", main);

function main(input: string) {
  const seatCodes = input.split("\n");
  const seatIds = seatCodes.map((seatCode) => getSeatIdFromCode(seatCode));
  const sortedIds = seatIds.sort((a, b) => a - b);

  for (let i = 0, j = sortedIds[0]; i < sortedIds.length; i++, j++) {
    if (j !== sortedIds[i]) {
      console.log("Your seat is: ", j);
      break;
    }
  }
}

function getSeatIdFromCode(code: string): number {
  const rowCode = code.slice(0, 7);
  const colCode = code.slice(7, 10);
  let row = Array.from([...Array(128)].keys());
  let col = Array.from([...Array(8)].keys());

  for (let i = 0; i < 7; i++) {
    if (rowCode[i].toLowerCase() === "f") {
      row = row.slice(0, row.length / 2);
    } else {
      row = row.slice(row.length / 2, row.length + 1);
    }
  }

  for (let i = 0; i < 3; i++) {
    if (colCode[i].toLowerCase() === "l") {
      col = col.slice(0, col.length / 2);
    } else {
      col = col.slice(col.length / 2, col.length + 1);
    }
  }

  return parseInt(row.join("")) * 8 + parseInt(col.join(""));
}
